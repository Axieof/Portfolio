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
            font-bold">I am a Software Engineer who has a 
            passion for overcoming challenges to create software 
            that makes an impact on the world and on people. 
            I aspire to use my skills to create the changes I want 
            to see in the world.</p>
        </div>
    )
}

export default Intro