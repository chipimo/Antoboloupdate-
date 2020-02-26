import React from "react";
import Paper from "@material-ui/core/Paper";
import UserSearchBar from "../components/UserSearchBar";
import UserFilesTable from "../components/UserFilesTable";
import { AnimatedSwitch, spring } from "react-router-transition";
import { Route } from "react-router-dom";
import NewFile from "../components/NewFile";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Typography from "@material-ui/core/Typography";
import { useLocation, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}px)`
  };
}

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 19
  });
}

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 0
  },
  atLeave: {
    offset: glide(-100),
    opacity: glide(0)
  },
  atActive: {
    offset: glide(0),
    opacity: glide(1)
  }
};

const UserFiles = props => {
  const history = useHistory();
  const location = useLocation();

  const [layout, setLayout] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === "/Home-page/files/new-file") {
      setLayout(true);
    } else {
      setLayout(false);
    }
  }, [props]);

  return (
    <div>
      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#132433",
          width: "100%",
          height: 170,
          color: "#A8A8A8",
          padding: 20
        }}
      >
        {layout ? (
          <div>
            <div style={{ display: "flex" }}>
              {" "}
              <IconButton
                onClick={() => {
                  history.push("/Home-page/files/file-list");
                }}
                style={{ color: "#E5E5E5" }}
                aria-label="back"
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <div style={{ marginLeft: 10, marginTop: 10 }}>
                {" "}
                <Typography
                  style={{ color: "#E5E5E5" }}
                  variant="h6"
                  gutterBottom
                >
                  New file
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", marginTop: 25 }}>
              <ShoppingBasketIcon style={{ fontSize: 30 }} />
              <div style={{ marginLeft: 10 }}>
                <Typography
                  style={{ color: "#E5E5E5" }}
                  variant="h6"
                  gutterBottom
                >
                  Products
                </Typography>
              </div>
            </div>
            <UserSearchBar />
            <div style={{ marginTop: 25 }}>
              <Button
                onClick={() => {
                  history.push("/Home-page/files/new-file");
                }}
                variant="contained"
                color="primary"
              >
                Add New Product
              </Button>
            </div>
          </div>
        )}
      </Paper>
      <div
        style={{
          width: "95%",
          margin: "auto",
          marginTop: -65,
        }}
      >
        <Paper style={{ width: "100%", height:'80vh' }}>
          <AnimatedSwitch
            className="uni-wrapper"
            {...pageTransitions}
            mapStyles={mapStyles}
          >
            <Route
              path="/Home-page/files/file-list"
              component={UserFilesTable}
            />
            <Route path="/Home-page/files/new-file" component={NewFile} />
          </AnimatedSwitch>
        </Paper>
      </div>
    </div>
  );
};

export default UserFiles;
