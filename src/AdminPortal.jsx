import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function AdminPortal() {
  const { register, handleSubmit, reset } = useForm();
  const [games, setGames] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load games from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("games");
    if (stored) setGames(JSON.parse(stored));
  }, []);

  // Save games to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  // Add or Update game
  const onSubmit = (data) => {
    const parsed = {
      ...data,
      price: parseFloat(data.price),
      discount: parseFloat(data.discount) || 0,
      image: data.image || "",
      rating: data.rating || "N/A",
      platform: data.platform || "Unknown",
    };

    if (editingIndex !== null) {
      // Editing an existing game
      const updated = [...games];
      updated[editingIndex] = parsed;
      setGames(updated);
      setEditingIndex(null);
    } else {
      // Adding new game
      setGames([...games, parsed]);
    }

    reset();
  };

  // Delete game
  const deleteGame = (index) => {
    const updated = [...games];
    updated.splice(index, 1);
    setGames(updated);
  };

  // Start editing existing game
  const editGame = (index) => {
    const g = games[index];
    reset(g);
    setEditingIndex(index);
  };

  return (
    <div
      className="container py-5 text-white"
      style={{ backgroundColor: "#0d0d0d", minHeight: "100vh" }}
    >
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#ff4d4d" }}>
        Admin Portal
      </h2>

      {/* Game Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-dark p-4 rounded shadow"
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input {...register("title")} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price ($)</label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            step="1"
            {...register("discount")}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Platform</label>
          <input {...register("platform")} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input {...register("rating")} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input {...register("image")} className="form-control" />
        </div>

        <button type="submit" className="btn btn-danger w-100 rounded-pill">
          {editingIndex !== null ? "Save Changes" : "Add Game"}
        </button>
      </form>

      {/* Game List */}
      <div className="mt-5">
        <h4 className="text-center mb-3">User-Added Games</h4>
        {games.length === 0 ? (
          <p className="text-center text-secondary">No games added yet.</p>
        ) : (
          <div className="row g-3">
            {games.map((g, i) => (
              <div
                key={i}
                className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
              >
                <div className="card bg-dark text-light border-0 h-100">
                  <img
                    src={g.image || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={g.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{g.title}</h5>
                    <p className="card-text mb-1">
                      <strong>${g.price}</strong> ({g.discount || 0}% off)
                    </p>
                    <p className="card-text small mb-1">
                      Platform: {g.platform}
                    </p>
                    <p className="card-text small mb-2">Rating: {g.rating}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-warning btn-sm"
                        onClick={() => editGame(i)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteGame(i)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPortal;
