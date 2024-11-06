import React from "react";

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Membaca Buku",
    image:
      "https://i.pinimg.com/564x/a3/85/4c/a3854cf7fda06f9aff051855b258493d.jpg",
  },
  {
    id: 2,
    name: "Menggambar",
    image:
      "https://i.pinimg.com/564x/53/61/7b/53617b91bedba482d25c08ec8eb51f19.jpg",
  },
  {
    id: 3,
    name: "Membaca Komik",
    image:
      "https://i.pinimg.com/564x/4a/90/ae/4a90ae5814ac35c4949c90d605543d26.jpg",
  },
  {
    id: 4,
    name: "Ngoding",
    image:
      "https://i.pinimg.com/236x/43/0c/59/430c597c8590aeba5e8b93365fc418b0.jpg",
  },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-gray-800 text-3xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
