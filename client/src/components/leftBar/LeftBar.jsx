import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import logout from "../../assets/logout.png";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  function refresh(e) {
    // console.log(e);
    window.location.href="/profile/"+ e;
  }

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => refresh(currentUser.id)}
              >
                <span>{currentUser.name}</span>
              </Link>
            {/* <span>{currentUser.name}</span> */}
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
          <a href="https://www.facebook.com/JSSSTUNIV/" target="_blank">
            <img src={Groups} alt="" />
          </a>
            <span>Groups</span>
          </div>
          <div className="item">
          <a href="https://azuremarketplace.microsoft.com/en-us/" target="_blank">
            <img src={Market} alt="" />
          </a>
            <span>Marketplace</span>
          </div>
          <div className="item">
          <a href="https://www.youtube.com/@jssscienceandtechnologyuni567" target="_blank">
            <img src={Watch} alt="" />
          </a>
            <span>Watch</span>
          </div>
          <div className="item">
          <a href="https://jssstuniv.in/gallery/" target="_blank">
            <img src={Memories} alt="" />
          </a>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
          <a href="https://calendar.google.com/calendar/u/0/r?pli=1" target="_blank">
            <img src={Events} alt="" />
          </a>
            <span>Events</span>
          </div>
          <div className="item">
          <a href="https://www.xbox.com/en-IN/" target="_blank">
            <img src={Gaming} alt="" />
          </a>
            <span>Gaming</span>
          </div>
          <div className="item">
          <a href="https://jssstuniv.in/gallery/" target="_blank">
            <img src={Gallery} alt="" />
          </a>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
          <a href="mailto:harshpandeyalfa2@gmail.com">
            <img src={Messages} alt="" />
          </a>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
          <a href="https://covid.give.do/" target="_blank">
            <img src={Fund} alt="" />
          </a>
            <span>Covid Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>

          <div className="item">
          <a href="http://localhost:3000/login">
            <img src={logout} alt="" />
          </a>
            <span>Logout</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBar;
