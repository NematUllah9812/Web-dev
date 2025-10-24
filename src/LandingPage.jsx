import Navigation from "./Navigation";
import Games from "./Games";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import HeroSection from "./Hero Section";
import LatestGames from "./LatestGames";
import FAQ from "./Faq";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div
        className="container-fluid min-vh-100 text-light"
        style={{ backgroundColor: "#1e1e2f", paddingTop: "80px" }}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Latest Games Preview */}
        <section className="my-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">🔥 Latest Games</h2>
            <p className="text-secondary mb-4">
              Discover the most recent releases and trending titles.
            </p>
            {/* Show only a few latest games */}
            <LatestGames showCount={3} />
            <Link
              to="/latest-games"
              className="btn btn-outline-light mt-3 rounded-pill px-4"
            >
              See More Latest Games →
            </Link>
          </div>
        </section>

        {/* Games Section Preview */}
        <section className="my-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">🎮 Featured Games</h2>
            <p className="text-secondary mb-4">
              Explore our most popular and highly rated titles.
            </p>
            {/* Show only a few games */}
            <Games showCount={4} />
            <Link
              to="/games"
              className="btn btn-outline-light mt-3 rounded-pill px-4"
            >
              See More Games →
            </Link>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="my-5">
          <div className="container">
            <CustomerReviews />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
