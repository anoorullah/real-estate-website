import "./topbar.scss";
import {CameraFront, Email, Campaign, AssuredWorkload, House} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> genius. </a>
          <div className="itemContainer">
            <CameraFront className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>noorullah@hotmail.com</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
