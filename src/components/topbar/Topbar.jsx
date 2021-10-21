import "./topbar.scss";
import { Computer, Mail } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            hello.
          </a>
          
          {/*Site section links*/}
          <div className="itemContainer">
            <Computer className="icon" />
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="#contact">Contact</a>
          </div>
        </div>
    {/* Hamburger menu begins */}
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
