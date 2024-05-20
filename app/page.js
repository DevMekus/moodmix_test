import React from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";

import Hero from "@/components/Hero";

const page = () => {
  return (
    <>
      <TopNav />
      <main className="main-container">
        <Sidebar />
        <div className="app-inner-flex">
          <div className="app-inner">
            <Hero />
            <div className="padding-20">
              <h3>What’s New</h3>
            </div>
          </div>
        </div>
        <PlayerBar />
      </main>
    </>
  );
};

export default page;
