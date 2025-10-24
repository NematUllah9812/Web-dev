function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How can I buy games from PixelArena?",
      answer:
        "Browse our catalog, add your favorite games to your cart, and checkout securely using your preferred payment method.",
    },
    {
      id: 2,
      question: "Are discounts available on new releases?",
      answer:
        "Yes! PixelArena frequently offers early-bird and seasonal discounts on select new titles. Follow us on social media to stay updated.",
    },
    {
      id: 3,
      question: "How can I contact support?",
      answer:
        "You can contact our support team anytime via the Contact section or by emailing support@pixelarena.com.",
    },
    {
      id: 4,
      question: "Do I need an account to make a purchase?",
      answer:
        "Yes, creating an account ensures secure checkout, order tracking, and access to special member discounts.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept major debit/credit cards, PayPal, and regional wallets depending on your location.",
    },
    {
      id: 6,
      question: "Can I refund or exchange a purchased game?",
      answer:
        "Digital purchases are non-refundable once activated, but you can contact support for assistance with specific cases.",
    },
    {
      id: 7,
      question: "Does PixelArena offer gift cards?",
      answer:
        "Yes, digital gift cards are available in multiple denominations and can be sent instantly to friends or family.",
    },
    {
      id: 8,
      question: "Is my personal information secure?",
      answer:
        "Absolutely. PixelArena uses advanced encryption and never shares your personal data with third parties.",
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
          Frequently Asked Questions!?
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
