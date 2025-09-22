const reviews = [
  { id: 1, name: "Ayesha Khan", review: "Loved the fabric quality! The t-shirt feels super soft and fits perfectly.", rating: 5 },
  { id: 2, name: "David Lee", review: "Trendy designs and good value for money. Delivery was a bit slow, but worth it.", rating: 4 },
  { id: 3, name: "Sara Ahmed", review: "Amazing experience! LynixFit’s customer support helped me with size exchange smoothly.", rating: 5 },
  { id: 3, name: "Sara Ahmed", review: "Amazing experience! LynixFit’s customer support helped me with size exchange smoothly.", rating: 5 },
];

function CustomerReviews() {
  return (
    <div className="container my-5">
      <h2 className="text-white mb-3">LynixFit Customer Reviews</h2>
      <p className="text-white mb-4">
        See what our customers are saying about their LynixFit clothing experience.
      </p>

      <div className="row">
        {reviews.map((rev) => (
          <div key={rev.id} className="col-md-4 mb-3">
            <div className="card bg-white text-dark h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{rev.name}</h5>
                <p className="card-text">{rev.review}</p>
                <p className="text-warning mb-0">
                  {"⭐".repeat(rev.rating)}{" "}
                  <span className="text-muted">({rev.rating}/5)</span>
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
