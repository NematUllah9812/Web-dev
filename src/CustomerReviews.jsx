function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      review: "Absolutely love the graphics and gameplay! Feels so immersive.",
    },
    {
      id: 2,
      name: "Maria Lopez",
      review: "Customer support was fast and friendly. Great experience overall!",
    },
    {
      id: 3,
      name: "James Carter",
      review: "The discounts make premium games affordable. Totally recommend!",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-5"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-light display-6">
          What Gamers Say
        </h2>
        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-4">
              <div
                className="card h-100 border-0 shadow-lg rounded-4 text-light"
                style={{
                  background: "rgba(30,30,47,0.8)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="card-body text-center p-4">
                  <h6 className="fw-semibold text-danger mb-3">
                    {review.name}
                  </h6>
                  <p className="fst-italic text-light opacity-75">
                    “{review.review}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
