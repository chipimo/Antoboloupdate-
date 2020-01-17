import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import LeftSideNav from "../components/layout/nav/LeftSideNav";
import Home from "./Explorer/Home";
import Assignments from "./Assignments";
import { Responsive } from "semantic-ui-react";
import Blog from "./Blog";
import Pastpapers from "./Pastpapers";
import Books from "./Books";
import Newspapers from "./Newspapers";
import About from "./About";
import KnowledgeBase from "./Knowledge-Base";
import FAQ from "./FAQ";
import AccessComp from "./Access";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import PrivacyPolicy from "./PrivacyPolicy";
import TCS from "./TCS";
import NewAssingments from "./NewAssignments";
import TrandingAssignments from "./TrandingAssignments";
import { useLocation, useHistory } from "react-router-dom";
import ItemOverView from "./ItemOverView";

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

// DeskTop view

const Explorer = props => {
  const [deviceWidth, setDeviceWidth] = React.useState(1032);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    setDeviceWidth(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    addResponseMessage("Hello User how would like us to help you?");

    if (props.NavTo.isRouted) {
      if (location.pathname !== `/home-page/${props.NavTo.nav_to}`) {
        // setactiveItem(props.NavTo.nav_to);
        history.push(`/home-page/${props.NavTo.nav_to}`);
      }else{
        alert(location.pathname)
      }
    }
    
  }, [props]);

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const [isFixed, setFixed] = React.useState(true);

  const handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollHeight;
    // console.log(window.scrollY);
    if (window.scrollY < 86) {
      setFixed(true);
    } else if (window.scrollY > 86) {
      setFixed(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FDFDFD",
        width: "100%",
        height: "100vh",
        display: "flex"
      }}
    >
      <Responsive
        onUpdate={(event, data) => {
          setDeviceWidth(data.width);
        }}
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <div
          style={{
            width: 250,
            height: "100vh",
            paddingTop: 40
          }}
        >
          <div
            style={{
              position: "fixed",
              zIndex: 80,
              width: 250,
              height: "100vh"
            }}
          >
            <div style={{ paddingTop: 10 }}>
              <LeftSideNav />
            </div>
          </div>
        </div>
      </Responsive>

      <div
        style={{
          width: deviceWidth > 768 ? "60%" : "100%",
          height: "100vh",
          marginTop: 58,
          overflow: "auto"
        }}
      >
        {/* <Home/> */}
        <AnimatedSwitch
          className="main-wrapper"
          {...switchConfig}
          mapStyles={mapStyles}
        >
          <Route path="/Home-page/Explorer" component={Home} />
          <Route path="/Home-page/Assignments" component={Assignments} />
          <Route path="/Home-page/New-Assignments" component={NewAssingments} />
          <Route
            path="/Home-page/Tranding-Assignments"
            component={TrandingAssignments}
          />
          <Route path="/Home-page/Pastpapers" component={Pastpapers} />
          <Route path="/Home-page/Books" component={Books} />
          <Route path="/Home-page/Newspapers" component={Newspapers} />
          <Route path="/Home-page/Blog" component={Blog} />
          <Route path="/Home-page/Knowledge-Base" component={KnowledgeBase} />
          <Route path="/Home-page/FAQ" component={FAQ} />
          <Route path="/Home-page/Help" component={AccessComp} />
          <Route path="/Home-page/About" component={About} />
          <Route path="/Home-page/Privacy-Policy" component={PrivacyPolicy} />
          <Route path="/Home-page/TCS" component={TCS} />
          <Route path="/Home-page/item-over-view" component={ItemOverView} />
        </AnimatedSwitch>
      </div>

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <div style={{ width: "18%", paddingTop: 67, marginLeft: 10 }}>
          <div
            style={{
              position: isFixed ? "fixed" : "absolute",
              backgroundColor: "#F2F2F2",
              borderRadius: 5,
              borderColor: "#E5E5E5",
              borderWidth: 1,
              borderStyle: "solid",
              width: "20%",
              height: "83vh",
              padding: 10
            }}
          >
            <div
              style={{
                width: "100%",
                borderColor: "transparent",
                borderWidth: 1,
                borderStyle: "solid",
                borderBottomColor: "#D9D9D9",
                paddingBottom: 5
              }}
            >
              Categories
            </div>
            <div>
              <div style={{ marginTop: 20, marginLeft: 15 }}>
                <div style={{ marginBottom: 10, display: "flex" }}>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20, marginTop: 10 }}>
                    Subject name header
                  </div>
                </div>
                <div style={{ marginBottom: 10, display: "flex" }}>
                  <Avatar>
                    <PageviewIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20, marginTop: 10 }}>
                    Subject name header
                  </div>
                </div>
                <div style={{ marginBottom: 10, display: "flex" }}>
                  <Avatar>
                    <AssignmentIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20, marginTop: 10 }}>
                    Subject name header
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Responsive>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="Antobolo care center"
        subtitle="How would you like us to help you?"
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
