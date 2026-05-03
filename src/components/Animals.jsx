import Link from "next/link";
import React from "react";

const Animals = async () => {
  const res = await fetch("http://localhost:3000/animals.json");
  const animals = await res.json();

  return (
    <div className="bg-[#F1F2ED]">
      <div className="bg-[#F1F2ED] max-w-300 mx-auto">
      <h1 className="text-[#213D34] text-center font-bold mt-10 text-4xl ">
        Featured Animals
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
        {animals.slice(0, 4).map((animal) => (
          <div key={animal.id} className="text-[#213D34]">
            <div className=" mx-auto p-4 rounded-2xl bg-white shadow-xl ">
              <img
                src={`${animal.image}`}
                alt="Deshi Shahi Cow"
                className="rounded-2xl w-full"
              />
              <div className="flex items-center justify-between">
                <h1 className="text-[#213D34] text-2xl font-semibold my-3 ">
                  {animal.name}
                </h1>
                <h1 className="text-2xl font-bold">{animal.price}TK</h1>
              </div>
              <div className="flex justify-between items-center w-full mb-4 ">
                  <h1>Type : {animal.type}</h1>
                  <h1>From : {animal.location}</h1>
              </div>
              <div className="text-center">
                <Link href={`animals/${animal.id}`}>
                <button className="btn text-white bg-[#213D34]">View Deatil</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Animals;
