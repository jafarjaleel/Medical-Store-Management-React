import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Aboutus() {
  const navigate = useNavigate();
  function goToHomePage() {
    navigate("/");
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="Row">
          <div className="col-md-6 offset-md-3">
            <h1>About Us</h1>
            <p>
              In most countries, a retail outlet for prescription drugs is
              subject to legislation; with requirements for storage conditions,
              staff qualifications, equipment, record keeping (especially of
              controlled drugs) and other matters, all specified in legislation.
              It was once the case that pharmacists stayed within the premises
              compounding/dispensing medications, but there has been an
              increasing trend towards the use of trained pharmacy
              technicians,[citation needed] with the pharmacist spending more
              time communicating with patients. Pharmacy technicians are now
              more dependent upon automation to assist them in their new role
              dealing with patients' prescriptions and patient safety issues.
            </p>
            <p>
              The American Association of Colleges of Pharmacy recommends that
              consumers choose a pharmacy at which they can have a consulting
              relationship with the pharmacist.[2] Anyone using drugs benefits
              when they have easier access to a pharmacist. Being timely
              includes both processing the request quickly and having drug stock
              available to fill the prescription.[2] Some consumers need drugs
              delivered to their home, perhaps by mail, and may select a
              pharmacy that offers that service.[2] Different pharmacies may
              charge different prices for the same drugs, so shopping for lower
              prices may identify a pharmacy offering better value.[2] In
              addition to fulfilling prescriptions, a pharmacy might offer
              preventive healthcare services like vaccinations.[2] Up-to-date
              technology at a pharmacy can assist a patient with prescription
              reminders and alerts about potential negative drug interactions,
              thereby reducing medical errors.[2]
            </p>
            <button className="btn btn-primary" onClick={goToHomePage}>
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
