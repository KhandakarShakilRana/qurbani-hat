"use client";
import animals from "@/data/animals.json";
import BookingForm from "@/components/BookingForm";
import AnimalProvider, { AnimalContext } from "@/context/AnimalContext";
import { useParams } from "next/navigation";
import React, { use, useContext } from "react";

const AnimalDetailPage = () => {
  const { id } = useParams();
  
  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F1F2ED] text-[#213D34]">
      <div className="max-w-300 mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <img
              src={`${animal.image}`}
              alt=""
              className="rounded-2xl my-4 md:max-w-120 mx-auto"
            />
          </div>
          <div className="flex-1 my-4 pl-4">
            <h1 className="bg-[#D9EF78] inline px-4 py-1 text-[#213D34] font-semibold rounded-2xl">
              {animal.type}
            </h1>
            <h1 className="text-4xl font-bold my-2">{animal.name}</h1>
            <p className="mb-2">{animal.description}</p>
            <p className="text-2xl font-bold mb-2">{animal.price}TK</p>
            <div className="flex gap-4 text-center justify-between">
              <div>
                <h1 className="font-semibold">Age</h1>
                <p>{animal.age}</p>
              </div>
              <div>
                <div className="font-semibold">Weight</div>
                <p>{animal.weight}</p>
              </div>

              <div>
                <h1 className="font-semibold">Breed</h1>
                <p>{animal.breed}</p>
              </div>
            </div>
            
        <div className="mx-auto mt-4">
          <BookingForm></BookingForm>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
