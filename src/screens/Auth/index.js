import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import SignUp from "./SignUp";
import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import { Responsive } from "semantic-ui-react";
import PasswordRecovery from "./passwordRecovery";

function zoom(val) {
  return spring(val, {
    stiffness: 135,
    damping: 15
  });
}

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50)
  },
  atActive: {
    opacity: 1,
    offset: zoom(0)
  }
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`
  };
}

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
          width: "100%",
          margin: "auto",
          overflow: "auto",
          padding: 10,
          paddingTop: 20,
          height: "100vh"
        }}
      >
        <div
          style={{ height: "95vh", width: deviceWidth > 768 ? "50%" : "100%",margin:'auto',}}
        >
          <div>
            <AnimatedSwitch
              {...switchConfig}
              className="login-wrapper"
              mapStyles={mapStyles}
            >
              <Route path="/Auth-page/Login" component={Login} />
              <Route path="/Auth-page/SignUp" component={SignUp} />
              <Route
                path="/Auth-page/Password-recovery"
                component={PasswordRecovery}
              />
            </AnimatedSwitch>
          </div>
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
