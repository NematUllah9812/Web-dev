function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How can I buy games from PixelArena?",
      answer:
        "Explore our game catalog, add your favorites to the cart, and securely checkout using multiple payment options.",
    },
    {
      id: 2,
      question: "Are discounts available on new releases?",
      answer:
        "Yes! PixelArena offers early-bird and seasonal discounts on select new releases. Follow us to stay updated.",
    },
    {
      id: 3,
      question: "How can I contact support?",
      answer:
        "You can reach our support team via the Contact section or by emailing support@pixelarena.com.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-5 text-light"
      style={{
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-6 text-danger">
          Frequently Asked Questions
        </h2>

        <div className="accordion accordion-flush" id="faqAccordion">
          {faqs.map((faq) => (
            <div
              className="accordion-item bg-transparent border-bottom border-secondary"
              key={faq.id}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-light fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`faq${faq.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .accordion-button:focus {
            box-shadow: none;
          }

          .accordion-button:not(.collapsed) {
            color: #ff4757;
            background-color: rgba(255, 71, 87, 0.08);
          }

          .accordion-button::after {
            filter: invert(1);
          }

          .accordion-item {
            transition: background 0.3s ease;
          }

          .accordion-item:hover {
            background: rgba(255, 255, 255, 0.03);
          }
        `}
      </style>
    </section>
  );
}

export default FAQ;
