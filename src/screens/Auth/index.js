import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import SignUp from "./SignUp";
import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import { Responsive } from "semantic-ui-react";

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
  });
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(-100)
  },
  atActive: {
    offset: glide(0)
  }
};

const topBarTransitions = {
  atEnter: {
    offset: -100
  },
  atLeave: {
    offset: slide(-150)
  },
  atActive: {
    offset: slide(0)
  }
};

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const UserAuth = props => {
  const [activeItem, setActiveItem] = React.useState("Login");
  const [deviceWidth, setDeviceWidth] = React.useState(1032);

  const handleItemClick = (e, { name }) => {
    if (name === "Home") {
      setActiveItem(name);
      props.history.push("/");
    } else {
      setActiveItem(name);
      props.history.push(`/Auth-page/${name}`);
    }
  };

  React.useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, [props]);

  return (
    <div>
      <Responsive
        onUpdate={(event, data) => {
          setDeviceWidth(data.width);
        }}
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      ></Responsive>
      <div
        style={{
          width: deviceWidth > 768 ? "50%" : "100%",
          height: "100vh",
          textAlign: "center",
          margin: "auto",
          overflow: "hidden",
          padding: 10,
          paddingTop: 10
        }}
      >
        <Menu pointing secondary size="huge">
          <Menu.Item
            name="Home"
            color="green"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Login"
            color="green"
            active={activeItem === "Login"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="SignUp"
            color="green"
            active={activeItem === "SignUp"}
            onClick={handleItemClick}
          />
        </Menu>
        <div>
          <AnimatedSwitch
            {...pageTransitions}
            className="main-wrapper"
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`
            })}
          >
            <Route path="/Auth-page/Login" component={Login} />
            <Route path="/Auth-page/SignUp" component={SignUp} />
          </AnimatedSwitch>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    NavTo: state.NavTo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
