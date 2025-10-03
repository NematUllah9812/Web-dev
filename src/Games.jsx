import cod from './assets/cod.jpg'
import cyber from './assets/cyber.jpg'
import rdr2 from './assets/rdr2.jpg'
import elden from './assets/elden.webp'
import fifa from './assets/fifa.png'
import mine from './assets/mine.webp'
import AC from './assets/AC.jpg'

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
  return (
    <section id="games" className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-6 display-md-5">Games</h2>
        <div className="row g-4">
          {games.map((game) => {
            const finalPrice = (game.price - (game.price * game.discount) / 100).toFixed(2);

            return (
              <div key={game.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card bg-dark text-light shadow-lg border-0 h-100 position-relative">
                  
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
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-2">{game.title}</h5>

                    <p className="card-text mb-2">
                      {game.discount > 0 ? (
                        <>
                          <span className="text-light opacity-50 text-decoration-line-through me-2">
                            ${game.price.toFixed(2)}
                          </span>
                          <span className="text-warning fw-bold">${finalPrice}</span>
                        </>
                      ) : (
                        <span className="fw-bold">${game.price.toFixed(2)}</span>
                      )}
                    </p>

                    <p className="card-text small mb-1"><strong>Platform:</strong> {game.platform}</p>
                    <p className="card-text small mb-3"><strong>Rating:</strong> {game.rating}</p>

                    <div className="mt-auto d-flex justify-content-between gap-2">
                      <button className="btn btn-danger rounded-pill w-50">Buy Now</button>
                      <button className="btn btn-outline-light rounded-pill w-50">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-outline-warning rounded-pill px-4"
            onClick={() => window.location.href = "/more-games.html"}
          >
            More Games →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Games;
