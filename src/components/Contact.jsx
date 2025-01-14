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
      formErrors.firstName = "Please enter your first name";
    if (!formData.lastName.trim()) 
      formErrors.lastName = "Please enter your last name";
    if (!formData.email.trim()) {
      formErrors.email = "Please provide your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) formErrors.subject = "Please add a subject";
    if (!formData.message.trim())
      formErrors.message = "Please write your message";

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
        alert("Message sent successfully!");
        // Reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        alert("Error sending message. Please try again.");
      }
    } else {
      console.log("Please fix the validation errors");
    }
  };

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto font-serif py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-[#F5F5F5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3E362E]">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl max-w-md italic text-[#865D36]">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              discuss how we can work together.
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#93785B]">
                  Call Me At
                </h2>
                <a
                  className="block mt-2 text-lg hover:text-[#AC8968] transition-colors font-medium"
                  href="tel:+91 9322876164"
                >
                  +91 9322876164
                </a>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#93785B]">
                  Send an Email
                </h2>
                <a
                  className="block mt-2 text-lg hover:text-[#AC8968] transition-colors font-medium"
                  href="mailto:abhishekpipriye2507@gmail.com"
                >
                  abhishekpipriye2507@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#F5F5F5] rounded-lg shadow-md p-6">
            <form onSubmit={submitForm} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block  text-[#A69080] font-semibold">
                    First Name*
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-[#93785B] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 h-10 px-3"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-500 text-sm font-medium">
                        {errors.firstName}
                      </p>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-[#A69080] font-semibold">
                    Last Name*
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#93785B] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 h-10 px-3"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-500 text-sm font-medium">
                        {errors.lastName}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#A69080] font-semibold">
                    Email Address*
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#93785B] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 h-10 px-3"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm font-medium">
                        {errors.email}
                      </p>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-[#A69080] font-semibold">
                    Subject Line*
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#93785B] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 h-10 px-3"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm font-medium">
                        {errors.subject}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[#A69080] font-semibold">
                  Your Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 h-32 px-3 py-2 resize-none"
                    placeholder="Share your thoughts or project details..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm font-medium">
                      {errors.message}
                    </p>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#93785B] text-white py-3 px-6 rounded-full text-xl font-bold hover:bg-[#865D36] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#AC8968] focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Horizontal Line for Section Break */}
      <div className="w-11/12 max-w-7xl mx-auto border-t-2 border-[#93785B]"></div>
    </>
  );
};

export default Contact;
