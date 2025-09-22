import Navigation from "./Navigation";
import Courses from "./Courses";
import StudentReviews from "./CustomerReviews";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      {/* Add padding so fixed navbar doesn't overlap */}
      <div
        className="container-fluid min-vh-100 text-light"
        style={{ backgroundColor: "#1e1e2f", paddingTop: "80px" }}
      >
        <div className="row">
          <div className="col">
            <Navigation />
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <Courses />
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <StudentReviews />
          </div>
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
