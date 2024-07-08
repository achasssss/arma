import React, { useState } from "react";

const Button = ({ styles }) => {
  const [showPopup, setShowPopup] = useState(false);
  const developerEmail = 'harshaxofficial@gmail.com';
  const demoVideoLink = 'https://www.youtube.com/embed/3HyMuNpJBtY';

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        onClick={openPopup}
      >
        Get Started
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">App Unavailable</h2>
            <p className="mb-6">
            The app is currently unavailable due to deployment challenges caused by storage constraints. Work is underway to resolve this issue.
            </p>
            <div className="mb-4">
              <a 
                href={`mailto:${developerEmail}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Contact
              </a>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Watch Demo</h3>
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  src={demoVideoLink} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;


// import styles from "../style";
// import { arrowUp } from "../assets";

// const GetStarted = () => (
//   <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
//     <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
//       <div className={`${styles.flexStart} flex-row`}>
//         <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//           <span className="text-gradient">Get</span>
//         </p>
//         <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
//       </div>
      
//       <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//         <span className="text-gradient">Started</span>
//       </p>
//     </div>
//   </div>
// );

// export default GetStarted;

// import React from 'react'

// function GetStarted() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default GetStarted
