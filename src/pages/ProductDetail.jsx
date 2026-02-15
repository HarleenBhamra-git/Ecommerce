import { useParams } from "react-router-dom";

export default function ProductDetail() {
      const { id } = useParams();
    return (
        <>
            <main className="productDetailPage">
                {/* Breadcrumb Navigation */}
                <div className="breadcrumb">
                    <span>Home</span>
                    <span className="separator">/</span>
                    <span>Category</span>
                    <span className="separator">/</span>
                    <span className="current">Product Name</span>
                </div>

                <div className="productContainer">
                    {/* Left Side - Product Images */}
                    <div className="productImages">
                        <div className="thumbnails">
                            <img src="/placeholder1.jpg" alt="Thumbnail 1" className="thumbnail" />
                            <img src="/placeholder2.jpg" alt="Thumbnail 2" className="thumbnail" />
                            <img src="/placeholder3.jpg" alt="Thumbnail 3" className="thumbnail" />
                            <img src="/placeholder4.jpg" alt="Thumbnail 4" className="thumbnail" />
                        </div>
                        <div className="mainImage">
                            <img src="/placeholder-main.jpg" alt="Product Main" />
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="productInfo">
                        {/* Category Tag */}
                        <div className="categoryTag">Electronics</div>

                        {/* Product Title */}
                        <h1 className="productTitle">Premium Wireless Headphones</h1>

                        {/* Rating Section */}
                        <div className="ratingSection">
                            <div className="stars">
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star">★</span>
                            </div>
                            <span className="ratingText">4.0 (128 reviews)</span>
                        </div>

                        {/* Price Section */}
                        <div className="priceSection">
                            <span className="currentPrice">$199.99</span>
                            <span className="originalPrice">$299.99</span>
                            <span className="discount">33% OFF</span>
                        </div>

                        {/* Product Variants (Optional) */}
                        <div className="variants">
                            <div className="variantGroup">
                                <label>Color:</label>
                                <div className="options">
                                    <button className="option active">Black</button>
                                    <button className="option">White</button>
                                    <button className="option">Blue</button>
                                </div>
                            </div>
                            <div className="variantGroup">
                                <label>Size:</label>
                                <div className="options">
                                    <button className="option">Small</button>
                                    <button className="option active">Medium</button>
                                    <button className="option">Large</button>
                                </div>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="quantitySection">
                            <label>Quantity:</label>
                            <div className="quantityControl">
                                <button className="qtyBtn">-</button>
                                <input type="number" value="1" min="1" className="qtyInput" />
                                <button className="qtyBtn">+</button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="actionButtons">
                            <button className="addToCart">
                                <span className="icon">🛒</span>
                                Add to Cart
                            </button>
                            <button className="buyNow">Buy Now</button>
                        </div>

                        {/* Additional Info */}
                        <div className="additionalInfo">
                            <div className="infoItem">
                                <span className="icon">✓</span>
                                <span>Free Delivery</span>
                            </div>
                            <div className="infoItem">
                                <span className="icon">↻</span>
                                <span>30 Days Return</span>
                            </div>
                            <div className="infoItem">
                                <span className="icon">★</span>
                                <span>1 Year Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Description Section */}
                <div className="descriptionSection">
                    <h2 className="sectionTitle">Product Description</h2>
                    <div className="descriptionContent">
                        <p>
                            Experience premium sound quality with our wireless headphones. 
                            Featuring advanced noise cancellation technology, 40-hour battery life, 
                            and ergonomic design for all-day comfort.
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Active Noise Cancellation (ANC)</li>
                            <li>40-hour battery life</li>
                            <li>Premium leather ear cushions</li>
                            <li>Bluetooth 5.0 connectivity</li>
                            <li>Foldable design with carrying case</li>
                        </ul>
                        <h3>Specifications:</h3>
                        <table className="specsTable">
                            <tbody>
                                <tr>
                                    <td>Brand</td>
                                    <td>Premium Audio</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>PA-2024-WH</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>250g</td>
                                </tr>
                                <tr>
                                    <td>Battery</td>
                                    <td>40 hours</td>
                                </tr>
                                <tr>
                                    <td>Connectivity</td>
                                    <td>Bluetooth 5.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Similar Products Section */}
                <div className="similarProductsSection">
                    <h2 className="sectionTitle">Similar Products</h2>
                    <div className="similarProducts">
                        <div className="productCard">
                            <img src="/similar1.jpg" alt="Similar Product 1" />
                            <div className="cardContent">
                                <h3>Wireless Earbuds Pro</h3>
                                <div className="cardRating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="ratingCount">(45)</span>
                                </div>
                                <div className="cardPrice">$149.99</div>
                                <button className="cardButton">View Details</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <img src="/similar2.jpg" alt="Similar Product 2" />
                            <div className="cardContent">
                                <h3>Studio Headphones</h3>
                                <div className="cardRating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="ratingCount">(89)</span>
                                </div>
                                <div className="cardPrice">$249.99</div>
                                <button className="cardButton">View Details</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <img src="/similar3.jpg" alt="Similar Product 3" />
                            <div className="cardContent">
                                <h3>Sport Earphones</h3>
                                <div className="cardRating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="ratingCount">(62)</span>
                                </div>
                                <div className="cardPrice">$99.99</div>
                                <button className="cardButton">View Details</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <img src="/similar4.jpg" alt="Similar Product 4" />
                            <div className="cardContent">
                                <h3>Premium Sound Bar</h3>
                                <div className="cardRating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="ratingCount">(34)</span>
                                </div>
                                <div className="cardPrice">$299.99</div>
                                <button className="cardButton">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}