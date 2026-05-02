"use client";

import { AnimalContext } from "@/context/AnimalContext";
import { useParams } from "next/navigation";
import { useContext } from "react";

const AnimalPage = () => {
  const {id} = useParams();
  const { data } = useContext(AnimalContext);


  return (
    <div>
      {id}
    </div>
  );
};

export default AnimalPage;
