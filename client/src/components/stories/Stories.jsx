import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // const { isLoading, error, data } = useQuery(["stories"], () =>
  //   makeRequest.get("/stories").then((res) => {
  //     return res.data;
  //   })
  // );

  const upload = async (file) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   let coverUrl;
  //   let profileUrl;
  //   coverUrl = cover ? await upload(cover) : user.coverPic;
  //   profileUrl = profile ? await upload(profile) : user.profilePic;

  //   mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
  //   setOpenUpdate(false);
  //   setCover(null);
  //   setProfile(null);
  // };

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.coverPic} alt="" />
        {/* <a href="https://jssstuniv.in/" target="_blank">
          <img
            src="https://www.campusoption.com/images/colleges/gallery/18_11_16_021631_College.jpg"
            alt=""
          />
        </a> */}
        <span>{currentUser.name}</span>
        {/* <button onClick={handleClick}>+</button> */}
      </div>
      {/* {error
        ? ""
        : isLoading
        ? ""
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))} */}
    </div>
  );
};

export default Stories;
