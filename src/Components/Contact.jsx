import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a9f26ac2-8394-448b-998c-ef3e8d91e05f");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("Message sent successfully!");

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);

      // Clear form input values
      setFormValues({ name: "", email: "", message: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className="h-auto w-full px-6 sm:px-12 md:px-20 py-16 md:py-32 bg-[rgb(247,248,250)] text-black"
        id="Contact"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 w-full contact">
          <div className="w-full md:w-[40%] con-1 text-center md:text-left">
            <h1 className="text-[rgb(48,127,128)] font-semibold text-2xl md:text-3xl">
              Get In Touch
            </h1>
            <h1 className="text-[rgb(25,67,68)] font-bold text-4xl md:text-5xl mt-2">
              Contact.
            </h1>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full mt-8 md:mt-4">
              <div className="flex items-center mb-4 md:mb-0">
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/rafia-rasheed-6128311b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-[rgb(48,127,128)] ml-2 text-xl" />
                </a>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                GitHub
                <a
                  href="https://github.com/rafiarasheed64"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="text-[rgb(48,127,128)] ml-2 text-xl" />
                </a>
              </div>
              <div className="flex items-center">
                Gmail
                <FaEnvelope className="text-[rgb(48,127,128)] ml-2 text-xl" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <form onSubmit={onSubmit} className="w-full space-y-4">
              {successMessage && (
                <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
                  {successMessage}
                </div>
              )}
              <div>
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(48,127,128)]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(48,127,128)]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(48,127,128)]"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-[rgb(48,127,128)] rounded-lg hover:bg-[rgb(31,94,95)] "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
