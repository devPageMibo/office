import React, { useState, useEffect, useRef } from "react";
import { UserContent } from "./Style.jsx";
import Dot from "./../../assets/images/dot.svg";
import { useNavigate } from "react-router-dom";

export const User = ({...customerData}) => {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const dotsRef = useRef(null);

    const handleDotClick = () => {
        setShowLogout(prevState => !prevState);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    const handleClickOutside = event => {
        if (dotsRef.current && !dotsRef.current.contains(event.target)) {
            setShowLogout(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const userAvatar = customerData?.firstName?.charAt(0).toUpperCase() || "";
    return (
        <UserContent className="user">
            <h5>{customerData?.firstName} {customerData?.lastName}</h5>
            <span className="user_avatar">
               {userAvatar}
            </span>
            <img className="dots" ref={dotsRef} src={Dot} alt="icon" onClick={handleDotClick} />
            {showLogout && (
                <div className="get_out" onClick={handleLogoutClick}>
                    Get out
                </div>
            )}
        </UserContent>
    );
};
