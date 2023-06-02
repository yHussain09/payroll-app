import React, { useState } from "react";

function ErrorExample() {
  //   let title = "random title";
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    setTitle("ASDF");
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click
      </button>
    </React.Fragment>
  );
}

export default ErrorExample;
