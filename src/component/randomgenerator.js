
import { useState,useEffect } from "react";
import React from "react";

const  CreateRandom = () => {

    const [randonNumber, setrandonNumber] = useState(0);
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        const interval = setInterval(() => {
            setrandonNumber(generateRandomNumber(1,100));
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
      
    return <h1>{randonNumber} </h1>;
    
}

export default CreateRandom;