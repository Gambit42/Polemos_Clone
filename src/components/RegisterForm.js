import React, { useState } from "react";

const RegisterForm = () => {
  const [emailInput, setEmailInput] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleEmailInput = (e) => {
    e.preventDefault();
    console.log("hello submit");
    const targetValue = e.target.value;
    const targetID = e.target.id;

    if (targetID === "subject") {
      setEmailInput({ ...emailInput, subject: targetValue });
    } else if (targetID === "name") {
      setEmailInput({ ...emailInput, name: targetValue });
    } else if (targetID === "email") {
      setEmailInput({ ...emailInput, email: targetValue });
    } else if (targetID === "message") {
      setEmailInput({ ...emailInput, message: targetValue });
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSendEmail} className="pt-5 sm:w-4/5 md:w-5/6">
      <div className="mb-2">
        <input
          placeholder="Email"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="text"
          autoComplete="on"
          value={emailInput.email}
          onChange={handleEmailInput}
        />
      </div>
      <div className="mb-2">
        <input
          placeholder="Name"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          autoComplete="on"
          value={emailInput.name}
          onChange={handleEmailInput}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center items-center flex-row transition duration-200 ease-in-out outline-none focus:outline-none text-white py-2 px-6  rounded-lg mt-5 shadow bg-gradient-to-r from-polemosColor to-red-700  hover:from-white border border-transparent hover:to-white hover:border-polemosColor hover:text-polemosColor"
      >
        <h1 className="text-lg font-bold">Register</h1>
      </button>
    </form>
  );
};

export default RegisterForm;
