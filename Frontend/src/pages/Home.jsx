import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { logout, user } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const name = user?.name?.split(" ")[0] || "Guest";

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      name: "Crochet Teddy Bear",
      desc: "Soft, handcrafted and cozy — perfect as a gift or decor piece.",
      img: "https://www.artsty.com/cdn/shop/files/WhatsAppImage2023-12-29at06.34.19_81211267.jpg?v=17038121133",
    },
    {
      id: 2,
      name: "Crochet Coaster",
      desc: "Elegant, handmade coasters for your tea or coffee table.",
      img: "https://brunaticality.com/cdn/shop/files/IMG_6562.jpg?v=1686354800&width=1946",
    },
    {
      id: 3,
      name: "Crochet Bag",
      desc: "A stylish crochet bag — sustainable and durable for everyday use.",
      img: "https://m.media-amazon.com/images/I/61o5SLMlkfL._AC_UY1000_.jpg",
    },
  ];

  return (
    <>
      {/*Navbar */}
      <nav className="navbar">
        <div className="left">
          <span className="brand"> Crochet Creations</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-inner">
          
          <h1>Welcome, {name}! 💙</h1>
          <p>We’re so glad to see you back at Crochet Creations 🧶</p>
          <button className="cta" onClick={() => scrollTo("products")}>
            Explore Products
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Crochet Creations is a small handmade business passionate about
          crafting adorable crochet art pieces — each one made with patience,
          skill, and love. From soft toys to elegant decor, every product tells
          a story of creativity and warmth.
        </p>
      </section>

      {/* 🛍 Products Section */}
      <section id="products" className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <button onClick={() => setSelectedProduct(p)}>Show Item</button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {products.map((p) => (
            <img key={p.id} src={p.img} alt={p.name} className="gallery-img" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: crochetcreations@gmail.com</p>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            @crochet.creations
          </a>
        </p>
      </section>

      {/* 🪡 Product Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.desc}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}

      {/* ⚓ Footer */}
      <footer>
        <p>© 2025 Crochet Creations — Handcrafted with love and skill.</p>
      </footer>
    </>
  );
}
