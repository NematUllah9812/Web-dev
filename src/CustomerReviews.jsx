import { FaStar, FaQuoteLeft } from "react-icons/fa";

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
          What Gamers Say
        </h2>

        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-12 col-sm-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-lg rounded-4 text-light"
                style={{
                  background: "linear-gradient(145deg, #161616, #1f1f1f)",
                  border: `2px solid ${brandColor}`,
                  boxShadow: `0 0 10px ${brandColor}33`,
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 0 20px ${brandColor}88`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 0 10px ${brandColor}33`;
                }}
              >
                <div className="card-body text-center p-4">
                  <FaQuoteLeft
                    size={30}
                    color={brandColor}
                    className="mb-3 opacity-75"
                  />
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
                    className="fst-italic opacity-75 mb-3"
                    style={{
                      color: "#f1f1f1",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    “{review.review}”
                  </p>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={brandColor} size={18} />
                    ))}
                  </div>
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
