import React from "react";
import '../styles/tailwind.css'

function Intro() {
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20 pb-6">
            
            <h1 className="text-4xl md:text-7xl mb-1
            md:mb-3 font-bold">Pritheev Roshan</h1>
            
            <p className="text-base md:text-x1 mb-3
            font-medium">Software Engineer</p>
            
            <p className="text-sm max-w-xl mb-6 
            font-bold">Put in an intro bio here</p>
        </div>
    )
}

export default Intro