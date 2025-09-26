import cod from './assets/cod.jpg'
import cyber from './assets/cyber.jpg'
import rdr2 from './assets/rdr2.jpg'
import elden from './assets/elden.webp'
import fifa from './assets/fifa.png'
import mine from './assets/mine.webp'
import AC from './assets/AC.jpg'

const games = [
  { id: 1, title: "Call of Duty: Modern Warfare II", price: "$59.99", platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 7.5/10" },
  { id: 2, title: "Elden Ring", price: "$49.99", platform: "PC / PS5 / Xbox", image: elden, rating: "IGN 10/10" },
  { id: 3, title: "FIFA 24", price: "$39.99", platform: "PC / PS5 / Xbox / Switch", image: fifa, rating: "IGN 8/10" },
  { id: 4, title: "Minecraft", price: "$19.99", platform: "PC / PS5 / Xbox / Switch / Mobile", image: mine, rating: "IGN 9/10" },
  { id: 5, title: "Grand Theft Auto V", price: "$29.99", platform: "PC / PS5 / Xbox", image: cod, rating: "IGN 10/10" },
  { id: 6, title: "Cyberpunk 2077", price: "$39.99", platform: "PC / PS5 / Xbox", image: cyber, rating: "IGN 7/10" },
  { id: 7, title: "Red Dead Redemption 2", price: "$49.99", platform: "PC / PS5 / Xbox", image: rdr2, rating: "IGN 9.7/10" },
  { id: 8, title: "The Witcher 3: Wild Hunt", price: "$19.99", platform: "PC / PS5 / Xbox / Switch", image: cod, rating: "IGN 9.3/10" },
  { id: 9, title: "Assassin’s Creed Valhalla", price: "$44.99", platform: "PC / PS5 / Xbox", image: AC, rating: "IGN 8/10" },
];

function Games() {
  return <>
    <h2 className="text-center mb-5 fw-bold display-5">Latest Games</h2 >
    <div id = "games" className="d-flex flex-wrap justify-content-center gap-4 p-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="card bg-dark text-light shadow-lg"
          style={{ width: "18rem" }}
        >
          <img
            src={game.image}
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
</>
}

export default Games;
