import React from "react";

const Step2Form = ({ formData, handleFileChange, handleNext, handlePrevious, closeDialog }) => {
  return (
    <form onSubmit={handleNext}>
      <div className="mb-4">
        <label htmlFor="photo" className="block mb-1">Passport Size Photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded-md"
        //   required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="documentFront" className="block mb-1">Document Front Side</label>
        <input
          type="file"
          id="documentFront"
          name="documentFront"
          accept="application/pdf, image/*"
          onChange={handleFileChange}
          className="border rounded-md"
        //   required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="documentBack" className="block mb-1">Document Back Side</label>
        <input
          type="file"
          id="documentBack"
          name="documentBack"
          accept="application/pdf, image/*"
          onChange={handleFileChange}
          className="border rounded-md"
        //   required
        />
      </div>
      <button
        type="button"
        className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md mr-2"
        style={{ marginRight: "8px" }}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        type="submit"
        className="py-2 px-4 bg-primary text-white rounded-md"
        style={{ marginRight: "8px" }}
      >
        Next
      </button>
      <button
        type="button"
        className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md mr-2"
        onClick={closeDialog}
      >
        Cancel
      </button>
    </form>
  );
};

export default Step2Form;


