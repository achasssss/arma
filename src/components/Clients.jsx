// import { clients } from "../constants";
// import styles from "../style";

// const Clients = () => (
//   <section className={`${styles.flexCenter} my-4`}>
//     <div className={`${styles.flexCenter} flex-wrap w-full`}>
//       {clients.map((client) => (
//         <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//           <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Clients;


// RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    photo: "",
    fullName: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform user registration logic here
    console.log("Form submitted with data:", formData);
    // Reset form fields
    setFormData({ photo: "", fullName: "", address: "" });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleInputChange}
        className="my-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="Full Name"
        className="my-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        rows={4}
        className="my-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
