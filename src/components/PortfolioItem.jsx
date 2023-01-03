import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <div className="border-2 border-stone-900
        rounded-md overflow-hidden">
            <a href={link} 
            target="_blank">
            <img 
            src={'https://axieof.github.io/Portfolio' + imgUrl}
            alt="Project Image"
            className="w-full h-36 md:h-48 object-cover c
            ursor-pointer border-b-2 border-stone-900" 
            />
            </a>

            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row 
                items-center justify-start text-xs md:text-sm">
                    {stack.map(item => item == 'WIP' ? (
                        <span className="inline-block px-2 
                        py-1 font-semibold border-2 
                        border-red-600 text-red-600 rounded-md">
                            {item}
                        </span>) :
                        (<span className="inline-block px-2 
                        py-1 font-semibold border-2 
                        border-stone-900 rounded-md">
                            {item}
                        </span>
                        
                    ))}
                </p>
            </div>

        </div>
    )
}

export default PortfolioItem