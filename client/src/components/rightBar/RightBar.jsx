import "./rightBar.scss";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";



const RightBar = () => {
  const { currentUser } = useContext(AuthContext);


  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/users/findAll").then((res) => {
      // console.log(data);
      return res.data;
    })
  );
  function refresh(e) {
    window.location.href="/profile/"+ e;
  }
  // console.log(currentUser)
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {

            error
            ? "Something went wrong!"
            : isLoading
            ? "loading"
            : data.map(item => {
              return (
                <div className="user" key={item.id}>
                   <div className="userInfo">
                       <img src={"/upload/" + item.profilePic} alt="" />
                       <Link
                          to={`/profile/${item.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                          onClick={() => refresh(item.id)}
                       >
                          <span>{item.name}</span>
                       </Link>
                   </div>
                   <div className="buttons">
                   <button onClick={() => refresh(item.id)}>
                    visit
                  </button>
                   </div>
                </div>
              );
            })
          }

        </div>
        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://github.com/hpharshit/IMGAGES/blob/main/about.jpg?raw=true"
                alt=""
              />
              <p>
                <span>Harshit</span> changed their cover picture
              </p>
            </div>
            <span>6 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQHdmQrOl-twdg/profile-displayphoto-shrink_400_400/0/1627986984498?e=1678924800&v=beta&t=Yv6UqYsQkGpf57q0BXhhrHISyQi2GWn167sdNQj14P0"
                alt=""
              />
              <p>
                <span>Aroop</span> posted a post
              </p>
            </div>
            <span>3 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://github.com/hpharshit/IMGAGES/blob/main/WhatsApp%20Image%202023-01-09%20at%207.46.15%20PM.jpeg?raw=true"
                alt=""
              />
              <p>
                <span>Ojesvi</span> updated their profile
              </p>
            </div>
            <span>2 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://github.com/hpharshit/IMGAGES/blob/main/about.jpg?raw=true"
                alt=""
              />
              <p>
                <span>Harshit</span> posted a post
              </p>
            </div>
            <span>4 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQHdmQrOl-twdg/profile-displayphoto-shrink_400_400/0/1627986984498?e=1678924800&v=beta&t=Yv6UqYsQkGpf57q0BXhhrHISyQi2GWn167sdNQj14P0"
                alt=""
              />
              <p>
                <span>Aroop</span> liked a post
              </p>
            </div>
            <span>5 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Users</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://github.com/hpharshit/IMGAGES/blob/main/about.jpg?raw=true"
                alt=""
              />
              <div className="online" />
              <span>Harshit</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQHdmQrOl-twdg/profile-displayphoto-shrink_400_400/0/1627986984498?e=1678924800&v=beta&t=Yv6UqYsQkGpf57q0BXhhrHISyQi2GWn167sdNQj14P0"
                alt=""
              />
              <div className="online" />
              <span>Aroop</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://github.com/hpharshit/IMGAGES/blob/main/WhatsApp%20Image%202023-01-09%20at%207.46.15%20PM.jpeg?raw=true"
                alt=""
              />
              <div className="online" />
              <span>Ojesvi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;


{/* <div className="user">
            <div className="userInfo">
              <a href="http://csi-sjce.50webs.com/" target="_blank">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQGo5rXUhkZz2g/company-logo_200_200/0/1614716004919?e=2147483647&v=beta&t=akKKde2MVDFrPKn-q8sTyQdBaI5y09dGqndXySXSWp0"
                  alt=""
                />
              </a>

              <span>CSI</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/csi_jssstu/?hl=en" target="_blank">
              <button>follow</button>
            </a>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a href="https://www.ieeesjce.com/" target="_blank">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQGoRdJYxmIDhQ/company-logo_200_200/0/1519856132409?e=2147483647&v=beta&t=wLUc7NSTRky79zJ7aRdyvSgH0oRkZlAb2ybb1MZ9ewI"
                  alt=""
                />
              </a>

              <span>IEEE</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/ieee_sjce/?hl=en" target="_blank">
              <button>follow</button>
            </a>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a
                href="https://gdsc.community.dev/events/details/developer-student-clubs-jss-science-technology-university-mysuru-presents-gdsc-break-chain/"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg"
                  alt=""
                />
              </a>

              <span>GDSC</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/gdscjssstu/?hl=en" target="_blank">

              <button>follow</button>
            </a>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a href="https://venturex.netlify.app/" target="_blank">
                <img
                  src="https://venturex.netlify.app/assets/img/logo/logo1.png"
                  alt=""
                />
              </a>
              <span>VentureX</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/venturex.sjce/?hl=en" target="_blank">
              <button>follow</button>
            </a>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a
                href="https://jssstuniv.in/institution-innovation-council/"
                target="_blank"
              >
                <img
                  src="https://srcw.ac.in/wp-content/uploads/2020/12/iic-logo-1024x724.png"
                  alt=""
                />
              </a>

              <span>IIC</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/iic_jssstu/" target="_blank">

              <button>follow</button>
            </a>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a
                href="https://jssstuniv.in/edboard/"
                target="_blank"
              >
                <img
                  src=""
                   alt=""
                />
              </a>

              <span>Editorial Board</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/the.edboard/?hl=en" target="_blank">

              <button>follow</button>
            </a>
             <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <a
                href="http://ww7.lccjssstu.org/"
                target="_blank"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM93ogIdpm0d-nJHoCoTOEbr3oWIz_jNtdOVVN1zCX&s"
                  alt=""
                />
              </a>

              <span>Linux Campus Club</span>
            </div>
            <div className="buttons">
            <a href="https://www.instagram.com/linuxcampusclub/?hl=en" target="_blank">

              <button>follow</button>
            </a>
              <button>dismiss</button>
            </div>
          </div>
          */}