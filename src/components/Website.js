import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

 const Website = ({ website }) => {
    const { deleteWebsite } = useContext(GlobalContext);
    return (
        <li >
            {website?.text}
            <button
                onClick={() => deleteWebsite(website?.id)}
                className="delete-btn"
            >
                x
            </button>
        </li>
    );
};
 export default Website