import BF from "./assets/BF2024.jfif";
import sim from "./assets/sim5.jfif";
import DA from "./assets/DA.jfif";
import FC from "./assets/FC.jfif";

function LatestGames() {
  const latestGames = [
    { id: 1, title: "EA FC 25", tagline: "The world’s game, reimagined.", image: FC, link: "#" },
    { id: 2, title: "Battlefield 2042", tagline: "All-out warfare. Evolved.", image: BF, link: "#" },
    { id: 3, title: "The Sims 5", tagline: "Shape your world. Live your story.", image: sim, link: "#" },
    { id: 4, title: "Dragon Age: Dreadwolf", tagline: "Darkness rises once more.", image: DA, link: "#" },
  ];

  return (
    <section id="Latestgames" className="latest-games py-5" style={{ backgroundColor: "#0d0d0d", color: "#fff" }}>
      <div className="container px-3">
        <h2 className="text-center mb-5 fw-bold display-6 text-warning">
          Latest Games
        </h2>
        <div className="row g-4">
          {latestGames.map((game) => (
            <div key={game.id} className="col-12 col-md-6 col-lg-3">
              <div
                className="card border-0 h-100 text-light game-card"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "2px solid #dc3545",
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px #dc3545";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="card-img-top img-fluid"
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px",
                    borderBottom: "2px solid #dc3545",
                  }}
                />

                <div className="card-body d-flex flex-column p-3">
                  <h5 className="card-title fw-bold fs-5 text-warning">
                    {game.title}
                  </h5>
                  <p className="card-text mb-3 text-secondary">{game.tagline}</p>
                  <a
                    href={game.link}
                    className="btn btn-danger mt-auto rounded-pill px-3 py-2 fw-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestGames;
