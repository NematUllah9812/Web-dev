import BF from "./assets/BF2024.jfif";
import sim from "./assets/sim5.jfif";
import DA from "./assets/DA.jfif";
import FC from "./assets/FC.jfif";

function LatestGames() {
  const brandColor = "#ff4d4d";
  const latestGames = [
    { id: 1, title: "EA FC 25", tagline: "The world’s game, reimagined.", image: FC, link: "#" },
    { id: 2, title: "Battlefield 2042", tagline: "All-out warfare. Evolved.", image: BF, link: "#" },
    { id: 3, title: "The Sims 5", tagline: "Shape your world. Live your story.", image: sim, link: "#" },
    { id: 4, title: "Dragon Age: Dreadwolf", tagline: "Darkness rises once more.", image: DA, link: "#" },
  ];

  return (
    <section
      id="Latestgames"
      className="latest-games py-5"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
      }}
    >
      <div className="container px-3">
        <h2
          className="text-center mb-5 fw-bold display-6"
          style={{
            color: brandColor,
            letterSpacing: "1px",
          }}
        >
          Latest Games
        </h2>

        <div className="row g-4">
          {latestGames.map((game) => (
            <div key={game.id} className="col-12 col-sm-6 col-lg-3">
              <div className="card border-0 h-100 text-light game-card">
                <img
                  src={game.image}
                  alt={game.title}
                  className="card-img-top img-fluid"
                />

                <div className="card-body d-flex flex-column p-3">
                  <h5 className="card-title fw-bold text-warning mb-2">
                    {game.title}
                  </h5>
                  <p className="card-text text-secondary mb-3">
                    {game.tagline}
                  </p>
                  <a
                    href={game.link}
                    className="btn mt-auto rounded-pill fw-semibold learn-btn"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .game-card {
            background-color: #1a1a1a;
            border: 2px solid ${brandColor};
            border-radius: 16px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .game-card img {
            object-fit: cover;
            height: 220px;
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
            border-bottom: 2px solid ${brandColor};
          }

          .game-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px ${brandColor}80;
          }

          .learn-btn {
            background-color: ${brandColor};
            border: none;
            color: #fff;
            font-size: 0.85rem;
            padding: 0.6rem 1.2rem;
            transition: background-color 0.3s ease;
          }

          .learn-btn:hover {
            background-color: #ff1a1a;
          }

          @media (max-width: 992px) {
            .game-card img {
              height: 180px !important;
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
              border-radius: 12px !important;
              padding: 0.5rem !important;
            }
            .game-card img {
              height: 150px !important;
            }
            .game-card h5 {
              font-size: 0.9rem !important;
            }
            .game-card p {
              font-size: 0.8rem !important;
            }
            .learn-btn {
              font-size: 0.75rem !important;
              padding: 0.4rem 0.8rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default LatestGames;
