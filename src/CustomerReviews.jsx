function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      review:
        "Absolutely love the graphics and gameplay! Feels so immersive.",
    },
    {
      id: 2,
      name: "Maria Lopez",
      review:
        "Customer support was fast and friendly. Great experience overall!",
    },
    {
      id: 3,
      name: "James Carter",
      review:
        "The discounts make premium games affordable. Totally recommend!",
    },
  ];

  const brandColor = "#ff4d4d";

  return (
    <section
      id="reviews"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        color: "#fff",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold display-6"
          style={{
            color: brandColor,
            letterSpacing: "1px",
          }}
        >
          What Gamers Say!
        </h2>

        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-12 col-sm-6 col-lg-4">
              <div
                className="card h-100 text-light border-0 shadow rounded-4 text-center"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: `2px solid ${brandColor}`,
                  boxShadow: `0 0 12px ${brandColor}33`,
                  padding: "1.5rem",
                  transition: "all 0.3s ease",
                }}
              >
                <h6
                  className="fw-bold mb-3"
                  style={{
                    color: brandColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {review.name}
                </h6>
                <p
                  className="fst-italic opacity-75"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  “{review.review}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
