import Navigation from "./Navigation";
import Games from "./Games";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import HeroSection from "./Hero Section";
import LatestGames from "./LatestGames";
import SignupSection from "./Signupsection";
import Sidebar from "./Sidebar";

function LandingPage() {
  return (
    <>
      <Sidebar />

      <div
        className="container-fluid min-vh-100 text-light"
        style={{ backgroundColor: "#1e1e2f", paddingTop: "80px" }}
      >
        <Navigation />

        <HeroSection />

        <LatestGames />

        <section className="my-5">
          <div className="container">
            <Games />
          </div>
        </section>

        <section className="my-5">
          <div className="container">
            <CustomerReviews />
          </div>
        </section>

        <SignupSection />

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
