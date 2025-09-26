import BF from "./assets/BF2024.jfif";
import sim from "./assets/sim5.jfif";
import DA from "./assets/DA.jfif";
import FC from "./assets/FC.jfif";


function LatestGames() {
  const latestGames = [
    {
      id: 1,
      title: "EA FC 25",
      tagline: "The world’s game, reimagined.",
      image: FC,
      link: "#",
    },
    {
      id: 2,
      title: "Battlefield 2042",
      tagline: "All-out warfare. Evolved.",
      image: BF,
      link: "#",
    },
    {
      id: 3,
      title: "The Sims 5",
      tagline: "Shape your world. Live your story.",
      image: sim,
      link: "#",
    },
    {
      id: 4,
      title: "Dragon Age: Dreadwolf",
      tagline: "Darkness rises once more.",
      image: DA,
      link: "#",
    },
  ];

  return (
    <section id = "Latestgames" className="latest-games py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-5">Latest Games</h2>
        <div className="row g-4">
          {latestGames.map((game) => (
            <div key={game.id} className="col-md-6 col-lg-3">
              <div className="card bg-black text-white border-0 shadow-sm h-100">
                <img
                  src={game.image}
                  alt={game.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{game.title}</h5>
                  <p className="card-text text-muted">{game.tagline}</p>
                  <a
                    href={game.link}
                    className="btn btn-danger mt-auto rounded-pill"
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
