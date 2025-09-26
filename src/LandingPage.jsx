import Navigation from "./Navigation";
import Games from "./Games";
import StudentReviews from "./CustomerReviews";
import Footer from "./Footer";
import HeroSection from "./Hero Section";
import LatestGames from "./LatestGames";
import Login from "./Login";

function LandingPage() {
  return (
    <>
      <div
        className="container-fluid min-vh-100 text-light"
        style={{ backgroundColor: "#1e1e2f", paddingTop: "80px" }}
      >
       
        <div className="row">
          <div className="col">
            <Navigation />
          </div>
        </div>
         <div>
          <HeroSection />
        </div>
        <div>
          <LatestGames/>
        </div>
        <div className="row my-4">
          <div className="col">
            <Games />
          </div>
        </div>
        

        <div className="row my-4">
          <div className="col">
            <StudentReviews />
          </div>
        </div>
        <div>
          <Login/>
        </div>

        <div className="row mt-5">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
