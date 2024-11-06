"use client";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Data submitted:", { name, message, rating });
  };

  const handleClear = () => {
    setName("");
    setMessage("");
    setRating(0);
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-gray-800 text-3xl font-bold mb-8">Contact Form</h2>
      <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg text-white">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left font-semibold">
                Nama:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-indigo-400 text-gray-900"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-left font-semibold"
              >
                Komentar:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-indigo-400 text-gray-900"
                placeholder="Tulis komentar Anda"
              ></textarea>
            </div>

            <div>
              <label className="block text-left font-semibold">Rating:</label>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer text-3xl transition-transform transform hover:scale-110 ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold text-white transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full py-3 bg-gray-300 hover:bg-gray-400 rounded-md font-semibold text-gray-900 transition-colors ml-2"
              >
                Clear
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Submitted</h2>
            <p>Nama: {name}</p>
            <p>Pesan: {message}</p>
            <p>Rating: {rating} bintang</p>
            <p className="mt-4">
              Data di atas akan segera di input ke database. Terima kasih!
            </p>
            <button
              onClick={handleClear}
              className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold text-white transition-colors"
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
