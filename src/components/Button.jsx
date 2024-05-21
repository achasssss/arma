import React, { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import axios from 'axios'; // Import axios for making HTTP requests

const Button = ({ styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    photo: null,
    documentFront: null,
    documentBack: null,
    video: null
  });

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setStep(1); // Reset step to 1 when closing dialog
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      // Append each form field and file to formDataObj
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });
      // Make a POST request to the server
      const response = await axios.post('/submit-form', formDataObj);
      console.log(response.data.message); // Log the server response message
      // Reset form data
      setFormData({
        fullName: "",
        address: "",
        phoneNumber: "",
        photo: null,
        documentFront: null,
        documentBack: null,
        video: null
      });
      // Close the dialog
      closeDialog();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        onClick={openDialog}
      >
        Get Started
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-[600px]">
            
            <div className="italic">
              <h3 className="text-lg font-sans">NOTE: This serves as an initial look. The integration of deepfake detection in the KYC video verification process is currently under development.</h3>
            </div>
            <br></br>
            <h2 className="text-lg font-semibold mb-4">Step {step}</h2>
            {step === 1 && (
              <Step1Form
                formData={formData}
                handleInputChange={handleInputChange}
                handleFileChange={handleFileChange}
                handleNext={handleNext}
                closeDialog={closeDialog}
              />
            )}
            {step === 2 && (
              <Step2Form
                formData={formData}
                handleFileChange={handleFileChange}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                closeDialog={closeDialog}
              />
            )}
            {step === 3 && (
              <Step3Form
                formData={formData}
                handleFileChange={handleFileChange}
                handlePrevious={handlePrevious}
                handleSubmit={handleSubmit}
                closeDialog={closeDialog}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Button;


