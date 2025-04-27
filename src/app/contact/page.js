// filepath: c:\wamp64\www\alter\endeavor\src\app\contact\page.js
"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // You can wire this up to an API route or service
    setSent(true);
  };

  if (sent) {
    return (
      <main className="max-w-lg mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>Your message has been sent.</p>
      </main>
    );
  }

  return (
    <main className="max-w-lg mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />
        <button type="submit" className="bg-primary text-white rounded px-3 py-2">
          Send Message
        </button>
      </form>
    </main>
  );
}
