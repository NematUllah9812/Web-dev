import Navigation from "./Navigation";
import Games from "./Games";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import HeroSection from "./Hero Section";
import LatestGames from "./LatestGames";
import AuthSection from "./AuthSection";
import FAQ from "./Faq";

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

        {/* Latest Games Section */}
        <LatestGames />

        {/* Games Section */}
        <section className="my-5">
          <div className="container">
            <Games />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="my-5">
          <div className="container">
            <CustomerReviews />
          </div>
        </section>

        {/* Signup Section */}
        <AuthSection />

        {/* FAQ  */}
        <FAQ/>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
