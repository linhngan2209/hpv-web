'use client';
import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="w-full bg-[#FFF2E1] px-4 sm:px-6 py-12 text-black dark:text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-8">Contact us</h1>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-orange-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="bg-orange-400 rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Our number</h3>
                <p>0866 981 232</p>
              </div>
            </div>

            <div className="bg-orange-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="bg-orange-400 rounded-full p-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Our email</h3>
                <p>email@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-left">
            <p className="font-medium mb-2">Get in touch _______</p>
            <h2 className="text-3xl font-bold leading-tight">
              Write Us a<br />Message
            </h2>
          </div>

          <div className="w-full md:w-1/2 xl:w-2/3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black dark:text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black dark:text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black dark:text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your question or message"
              rows={6}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black dark:text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />

            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
