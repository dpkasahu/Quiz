import React from "react";
import "./PageTitle.css"; // Import the CSS file

function PageTitle({ title }) {
  return (
    <div className="mt-2 text-center">
      <h1 className="page-title">{title}</h1>
    </div>
  );
}

export default PageTitle;
