import React from "react";

const Step1Form = ({ formData, handleInputChange, handleFileChange, handleNext, closeDialog }) => {
  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto p-4 md:p-8">
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-1 text-sm font-medium">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          // required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block mb-1 text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          // required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-1 text-sm font-medium">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          // required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-1 text-sm font-medium">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full px-3 py-2 border rounded-md"
          // required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nationality" className="block mb-1 text-sm font-medium">Nationality</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          // required
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="py-2 px-4 bg-primary text-white rounded-md"
          style={{ marginRight: "8px" }}
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
    </form>
  );
};

export default Step1Form;
