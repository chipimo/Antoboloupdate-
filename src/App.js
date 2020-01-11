import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import { connect } from "react-redux";
import Explorer from "./screens/Explorer";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import withTracker from "./withTracker";
import NavBar from "./components/layout/nav/NavBar";
import Login from "./screens/Auth/Login";
import RedirectToHome from "./screens/Redirect";
import "./app.css";

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

const App = props => {
  React.useEffect(() => {
    // console.log(props);
  }, [props]);

  const onClose = () => {};

  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        <SlidingPane
          closeIcon={<i style={{fontSize:24}} class="material-icons">keyboard_arrow_left</i>}
          isOpen={props.SideBarState.open}
          title="Antobolo"
          from="left"
          width="250px"
          onRequestClose={() =>
            props.dispatchEvent({
              type: "CLOSESIDEBAR"
            })
          }
        >
          <div>And I am pane content on left.</div>
        </SlidingPane>

        <Route
          render={({ location }) => (
            <div>
              <AnimatedSwitch
                {...pageTransitions}
                runOnMount={location.pathname === "/"}
                mapStyles={styles => ({
                  transform: `translateX(${styles.offset}%)`
                })}
                className="switch-wrapper"
              >
                <Route path="/" exact component={RedirectToHome} />
                <Route path="/Home-page" component={Explorer} />
                <Route path="/Auth-page" component={Login} />
              </AnimatedSwitch>
              <AnimatedRoute
                path="/home-page"
                component={NavBar}
                {...topBarTransitions}
                mapStyles={styles => ({
                  transform: `translateY(${styles.offset}%)`
                })}
                className="top-wrapper"
              />
            </div>
          )}
        />
      </div>
    </Router>
  );
};

function mapStateToProps(state) {
  return {
    NavTo: state.NavTo,
    SideBarState: state.SideBarState
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
