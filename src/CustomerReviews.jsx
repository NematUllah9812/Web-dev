
const reviews = [
  { id: 1, name: "John Doe", review: "Excellent service and quick delivery! Highly satisfied with my purchase.", rating: 5 },
  { id: 2, name: "Mary Smith", review: "The product quality is great, but shipping took a little longer than expected.", rating: 4 },
  { id: 3, name: "Ali Raza", review: "Amazing experience! The customer support was very helpful.", rating: 5 },
];

function CustomerReviews() {
  return (
    <div className="container my-5">
      <h2 className="text-light mb-3">Customer Reviews</h2>
      <p className="text-muted mb-4">
        See what our customers have to say about their shopping experience.
      </p>

      <div className="row">
        {reviews.map((rev) => (
          <div key={rev.id} className="col-md-4 mb-3">
            <div className="card bg-dark text-light h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{rev.name}</h5>
                <p className="card-text">{rev.review}</p>
                <p className="text-warning">
                  {"⭐".repeat(rev.rating)} <span className="text-muted">({rev.rating}/5)</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
