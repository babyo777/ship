"use client";

import { useEffect } from "react";

function View() {
  useEffect(() => {
    try {
      if (!localStorage.getItem("id")) {
        fetch("https://ship-backend.vercel.app/?id=1").then(() =>
          localStorage.setItem("id", "1")
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <div className="hidden"></div>;
}

export default View;
