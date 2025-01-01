import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../fireBase"; // Ensure this file is correctly configured

const db = getDatabase(app); // Initialize the database with the app

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) formErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      formErrors.message = "Message cannot be empty.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Submit form data
  const submitForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Write data to Firebase
        await set(ref(db, `users/${formData.firstName}_${formData.lastName}`), {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });
        console.log("Data saved successfully");
        // Reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error saving data to Firebase:", error);
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <>
      <div className="w-4/5 mx-auto font-mono my-10 p-6 flex flex-row justify-center items-center h-screen gap-5 md-mx:flex-col md-mx:gap-4 md-mx:mt-56 md-mx:mb-72 xs-mx:flex-col xs-mx:items-center xs-mx:text-center">
        <div className="w-full">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="w-80 mt-5 md-mx:mx-auto">
            Let’s make something amazing together. Drop me a message!
          </p>
          <h1 className="text-xl font-semibold mt-5">Phone</h1>
          <a className="block mt-2" href="tel:+91 9322876164">
            +91 9322876164
          </a>
          <h1 className="text-xl font-semibold mt-5">Email</h1>
          <a className="block mt-2" href="mailto:abhishekpipriye2507@gmail.com">
            abhishekpipriye2507@gmail.com
          </a>
        </div>
        <div className="w-full">
          <form onSubmit={submitForm} className="w-full flex flex-col gap-4">
            <div className="flex gap-5 md-mx:flex-col">
              <div className="w-full">
                <label className="text-gray-600">
                  First Name*
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border mt-2 h-10 pl-2 text-lm outline-none border-black w-full"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="text-gray-600">
                  Last Name*
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border mt-2 h-10 pl-2 text-lm outline-none border-black w-full"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </label>
              </div>
            </div>
            <div className="flex gap-5 md-mx:flex-col">
              <div className="w-full">
                <label className="text-gray-600">
                  Email*
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border mt-2 h-10 pl-2 text-lm outline-none border-black w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="text-gray-600">
                  Subject*
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border mt-2 h-10 pl-2 text-lm outline-none border-black w-full"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </label>
              </div>
            </div>
            <div>
              <label className="text-gray-600">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border mt-2 w-full h-24 pl-2 text-lm outline-none border-black resize-none"
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 mt-4 w-full h-12 text-2xl font-bold rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Horizontal Line for Section Break */}
      <div className="w-[90%] mx-auto my-8 mt-36 border-t-2 border-x-gray-500"></div>
    </>
  );
};

export default Contact;
