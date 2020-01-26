import React from "react";
import Paper from "@material-ui/core/Paper";
import UserSearchBar from "../components/UserSearchBar";
import UserFilesTable from "../components/UserFilesTable";

const UserFiles = props => {
  return (
    <div>
      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#132433",
          width: "100%",
          height: 200,
          color: "#A8A8A8",
          padding: 20
        }}
      >
        <UserSearchBar />
      </Paper>
      <div style={{ width: "95%", margin: "auto", marginTop: -65 }}>
        <Paper style={{ width: "100%" }}>
          <UserFilesTable />
        </Paper>
      </div>
    </div>
  );
};

export default UserFiles;
