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
    <section id="Latestgames" className="latest-games py-5 bg-dark text-white">
      <div className="container px-3">
        <h2 className="text-center mb-5 fw-bold display-6 display-md-5">
          Latest Games
        </h2>
        <div className="row g-4">
          {latestGames.map((game) => (
            <div key={game.id} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 h-100 game-card">
                <div className="position-relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="card-img-top img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  ></div>
                </div>

                <div className="card-body d-flex flex-column text-light p-3">
                  <h5 className="card-title fw-bold fs-5 text-warning">
                    {game.title}
                  </h5>
                  <p className="card-text mb-3 text-white-50">{game.tagline}</p>
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

      <style>
        {`
          .game-card {
            border-radius: 16px;
            background: rgba(30,30,30,0.9);
            box-shadow: 0 6px 15px rgba(0,0,0,0.6);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .game-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 25px rgba(220,53,69,0.6);
          }
        `}
      </style>
    </section>
  );
}

export default LatestGames;
