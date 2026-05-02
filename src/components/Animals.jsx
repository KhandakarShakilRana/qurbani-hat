import Link from "next/link";
import React from "react";

const Animals = async () => {
  const res = await fetch("http://localhost:3000/animals.json");
  const animals = await res.json();

  return (
    <div className="bg-[#F1F2ED]">
      <h1 className="text-[#213D34] text-center font-bold mt-10 text-4xl ">
        Featured Animals
      </h1>
      <div className="container mx-auto grid grid-cols-3 gap-6 py-20">
        {animals.map((animal) => (
          <div key={animal.id} className="text-[#213D34]">
            <div className="w-100 mx-auto p-4 rounded-2xl bg-white shadow-xl ">
              <img
                src={`${animal.image}`}
                alt="Deshi Shahi Cow"
                width={360}
                className="rounded-2xl"
              />
              <div className="flex items-center justify-between">
                <h1 className="text-[#213D34] text-2xl font-semibold my-3 ">
                  {animal.name}
                </h1>
                <h1 className="text-2xl font-bold">{animal.price}TK</h1>
              </div>
              <div className="flex justify-between items-center w-fyll">
                  <h1>Type</h1>
                  <h1>from</h1>
              </div>
              <Link href={`animals/${animal.id}`}>
                <button className="btn text-black bg-[#D9EF78]">Deatil</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
