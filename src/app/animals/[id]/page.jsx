"use client";

import AnimalProvider, { AnimalContext } from "@/context/AnimalContext";
import { useParams } from "next/navigation";
import React, { use, useContext } from "react";

const AnimalDetailPage = () => {
  const { id } = useParams();
  const { data } = useContext(AnimalContext);
  const animal = data.find((a) => a.id === Number(id));

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div>
          <img src={`${animal.image}`} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
