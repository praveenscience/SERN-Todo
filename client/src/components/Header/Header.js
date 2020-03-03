import React from "react";

const Header = ({ Title, Dark }) => {
  return (
    <div className={"Header" + (Dark ? " Dark" : "")}>
      <h1>{Title}</h1>
    </div>
  );
};

export default Header;
