import React, { useState, useEffect } from "react";
import Auth from "../Auth";
import { useHistory } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const archive = useHistory();
  useEffect(() => {
    Auth()
      .get("/api/colors")
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logOut = () => {
    localStorage.clear();
    archive.push("/");
  };

  return (
    <>
      <button onClick={logOut}>Log Out</button>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
