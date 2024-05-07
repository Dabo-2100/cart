import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "./SideMenu";
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
    const [tabs, setTabs] = useState(
        ["Home", "About", "Contact", "Shop"]
    );
    const [sideMenuIndex, setSideMenuIndex] = useState(0);
    return (
        <div className="col-12 bg-dark d-flex p-3 justify-content-between align-items-center" id="Navbar"
            onClick={() => { setSideMenuIndex(0) }}
        >
            <ul className="d-flex gap-3 mb-0">
                {
                    tabs.map((el, index) => {
                        return (
                            <li key={index} style={{ color: "white", listStyle: "none" }}>{el}</li>
                        )
                    })
                }
            </ul>
            <FontAwesomeIcon onClick={(e) => {
                e.stopPropagation();
                sideMenuIndex == 1 ? setSideMenuIndex(0) : setSideMenuIndex(1)
            }} className="icon" icon={faBars} />
            {
                sideMenuIndex == 1 ? <SideMenu /> : null
            }
        </div>
    )
}
