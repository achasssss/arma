import React from "react";

const Step2Form = ({ formData, handleFileChange, handleNext, handlePrevious, closeDialog }) => {
  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto p-4 md:p-8">
      <div className="mb-4">
        <label htmlFor="photo" className="block mb-1 text-sm font-medium">Passport Size Photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border rounded-md px-3 py-2"
          // required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="documentFront" className="block mb-1 text-sm font-medium">Document Front Side</label>
        <input
          type="file"
          id="documentFront"
          name="documentFront"
          accept="application/pdf, image/*"
          onChange={handleFileChange}
          className="w-full border rounded-md px-3 py-2"
          // required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="documentBack" className="block mb-1 text-sm font-medium">Document Back Side</label>
        <input
          type="file"
          id="documentBack"
          name="documentBack"
          accept="application/pdf, image/*"
          onChange={handleFileChange}
          className="w-full border rounded-md px-3 py-2"
          // required
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <div className="flex">
          <button
            type="submit"
            className="py-2 px-4 bg-primary text-white rounded-md mr-2"
          >
            Next
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md"
            onClick={closeDialog}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step2Form;
