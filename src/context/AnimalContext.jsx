"use client";

import React, { createContext, useEffect, useState } from "react";

// Context object
export const AnimalContext = createContext();

// Provider component (DIFFERENT NAME)
const AnimalProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch("http://localhost:3000/animals.json");
      const animals = await res.json();
      setData(animals);
    };

    fetchAnimals();
  }, []);

  return (
    <AnimalContext.Provider value={{ data }}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalProvider;
