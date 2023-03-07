import React from 'react';
import "../App.css";
import { useEffect } from "react";
import { preLoaderAnim } from "../animinations";


export const Preload = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div classname="texts-container" id="preloader-wrapper">
        <span>Welcome</span>
        <span>To</span>
        <span>My Portfolio</span>
      </div>
    </div>
  );
};

