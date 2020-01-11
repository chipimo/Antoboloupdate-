import React from "react";
import { Redirect } from "react-router-dom";

function RedirectToHome() {
  return (
    <div>
      <Redirect to="/Home-page/Explorer" />
    </div>
  );
}

export default RedirectToHome;
