/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    msg: '',
    buttonText: 'Submit',
    sent: false,
    err: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Submit',
      err: ''
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.$post(
        '/.netlify/functions/sendemail',
        formData
      );
      setFormData({
        ...formData,
        sent: true,
        buttonText: 'Sent',
        err: 'success'
      });
      resetForm();
    } catch (error) {
      // console.log(err.response.status)
      setFormData({
        ...formData,
        buttonText: 'Failed to send',
        err: 'fail'
      });
    }
  };

  // Promise-based
  const formSubmit = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      buttonText: 'Sending...'
    });

    axios
      .post('/api/sendemail', formData)
      .then((res) => {
        if (res.data.result !== 'success') {
          setFormData({
            ...formData,
            sent: false,
            err: 'fail'
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        } else {
          setFormData({
            ...formData,
            sent: true,
            buttonText: 'Sent',
            err: 'success'
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        }
      })
      .catch((err) => {
        // console.log(err.response.status)
        setFormData({
          ...formData,
          buttonText: 'Failed to send',
          err: 'fail'
        });
      });
  };

  return (
    <section id="contact-section" className="container mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
          <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
            Fill in the form to start a conversation
          </p>
          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              606 SE 4th St, Seminole, TX 79360
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a className="ml-4 text-md tracking-wide font-semibold w-40">
              432-847-4600
            </a>
          </div>
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Jakessteamer@gmail.com
            </div>
          </div>
        </div>
        <form
          id="contact-form"
          className="p-6 flex flex-col justify-center contact-form-v1"
          method="POST"
          action="api/sendContactEmail"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="tel" className="hidden">
              Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="msg" className="hidden">
              Message
            </label>
            <input
              type="msg"
              name="msg"
              id="msg"
              placeholder="Message"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={formSubmit}
            className="md:w-32 bg-brand-blue hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {formData.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
