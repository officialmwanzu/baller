
# ✨ GlowLuxe | Premium Skincare & Hair Oil Moisturizer Landing Page

A beautifully designed, responsive, and modern e-commerce landing page prototype for a premium face and hair oil moisturizer brand, **GlowLuxe**.

This single-page site uses a rich, earthy color palette (ambers, creams, and golds) to convey a sense of natural luxury and high quality.



[Image of a skincare product bottle]


---

## 🌟 Features

* **Responsive Design:** Fully adapts to mobile, tablet, and desktop screens.
* **Aesthetic & Branding:** Utilizes the custom `Playfair Display` and `Poppins` fonts, along with a warm, luxury-focused color scheme.
* **Hero Section with Animation:** Features a prominent call-to-action and subtle CSS-animated "oil droplets" for visual interest.
* **Multi-Section Layout:** Includes dedicated sections for:
    * Benefits (`Transformative Beauty Elixir`)
    * Product Showcase (`Our Signature Collection`)
    * Key Ingredients (`Nature's Potent Elixirs`)
    * Testimonials (`Glowing Reviews`)
    * Call-to-Action (`Ready to Experience GlowLuxe?`)
* **Modern Styling:** Built entirely with **Tailwind CSS** utility classes for a clean and efficient stylesheet.
* **Interactive Elements:** Hover effects on product cards and ingredient icons.

---

## 🛠️ Technology Stack

This project is a static HTML file that utilizes external libraries for styling and icons.

* **HTML5:** Structure and content.
* **CSS3 (Inline `<style>` block):** Custom variables, fonts, and keyframe animations.
* **Tailwind CSS:** Used via CDN for rapid utility-first styling and responsiveness.
* **Font Awesome (via CDN):** For cosmetic and informative icons.
* **Vanilla JavaScript:** Simple DOM manipulation for adding animation delays and managing hover effects.

---

## 🚀 Getting Started

Since this is a single, static HTML file with external dependencies, deployment is incredibly simple.

### Prerequisites

You need a web browser to view the page. No local build tools are required.

### Viewing Locally

1.  **Clone the repository** (or copy the provided code into an `index.html` file).
    ```bash
    git clone [https://github.com/your-username/GlowLuxe-Landing-Page.git](https://github.com/your-username/GlowLuxe-Landing-Page.git)
    cd GlowLuxe-Landing-Page
    ```
2.  **Open the file:** Simply double-click the `index.html` file in your file explorer. It will open directly in your default web browser.

### CDN Links Used

The project relies on the following external CDNs:

| Resource | Purpose |
| :--- | :--- |
| `https://cdn.tailwindcss.com` | Core Tailwind CSS functionality |
| `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` | Font Awesome icons |
| `https://fonts.googleapis.com/...` | Custom Google Fonts (Playfair Display & Poppins) |

---

## 🎨 Customization

### Colors & Branding

The primary brand colors are defined by the Tailwind classes used throughout the page:

* **Primary Accent:** Amber tones (e.g., `amber-900`, `amber-700`, `amber-100`).
* **Background:** Off-white/Creamy tone (`#faf6f2`).
* **Title Font:** `'Playfair Display', serif` (applied via `.title-font`).
* **Body Font:** `'Poppins', sans-serif`.

### CSS Animations

The subtle floating animation for the "oil droplets" in the Hero section is controlled by the following CSS:

```css
.oil-droplet {
    /* ... styling ... */
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0) rotate(0deg); }
}
````

-----

## 📝 License

This project is open source and available under the **MIT License**.

-----

## 📧 Contact

For any questions or feedback, please contact https://github.com/officialmwanzu or open an issue in this repository.

```
```
