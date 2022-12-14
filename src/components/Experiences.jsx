import React from "react";
import experiences from "../data/experiences";
import ExperiencesItem from "./ExperiencesItems";
import Title from "./Title";

function Experiences() {
    return (
        <div className="text-center">
            <Title>Experiences</Title>
            <div className="flex flex-col md:flex-row 
        items-center justify-center pb-7">

            <div className="grid grid-cols-1 gap-4">
                {experiences.map(project => (
                    <ExperiencesItem 
                    company={project.company}
                    position={project.position}
                    description={project.description}
                    duration={project.duration}
                    place={project.place}
                    startYear={project.startYear}
                    />
                ))}
            </div>

        </div>
        </div>
        
    )
}

export default Experiences