import "./hero-style.css";
import videoFile from "../../assets/videos/bgvid.mp4";

function Hero() {
  return (
    <div className="container hero">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="row">
        <div className="col-md text-center hero bg-light bg-opacity-75 text-white ">
          <div className="col-md-12 text-success">
            <h1 className="mb-5 mt-5 ">SmileCare logo here</h1>
            <h1 className="mt-5 display-3">
              Transform Your Smile{" "}
              <span className="text-bold mt-3">
                {" "}
                <br />
                Transform Your Life
              </span>
            </h1>
            <p className="mt-5 ">
              Experience the future of dental care SmileCare - Your personalised
              dental companion.
            </p>
            <div className="mt-5">
              <button type="button" className="btn btn-primary  ">
                Sign Up
              </button>
              <button type="button" className="btn btn-success mx-2 ">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* <div className="col-md-12 text-center hero bg-light bg-opacity-75 text-white ">
          <div className="col-md text-success">
            <h1 className="mb-5 mt-5 ">SmileCare logo here</h1>
            <h1 className="mt-5 display-3">
              Transform Your Smile{" "}
              <span className="text-bold mt-3">
                {" "}
                <br />
                Transform Your Life
              </span>
            </h1>
            <p className="mt-5 ">
              Experience the future of dental care SmileCare - Your personalised
              dental companion.
            </p>
            <div className="mt-5">
              <button type="button" className="btn btn-primary  ">
                Sign Up
              </button>
              <button type="button" className="btn btn-success mx-2 ">
                Book Appointment
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
