import React from "react";

function ExperiencesItem({company, position, description, duration, startYear}) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-400 rounded-full -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {startYear}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {company}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            <h2 className="text-zinc-900">
                {position}
            </h2>
            <div>
               <p className="w-64 inline-block full my-2 text-base font-normal text-stone-600 dark:text-stone-400">
                  {description}
               </p>
            </div>
            
         </li>
      </ol>
    )
}

export default ExperiencesItem