"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking successful!");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="mx-auto mt-4">
      <Toaster />

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset text-[#213D34] border-base-300 rounded-box md:w-xl border p-4">
          <legend className="fieldset-legend text-[#213D34]">Booking Form</legend>

          <label className="label">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="input w-full bg-gray-300"
            placeholder="Enter Your Name"
          />

          <label className="label">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="input w-full bg-gray-300"
            placeholder="Enter Your Email"
          />

          <label className="label">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="number"
            className="input w-full bg-gray-300"
            placeholder="Enter Your Phone"
          />

          <label className="label">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            className="input w-full bg-gray-300"
            placeholder="Enter Your Address"
          />

          <button
            type="submit"
            className="bg-[#213D34] text-white rounded-2xl py-2 w-full mt-4"
          >
            Book Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
