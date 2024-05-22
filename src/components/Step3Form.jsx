// import React, { useState, useEffect } from 'react';
// import { ReactMediaRecorder } from 'react-media-recorder';

// const Step3Form = ({ formData, handleFileChange, handlePrevious, handleSubmit, closeDialog }) => {
//   const [stream, setStream] = useState(null);

//   useEffect(() => {
//     // Accessing user's camera
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => {
//         setStream(stream);
//       })
//       .catch(error => {
//         console.error('Error accessing camera:', error);
//       });
      
//     return () => {
//       // Clean up the media stream when the component unmounts or the stream changes
//       if (stream) {
//         stream.getTracks().forEach(track => {
//           track.stop();
//         });
//       }
//     };
//   }, []);

//   // Function to stop the media stream and close the dialog
//   const handleCloseDialog = () => {
//     closeDialog(); // Close the dialog
//     stopMediaStream(); // Stop the media stream
//   };

//   // Function to stop the media stream
//   const stopMediaStream = () => {
//     if (stream) {
//       stream.getTracks().forEach(track => {
//         track.stop();
//       });
//       setStream(null);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         {stream && (
//           <video
//             ref={videoRef => {
//               // Setting up video stream
//               if (videoRef) {
//                 videoRef.srcObject = stream;
//               }
//             }}
//             playsInline
//             autoPlay
//             muted
//           />
//         )}
//         {/* Media recorder component */}
//         <ReactMediaRecorder
//           video
//           stream={stream}
//           render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//             <div>
//               <p>Camera: {status}</p>
//               <button type="button" onClick={startRecording} className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2">
//                 <span>Start Recording</span>
//               </button>
//               <button type="button" onClick={stopRecording} className="py-2 px-4 bg-blue-500 text-white rounded-md">
//                 <span>Stop Recording</span>
//               </button>
//               {mediaBlobUrl && (
//                 <video src={mediaBlobUrl} autoPlay loop controls />
//               )}
//             </div>
//           )}
//         />
//       </div>
//       <br></br>
//       {/* Previous button */}
//       <button
//         type="button"
//         onClick={handlePrevious} // Only handle navigation, don't close the dialog
//         className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md mr-2"
//       >
//         Previous
//       </button>
//       {/* Submit button */}
//       <button
//         type="submit"
//         onClick={handleCloseDialog} // Close the dialog after submitting the form
//         className="py-2 px-4 bg-primary text-white rounded-md"
//       >
//         Submit
//       </button>
//       {/* Cancel button */}
//       <button
//         type="button"
//         onClick={handleCloseDialog} // Close the dialog and stop the media stream
//         className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md ml-2"
//       >
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default Step3Form;







import React, { useState, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const Step3Form = ({ formData, handleFileChange, handlePrevious, handleSubmit, closeDialog }) => {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Accessing user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
      
    return () => {
      // Clean up the media stream when the component unmounts or the stream changes
      if (stream) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, []);

  // Function to stop the media stream and close the dialog
  const handleCloseDialog = () => {
    closeDialog(); // Close the dialog
    stopMediaStream(); // Stop the media stream
  };

  // Function to stop the media stream
  const stopMediaStream = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
      setStream(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        {stream && (
          <div className="relative pb-[56.25%] h-0 overflow-hidden mb-4">
            <video
              ref={videoRef => {
                if (videoRef) {
                  videoRef.srcObject = stream;
                }
              }}
              className="absolute top-0 left-0 w-full h-full"
              playsInline
              autoPlay
              muted
            />
          </div>
        )}
        <ReactMediaRecorder
          video
          stream={stream}
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="mb-2 text-sm">Camera Status: {status}</p>
              <div className="flex flex-wrap mb-4">
                <button
                  type="button"
                  onClick={startRecording}
                  className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2 mb-2"
                >
                  Start Recording
                </button>
                <button
                  type="button"
                  onClick={stopRecording}
                  className="py-2 px-4 bg-blue-500 text-white rounded-md mb-2"
                >
                  Stop Recording
                </button>
              </div>
              {mediaBlobUrl && (
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <video src={mediaBlobUrl} className="absolute top-0 left-0 w-full h-full" autoPlay loop controls />
                </div>
              )}
            </div>
          )}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={handlePrevious}
          className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md mr-2"
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={handleCloseDialog}
          className="py-2 px-4 bg-primary text-white rounded-md"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCloseDialog}
          className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Step3Form;
