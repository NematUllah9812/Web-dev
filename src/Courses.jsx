import React from "react";

// Example data array for clothing store
const clothes = [
  { id: 1, title: "Classic White T-Shirt", price: "$19.99", category: "Men / Women", image: "tshirt.jpg", rating: "⭐ 4.7/5" },
  { id: 2, title: "Slim Fit Jeans", price: "$39.99", category: "Men", image: "jeans.jpg", rating: "⭐ 4.5/5" },
  { id: 3, title: "Summer Floral Dress", price: "$49.99", category: "Women", image: "dress.jpg", rating: "⭐ 4.8/5" },
  { id: 4, title: "Hoodie Sweatshirt", price: "$29.99", category: "Unisex", image: "hoodie.jpg", rating: "⭐ 4.6/5" },
  { id: 5, title: "Sports Jacket", price: "$59.99", category: "Men", image: "jacket.jpg", rating: "⭐ 4.9/5" },
  { id: 6, title: "Sneakers", price: "$69.99", category: "Unisex", image: "sneakers.jpg", rating: "⭐ 4.8/5" },
  { id: 6, title: "Sneakers", price: "$69.99", category: "Unisex", image: "sneakers.jpg", rating: "⭐ 4.8/5" }
];

function LynixFitStore() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4 bg-light">
      {clothes.map((item) => (
        <div
          key={item.id}
          className="card text-dark shadow-sm border-0"
          style={{ width: "18rem" }}
        >
          <img
            src={`assets/${item.image}`}
            alt={item.title}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title fw-bold">{item.title}</h5>
            <p className="card-text text-muted">💲 {item.price}</p>
            <p className="card-text"><strong>Category:</strong> {item.category}</p>
            <p className="card-text"><strong>Rating:</strong> {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LynixFitStore;
