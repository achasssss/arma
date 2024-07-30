// import React, { useState } from "react";

// const Button = ({ styles }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openDialog = () => {
//     setIsOpen(true);
//   };

//   const closeDialog = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//         onClick={openDialog}
//       >
//         Watch Video
//       </button>
//       {isOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <iframe
//               width="560"
//               height="315"
//               src="https://www.youtube.com/embed/lm3wIeX9znY"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <br></br>
//             <button
//               onClick={closeDialog}
//               className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Button;


import React, { useState } from "react";

const Button = ({ styles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        onClick={openDialog}
      >
        Watch Video
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-11/12 max-w-3xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jpoNgq5yutE "   
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeDialog}
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
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
