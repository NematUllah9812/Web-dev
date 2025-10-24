import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cod from "./assets/cod.jpg";
import cyber from "./assets/cyber.jpg";
import rdr2 from "./assets/rdr2.jpg";
import elden from "./assets/elden.webp";
import fifa from "./assets/fifa.png";
import mine from "./assets/mine.webp";
import AC from "./assets/AC.jpg";
import gow from "./assets/rdr2.jpg";
import horizon from "./assets/fifa.png";
import nfs from "./assets/elden.webp";
import re4 from "./assets/cod.jpg";

const defaultGames = [
  { id: 1, title: "Call of Duty: Modern Warfare II", price: 59.99, discount: 20, platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 7.5/10" },
  { id: 2, title: "Elden Ring", price: 49.99, discount: 0, platform: "PC / PS5 / Xbox", image: elden, rating: "IGN 10/10" },
  { id: 3, title: "FIFA 24", price: 39.99, discount: 10, platform: "PC / PS5 / Xbox / Switch", image: fifa, rating: "IGN 8/10" },
  { id: 4, title: "Minecraft", price: 19.99, discount: 0, platform: "PC / PS5 / Xbox / Switch / Mobile", image: mine, rating: "IGN 9/10" },
  { id: 5, title: "Grand Theft Auto V", price: 29.99, discount: 15, platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 10/10" },
  { id: 6, title: "Cyberpunk 2077", price: 39.99, discount: 25, platform: "PC / PS5 / Xbox", image: cyber, rating: "IGN 7/10" },
  { id: 7, title: "Red Dead Redemption 2", price: 49.99, discount: 0, platform: "PC / PS5 / Xbox", image: rdr2, rating: "IGN 9.7/10" },
  { id: 8, title: "The Witcher 3: Wild Hunt", price: 19.99, discount: 50, platform: "PC / PS5 / Xbox / Switch", image: cod, rating: "IGN 9.3/10" },
  { id: 9, title: "Assassin’s Creed Valhalla", price: 44.99, discount: 30, platform: "PC / PS5 / Xbox", image: AC, rating: "IGN 8/10" },
  { id: 10, title: "God of War Ragnarök", price: 69.99, discount: 10, platform: "PS5 / PC", image: gow, rating: "IGN 9.5/10" },
  { id: 11, title: "Horizon Forbidden West", price: 59.99, discount: 20, platform: "PS5 / PC", image: horizon, rating: "IGN 9/10" },
  { id: 12, title: "Resident Evil 4 Remake", price: 49.99, discount: 5, platform: "PC / PS5 / Xbox", image: re4, rating: "IGN 9/10" },
  { id: 13, title: "Need for Speed Unbound", price: 39.99, discount: 15, platform: "PC / PS5 / Xbox", image: nfs, rating: "IGN 8.2/10" },
];

function Games({ preview = false }) {
  const [allGames, setAllGames] = useState(defaultGames);

  // ✅ Load Admin-added games from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("games");
    if (stored) {
      const addedGames = JSON.parse(stored).map((g) => ({
        id: g.id,
        title: g.title,
        price: g.price,
        discount: 0,
        platform: "User Added",
        image: g.image,
        rating: "N/A",
      }));
      setAllGames([...defaultGames, ...addedGames]);
    }
  }, []);

  const brandColor = "#ff4d4d";
  const gamesToShow = preview ? allGames.slice(0, 4) : allGames;

  return (
    <section
      id="games"
      className="py-5"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold display-6"
          style={{ color: brandColor }}
        >
          {preview ? "Featured Games" : "All Games"}
        </h2>

        <div className="row g-4">
          {gamesToShow.map((game) => {
            const finalPrice = (game.price - (game.price * (game.discount || 0)) / 100).toFixed(2);

            return (
              <div key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card text-light border-0 h-100 game-card">
                  {game.discount > 0 && (
                    <span className="badge bg-danger discount-badge">
                      -{game.discount}%
                    </span>
                  )}

                  <img src={game.image} alt={game.title} className="card-img-top" />

                  <div className="card-body d-flex flex-column p-3">
                    <h5 className="card-title fw-bold">{game.title}</h5>

                    <p className="card-text mb-2">
                      {game.discount > 0 ? (
                        <>
                          <span className="text-secondary text-decoration-line-through me-2">
                            ${game.price.toFixed(2)}
                          </span>
                          <span className="text-danger fw-bold">${finalPrice}</span>
                        </>
                      ) : (
                        <span className="fw-bold text-danger">${game.price.toFixed(2)}</span>
                      )}
                    </p>

                    <p className="card-text small mb-1">
                      <strong>Platform:</strong> {game.platform}
                    </p>
                    <p className="card-text small mb-3">
                      <strong>Rating:</strong> {game.rating}
                    </p>

                    <div className="mt-auto d-flex justify-content-between gap-2">
                      <button className="btn buy-btn w-50 rounded-pill">Buy Now</button>
                      <button className="btn add-btn w-50 rounded-pill">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-5">
            <Link
              to="/games"
              className="btn btn-outline-danger rounded-pill px-4"
            >
              More Games →
            </Link>
          </div>
        )}
      </div>

      <style>
        {`
          .game-card {
            background-color: #1a1a1a;
            border: 2px solid ${brandColor};
            border-radius: 16px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            position: relative;
          }

          .game-card img {
            height: 180px;
            object-fit: cover;
            width: 100%;
            border-bottom: 2px solid ${brandColor};
          }

          .discount-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 0.9rem;
          }

          .game-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px ${brandColor}66;
            border-color: #ff6666 !important;
          }

          .buy-btn {
            background-color: ${brandColor};
            color: #fff;
            border: none;
            font-size: 0.85rem;
            transition: background-color 0.3s ease;
          }

          .buy-btn:hover {
            background-color: #ff1a1a;
          }

          .add-btn {
            border: 1px solid #ffc107;
            color: #ffc107;
            font-size: 0.85rem;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .add-btn:hover {
            background-color: #ffc107;
            color: #000;
          }
        `}
      </style>
    </section>
  );
}

export default Games;
