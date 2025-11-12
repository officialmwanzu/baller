// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// ⚠️ IMPORTANT: In a production environment, restrict 'origin' to your frontend domain
app.use(cors({ 
    origin: 'http://127.0.0.1:5500', // Example: Use your frontend server address 
    methods: 'GET,POST'
})); 
app.use(express.json());

// --- Database Connection (MongoDB) ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        seedProducts(); // Insert initial products if the collection is empty
    })
    .catch(err => console.error('MongoDB connection error:', err));

// --- Schemas & Models ---

// Product Schema (for "Our Signature Collection")
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image_url: { type: String, required: true },
    tag: { type: String, default: '' } // e.g., "Best Seller", "New"
});
const Product = mongoose.model('Product', productSchema);

// Subscription Schema (for newsletter sign-ups)
const subscriptionSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    subscribed_at: { type: Date, default: Date.now }
});
const Subscription = mongoose.model('Subscription', subscriptionSchema);

// --- API Routes ---

/** * GET /api/products 
 * Fetches the product list for the "Signature Collection" section
 */
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

/** * POST /api/subscribe 
 * Handles the newsletter email submission
 */
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    try {
        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        res.status(201).json({ message: 'Thank you for subscribing to GlowLuxe!' });
    } catch (err) {
        if (err.code === 11000) { // MongoDB duplicate key error (email already exists)
            return res.status(409).json({ message: 'This email is already subscribed.' });
        }
        res.status(500).json({ message: 'An error occurred during subscription.' });
    }
});

// --- Utility Function to Seed Data ---
async function seedProducts() {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
        const initialProducts = [
            { name: "Radiant Glow Face Oil", description: "For normal to dry skin", price: 34.99, tag: "Best Seller", image_url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=688" },
            { name: "Silky Strands Hair Elixir", description: "For all hair types", price: 29.99, tag: "", image_url: "https://images.unsplash.com/photo-1596755094514-f87e22585ca2?auto=format&fit=crop&w=688" },
            { name: "Golden Nectar Body Oil", description: "For silky smooth skin", price: 39.99, tag: "New", image_url: "https://images.unsplash.com/photo-1607602132700-06825894472a?auto=format&fit=crop&w=687" }
        ];
        await Product.insertMany(initialProducts);
        console.log('Initial product data seeded.');
    }
}

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
