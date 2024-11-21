import React, { useContext } from "react";
import "./certifications.css";
// import Frontend from "./Frontend";
// import Backend from "./Backend";

// import Devops from "./Devops"
import Csaa from "./Csaa";

const Certifications = () => {

  return (
    <section className="skills section-half mb-main" id="skills">
      <h2 className="section__title section__mb ">Certifications</h2>

{/* //to add certs, increase  grid-template-columns: repeat(1, 350px); of the cer__container class in certification.css file */}
      <div className="cert__container certgrid ">
        <Csaa />
        {/* <Csaa /> */}
      
      

      </div>
    </section>
  );
};

export default Certifications;
