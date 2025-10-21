import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import axios from "axios";
import faqBreadcrumb from "../assets/images/faq-main-img.png";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to SendGrid
    await sendFormDataToSendGrid(formData);

    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const sendFormDataToSendGrid = async (formData) => {
    try {
      const response = await axios.post(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: formData.email,
              first_name: formData.name,
              phone_number: formData.phone,
              custom_fields: {
                e1_T: formData.message, // Check if this field ID is correct
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer bPVhDQzqTNS9091KSXJtfg`, // Replace with your SendGrid API key
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
      } else {
        // Something else caused the error
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <Topbar />
      <Header />
      <div className="w-full">
        <HeroSection
          breadCrumUrl={faqBreadcrumb}
          title={"Contact Us"}
          description={`  Discover answers to your questions about combining real
                    estate and cryptocurrency on our innovative platform.`}
        />
      </div>
      <div className="md:py-16 py-10">
        <div className="max-w-[650px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="bg-white shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)] rounded-3xl md:p-10 p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 mb-3">
                      <span className="after:!hidden orange-text3 text-[25px] md:leading-[40px] leading-[30px] mb-2 md:text-[35px] outfit-bold block w-fit relative">
                        Contact Us
                      </span>
                    </div>
                    <div className="col-span-12 mb-3">
                      <label htmlFor="name" className="text-base text-[#17271F] font-medium mb-1 block">Name</label>
                      <input
                        type="text"
                        className="w-full bg-white border border-solid border-[#E0E0E0] py-3 px-5 rounded-xl text-base"
                        placeholder="Enter Full Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-12 mb-3">
                      <label htmlFor="email" className="text-base text-[#17271F] font-medium mb-1 block">Email</label>
                      <input
                        type="email"
                        className="w-full bg-white border border-solid border-[#E0E0E0] py-3 px-5 rounded-xl text-base"
                        placeholder="Enter Email Address"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-12 mb-3">
                      <label htmlFor="phone" className="text-base text-[#17271F] font-medium mb-1 block">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full bg-white border border-solid border-[#E0E0E0] py-3 px-5 rounded-xl text-base"
                        placeholder="Enter Phone Number"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-12 mb-3">
                      <label htmlFor="message" className="text-base text-[#17271F] font-medium mb-1 block">Message</label>
                      <textarea
                        className="w-full bg-white border border-solid border-[#E0E0E0] py-3 px-5 rounded-xl text-base min-h-32"
                        placeholder="Enter Message"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-12">
                      <button
                        className="ct-button-2 mt-6"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
