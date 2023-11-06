import React, { useState, useEffect, useRef } from "react";

import Dot from "./../../assets/images/dot.svg";
import { useNavigate } from "react-router-dom";
import {UserContent} from "./Styles.jsx";

export const AdminHeader = () => {
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


    return (
        <UserContent className="user">
            <h5>Admin</h5>
            <span className="user_avatar">
               A
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
