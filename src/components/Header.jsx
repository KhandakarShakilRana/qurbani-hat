
import React from "react";

const Header = () => {
  return <div>
    
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold">Qurbani Livestock Marketplace </h1>
      <h1 className="mb-5 text-xl md:text-3xl font-bold"> Browse, View & Book Cows and Goats Online</h1>
      <button className="btn shadow-none border-none bg-[#213D34]">Get Started</button>
    </div>
  </div>
</div>
  </div>;
};

export default Header;
