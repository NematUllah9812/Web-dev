import cod from "./assets/cod.jpg";
import cyber from "./assets/cyber.jpg";
import rdr2 from "./assets/rdr2.jpg";
import elden from "./assets/elden.webp";
import fifa from "./assets/fifa.png";
import mine from "./assets/mine.webp";
import AC from "./assets/AC.jpg";

const games = [
  { id: 1, title: "Call of Duty: Modern Warfare II", price: 59.99, discount: 20, platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 7.5/10" },
  { id: 2, title: "Elden Ring", price: 49.99, discount: 0, platform: "PC / PS5 / Xbox", image: elden, rating: "IGN 10/10" },
  { id: 3, title: "FIFA 24", price: 39.99, discount: 10, platform: "PC / PS5 / Xbox / Switch", image: fifa, rating: "IGN 8/10" },
  { id: 4, title: "Minecraft", price: 19.99, discount: 0, platform: "PC / PS5 / Xbox / Switch / Mobile", image: mine, rating: "IGN 9/10" },
  { id: 5, title: "Grand Theft Auto V", price: 29.99, discount: 15, platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 10/10" },
  { id: 6, title: "Cyberpunk 2077", price: 39.99, discount: 25, platform: "PC / PS5 / Xbox", image: cyber, rating: "IGN 7/10" },
  { id: 7, title: "Red Dead Redemption 2", price: 49.99, discount: 0, platform: "PC / PS5 / Xbox", image: rdr2, rating: "IGN 9.7/10" },
  { id: 8, title: "The Witcher 3: Wild Hunt", price: 19.99, discount: 50, platform: "PC / PS5 / Xbox / Switch", image: cod, rating: "IGN 9.3/10" },
  { id: 9, title: "Assassin’s Creed Valhalla", price: 44.99, discount: 30, platform: "PC / PS5 / Xbox", image: AC, rating: "IGN 8/10" },
];

function Games() {
  const brandColor = "#ff4d4d";

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
          style={{
            color: brandColor,
          }}
        >
          Games
        </h2>

        <div className="row g-4">
          {games.map((game) => {
            const finalPrice = (game.price - (game.price * game.discount) / 100).toFixed(2);

            return (
              <div key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card text-light border-0 h-100 position-relative game-card"
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: `2px solid ${brandColor}`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = `0 8px 20px ${brandColor}66`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {game.discount > 0 && (
                    <span
                      className="badge bg-danger position-absolute"
                      style={{ top: "10px", right: "10px", fontSize: "0.9rem" }}
                    >
                      -{game.discount}%
                    </span>
                  )}

                  <img
                    src={game.image}
                    alt={game.title}
                    className="card-img-top img-fluid"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderBottom: `2px solid ${brandColor}`,
                    }}
                  />

                  <div className="card-body d-flex flex-column p-3">
                    <h5
                      className="card-title mb-2 fw-bold"
                      style={{ color: brandColor, fontSize: "1rem" }}
                    >
                      {game.title}
                    </h5>

                    <p className="card-text mb-2" style={{ fontSize: "0.9rem" }}>
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
                      <button
                        className="btn rounded-pill w-50"
                        style={{
                          backgroundColor: brandColor,
                          border: "none",
                          color: "#fff",
                          fontSize: "0.85rem",
                        }}
                      >
                        Buy Now
                      </button>
                      <button
                        className="btn btn-outline-warning rounded-pill w-50"
                        style={{
                          fontSize: "0.85rem",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-outline-danger rounded-pill px-4"
            onClick={() => (window.location.href = "/more-games.html")}
          >
            More Games →
          </button>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 992px) {
            .game-card img {
              height: 150px !important;
            }
            .game-card h5 {
              font-size: 0.95rem !important;
            }
            .game-card p {
              font-size: 0.85rem !important;
            }
          }

          @media (max-width: 576px) {
            .game-card {
              border-width: 1.5px !important;
              padding: 0.5rem !important;
            }
            .game-card img {
              height: 130px !important;
            }
            .game-card h5 {
              font-size: 0.9rem !important;
            }
            .game-card p {
              font-size: 0.8rem !important;
            }
            .game-card button {
              font-size: 0.75rem !important;
              padding: 0.4rem 0.6rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Games;
