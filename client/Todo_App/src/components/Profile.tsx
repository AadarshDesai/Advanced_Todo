import profile from "../assets/profile.jpg";

import React from "react";

export const Profile: React.FC = () => {

    return ( 
    <div className="flex mt-5 mx-3 space-x-3 items-center w-full">
            <img src={profile} alt="profile picture" className="rounded-full h-14 w-14"/>
            <p className="font-medium">Aadarsh Desai<br/>
            <span className="font-normal text-sm text-gray-500">adidesai91@outlook.com</span></p>
        </div>
    )
    
}