import "./SideMenu.css";
export default function SideMenu() {
    return (
        <div id="SideMenu" onClick={(e) => { e.stopPropagation() }} className="animate__animated animate__fadeInRight">SideMenu</div>
    )
}