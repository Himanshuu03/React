import React from "react";
function Navbar({title}){
    return(
        <div>
            <nav className="bg-bgDark py-4">
                <h1 className="text-3xl font-bold text-center text-white">{title}</h1>
            </nav>
        </div>
    )
}
export default Navbar;