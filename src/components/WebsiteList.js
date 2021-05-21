import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Website from "./Website";
 const WebsiteList = () => {
    const { websites } = useContext(GlobalContext);
     console.log(websites)
    return (
        <>
            <h3>History</h3>
            <Website id="list" className="list">
                {websites.map((website) => (
                    <WebsiteList key={website.id} website={website} />
                ))}
            </Website>
        </>
    );
};
 export default WebsiteList;