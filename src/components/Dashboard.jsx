import React, { useState, useEffect } from "react";
import { ShoppingCart, Star, Filter, Search } from "lucide-react";
import SeasonEndsSaleBanner from "./seasonends";
import { Link } from "react-router-dom";

const Dashboard = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  //for pagination
  const [page, setPage] = useState(1);
  const limit = 10;

  const [productsAPI, setProductsAPI] = useState([]);

  const categories = [
    "All",
    ...new Set(productsAPI.map((p) => p.category?.name)),
  ];

  const filteredProducts = productsAPI.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.title?.toLowerCase().includes(term) ||
      product.description?.toLowerCase().includes(term) ||
      product.category?.name.toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "All" || product.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const offset = (page - 1) * limit;

    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
    )
      .then((response) => response.json())
      .then((data) => setProductsAPI(data))
      .catch((error) => console.error(error));
  }, [page]);

  const renderStars = (rating) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            style={{
              fill: i < Math.floor(rating) ? "#facc15" : "none",
              color: i < Math.floor(rating) ? "#facc15" : "#d1d5db",
            }}
          />
        ))}
        <span style={{ marginLeft: "8px", fontSize: "14px", color: "#4b5563" }}>
          ({rating})
        </span>
      </div>
    );
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#f9fafb", width: "100%" }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1f2937",
              margin: 0,
            }}
          >
            Product Store
          </h1>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            <ShoppingCart size={20} />
            <span>Cart (0)</span>
          </button>
        </div>
      </header>

      <SeasonEndsSaleBanner />

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 16px" }}
      >
        {/* Search and Filter Section */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, position: "relative" }}>
              <Search
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(37, 99, 235, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Filter size={20} style={{ color: "#4b5563" }} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(37, 99, 235, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProducts.map((product) => (
            <div>
          
            <div
              className="productCard"
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              
            >
                <Link to={`/productDetail/${product.id}`}>
               <div
                style={{
                  height: "192px",
                  overflow: "hidden",
                  backgroundColor: "#e5e7eb",
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform:
                      hoveredCard === product.id ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
                </Link>
              
              <div style={{ padding: "16px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#2563eb",
                    backgroundColor: "#eff6ff",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  {product.category.name}
                </span>
                <h3
                  style={{
                    marginTop: "8px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1f2937",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "14px",
                    color: "#4b5563",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.5",
                  }}
                >
                  {product.description}
                </p>
                
                <div style={{ marginTop: "12px" }}>
                  {renderStars(product.rating)}
                </div>
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#1f2937",
                    }}
                  >
                    ${product.price}
                  </span>
                  <button
                    style={{
                      backgroundColor: "#2563eb",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1d4ed8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#2563eb")
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
             </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <p style={{ color: "#6b7280", fontSize: "18px" }}>
              No products found
            </p>
          </div>
        )}
      </div>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>

      
    </div>
  );
};

export default Dashboard;
