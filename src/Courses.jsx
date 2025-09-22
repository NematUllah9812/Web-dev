import React from "react";

// Example data array for gaming shop with ratings
const games = [
  { id: 1, title: "Call of Duty: Modern Warfare II", price: "$59.99", platform: "PC / PS5 / Xbox", image: "cod.jpg", rating: "IGN 7.5/10" },
  { id: 2, title: "Elden Ring", price: "$49.99", platform: "PC / PS5 / Xbox", image: "eldenring.jpg", rating: "IGN 10/10" },
  { id: 3, title: "FIFA 24", price: "$39.99", platform: "PC / PS5 / Xbox / Switch", image: "fifa24.jpg", rating: "IGN 8/10" },
  { id: 4, title: "Minecraft", price: "$19.99", platform: "PC / PS5 / Xbox / Switch / Mobile", image: "minecraft.jpg", rating: "IGN 9/10" },
  { id: 5, title: "Grand Theft Auto V", price: "$29.99", platform: "PC / PS5 / Xbox", image: "gta5.jpg", rating: "IGN 10/10" },
  { id: 6, title: "Cyberpunk 2077", price: "$39.99", platform: "PC / PS5 / Xbox", image: "cyberpunk2077.jpg", rating: "IGN 7/10" },
  { id: 7, title: "Red Dead Redemption 2", price: "$49.99", platform: "PC / PS5 / Xbox", image: "rdr2.jpg", rating: "IGN 9.7/10" },
  { id: 8, title: "The Witcher 3: Wild Hunt", price: "$19.99", platform: "PC / PS5 / Xbox / Switch", image: "witcher3.jpg", rating: "IGN 9.3/10" },
  { id: 9, title: "Assassin’s Creed Valhalla", price: "$44.99", platform: "PC / PS5 / Xbox", image: "acvalhalla.jpg", rating: "IGN 8/10" },
];

function Courses() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="card bg-dark text-light shadow-lg"
          style={{ width: "18rem" }}
        >
          <img
            src={`assets/${game.image}`}
            alt={game.title}
            className="card-img-top bg-secondary"
            style={{ height: "180px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{game.title}</h5>
            <p className="card-text">Price: {game.price}</p>
            <p className="card-text"><strong>Platform:</strong> {game.platform}</p>
            <p className="card-text"><strong>Rating:</strong> {game.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
