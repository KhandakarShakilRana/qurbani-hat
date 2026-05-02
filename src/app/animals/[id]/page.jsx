"use client";

import AnimalProvider, { AnimalContext } from "@/context/AnimalContext";
import { useParams } from "next/navigation";
import React, { use, useContext } from "react";


const AnimalDetailPage = () => {
    const {id} = useParams(); 
  const {data} = useContext(AnimalContext)
  const animal = data.find((a) => a.id == id)
  console.log(animal);
  return <div>
    
  </div>;
};

export default AnimalDetailPage;
