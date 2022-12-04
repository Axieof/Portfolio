import React from "react";
import experiences from "../data/experiences";
import ExperiencesItem from "./ExperiencesItems";

function Experiences() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    )
}

export default Experiences