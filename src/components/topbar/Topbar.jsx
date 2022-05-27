import "./topbar.scss";
import {CameraFront, Email, Campaign, AssuredWorkload, House} from "@material-ui/icons";

export default function Topbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> genius. </a>
          <div className="itemContainer">
            <CameraFront className="icon" />
            <span>+1 847-975-4732</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>adnan.noorullah@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
