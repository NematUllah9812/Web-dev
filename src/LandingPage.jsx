import Navigation from "./Navigation";
import Courses from "./Courses";
import StudentReviews from "./CustomerReviews";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <div className="container-fluid container-fluid min-vh-100 text-light"
  style={{ backgroundColor: "white" }}
>
        <div
          className="row"
        >
          <div className="col">
            <Navigation />
          </div>
        </div>

        <div
          className="row"
        >
          <div className="col">
            <Courses />
          </div>
        </div>

        <div
          className="row"
        >
          <div className="col">
            <StudentReviews />
          </div>
        </div>

        <div
          className="row"
        >
         
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;