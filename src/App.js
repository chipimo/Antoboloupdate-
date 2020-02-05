import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import { connect } from "react-redux";
import Explorer from "./screens/Explorer";
import withTracker from "./withTracker";
import NavBar from "./components/layout/nav/NavBar";
import UserAuth from "./screens/Auth";
import RedirectToHome from "./screens/Redirect";
import "./app.css";
import { Icon, Menu } from "semantic-ui-react";
import ReactSlidingPane from "./components/Sliding-pane/react-sliding-pane";
import "./components/Sliding-pane/react-sliding-pane.css";
import { SnackbarProvider } from "notistack";

const socketIOClient = require("socket.io-client");

const socketUrl = "http://localhost:3200";
const baseUrl = "https://antobolo-server.herokuapp.com/";

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
    initiSocket();
  }, [props]);

  // const onClose = () => {};
  const [activeItem, setactiveItem] = React.useState("Explorer");
  const [socketState, setSocketState] = React.useState({});

  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
    // history.push(`/home-page/${name}`);
    props.dispatchEvent({
      type: "CLOSESIDEBAR"
    });
    if (props.NavTo.isRouted) {
      props.dispatchEvent({
        type: "NAVTO",
        nav_to: name
      });
    } else {
      props.dispatchEvent({
        type: "NAVTO",
        nav_to: name
      });
    }
  };

  const initiSocket = () => {
    const socket = socketIOClient(socketUrl);
    
    socket.on("connect", () => {
      setSocketState(socket);
      props.dispatchEvent({
        type: "SOCKETID",
        socket: socket
      });
    });

    socket.on("disconnect", () => {
      props.dispatchEvent({
        type: "SOCKETDISCONNECTED",
      });
    });

    // socket.on('NEW_TILL', this.newEvent);
    // socket.emit('PRIVATE_MESSAGE', { reciver: 'main', sender: 'tail1' });
    // this.setState({ socket });
  };

  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div >
        <ReactSlidingPane
          closeIcon={
            <i style={{ fontSize: 24 }} class="material-icons">
              keyboard_arrow_left
            </i>
          }
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
          <div>
            <Menu vertical pointing fluid size="large">
              <Menu.Item
                name="Explorer"
                active={activeItem === "Explorer"}
                onClick={handleItemClick}
              >
                <Icon name="grid layout" />
                Explorer
              </Menu.Item>
              <Menu.Item>
                Assignments
                <Menu.Menu>
                  <Menu.Item
                    name="Assignments"
                    active={activeItem === "Assignments"}
                    onClick={handleItemClick}
                  >
                    <Icon name="edit" />
                    All Assignments
                  </Menu.Item>
                  <Menu.Item
                    name="New-Assignments"
                    active={activeItem === "New-Assignments"}
                    onClick={handleItemClick}
                  >
                    <Icon name="file alternate" />
                    New Assignments
                  </Menu.Item>
                  <Menu.Item
                    name="Tranding-Assignments"
                    active={activeItem === "Tranding-Assignments"}
                    onClick={handleItemClick}
                  >
                    <Icon name="paperclip" />
                    Tranding
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item
                name="Pastpapers"
                active={activeItem === "Pastpapers"}
                onClick={handleItemClick}
              >
                <Icon name="copy outline" />
                Past Papers
              </Menu.Item>
              <Menu.Item
                name="Newspapers"
                active={activeItem === "Newspapers"}
                onClick={handleItemClick}
              >
                <Icon name="list alternate outline" />
                News Papers
              </Menu.Item>
              <Menu.Item
                name="Books"
                active={activeItem === "Books"}
                onClick={handleItemClick}
              >
                <Icon name="book" />
                Books
              </Menu.Item>

              <Menu.Item
                name="Knowledge-Base"
                active={activeItem === "Knowledge-Base"}
                onClick={handleItemClick}
              >
                <Icon name="paper plane outline" />
                Knowledge-Base
              </Menu.Item>

              <Menu.Item
                name="FAQ"
                active={activeItem === "FAQ"}
                onClick={handleItemClick}
              >
                <Icon name="user outline" />
                FAQ
              </Menu.Item>

              <Menu.Item
                name="Help"
                active={activeItem === "Help"}
                onClick={handleItemClick}
              >
                <Icon name="question circle outline" />
                Help
              </Menu.Item>

              <Menu.Item
                name="About"
                active={activeItem === "About"}
                onClick={handleItemClick}
              >
                <Icon name="address card outline" />
                About Us
              </Menu.Item>
              <Menu.Item
                name="TCS"
                active={activeItem === "TCS"}
                onClick={handleItemClick}
              >
                <Icon name="file pdf outline" />
                Terms and Conditions
              </Menu.Item>
              <Menu.Item
                name="Privacy-Policy"
                active={activeItem === "Privacy-Policy"}
                onClick={handleItemClick}
              >
                <Icon name="file pdf outline" />
                Privacy Policy
              </Menu.Item>
            </Menu>
          </div>
        </ReactSlidingPane>

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
                <Route path="/Auth-page" component={UserAuth} />
              </AnimatedSwitch>
              <AnimatedRoute
                path="/"
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
