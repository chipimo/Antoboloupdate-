import React, { useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import TopNav from "../components/layout/nav/TopNav";
import FooterNav from "../components/layout/nav/FooterNav";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Responsive,
  Sidebar,
  Icon,
  Message,
  Button
} from "semantic-ui-react";
import LeftSideNav from "../components/layout/nav/LeftSideNav";
import { Alert } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import UserAuth from "../screens/Auth";
import Slide from "@material-ui/core/Slide";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";

import logo from "../assets/images/logos/LOGO-whait.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function DesktopContainer(props) {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="/../../../assets/images/logos/LOGO.png"
              style={{ marginRight: "1.5em" }}
            />
            Antobolo Assignments
          </Menu.Item>
          <Menu.Item as="a">Blog</Menu.Item>

          <Dropdown item simple text="E-larning">
            <Dropdown.Menu>
              <Dropdown.Item>Knowledge-Base</Dropdown.Item>
              <Dropdown.Item>FAQ</Dropdown.Item>
              <Dropdown.Item>How To Access</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <div
              style={{ color: "#ccc" }}
              className="ui right aligned category search item"
            >
              <div className="ui transparent icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search assignments..."
                />
                <i className="search link icon" />
              </div>
              <div className="results" />
            </div>
          </Menu.Item>
          <Menu.Item position="right">
            <Button onClick={() => props.func()} as="a" inverted>
              Log in
            </Button>
            <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
      {props.children}
    </Responsive>
  );
}

function MobileContainer(props) {
  const [sidebarOpened, setsidebarOpened] = React.useState(false);

  const handleSidebarHide = () => setsidebarOpened(false);
  const handleToggle = () => setsidebarOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a" active>
          Assignments
        </Menu.Item>
        <Menu.Item as="a">All Assignments</Menu.Item>
        <Menu.Item as="a">New Assignments</Menu.Item>
        <Menu.Item as="a">Tranding Assignments</Menu.Item>
        <Menu.Item as="a">Exploler</Menu.Item>
        <Menu.Item as="a">Past Papers</Menu.Item>
        <Menu.Item as="a">News Papers</Menu.Item>
        <Menu.Item as="a">Books</Menu.Item>
        <Menu.Item as="a">Shopping Cart</Menu.Item>
        <Menu.Item as="a">My Account</Menu.Item>
        <Menu.Item as="a">About Us</Menu.Item>
        <Menu.Item as="a">Terms and Conditions</Menu.Item>
        <Menu.Item as="a">Privacy Policy</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment inverted textAlign="center" style={{ minHeight: 65 }} vertical>
          <Container>
            <Menu pointing fixed="top" inverted>
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item as="a" header>
                <Image
                  size="mini"
                  src="/../../../assets/images/logos/LOGO.png"
                  style={{ marginRight: "1.5em" }}
                />
                Antobolo Assignments
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {props.children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  const [visible, setVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    addResponseMessage("Hello User how would like us to help you?");
  }, []);

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollHeight;
    // console.log(window.scrollY);
    if (window.scrollY < 86) {
      setFixed(true);
    } else if (window.scrollY > 86) {
      setFixed(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div>
        <DesktopContainer func={handleClickOpen}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "18%",
                height: "100vh",
                paddingTop: 50
              }}
            >
              <LeftSideNav />
            </div>
            <div style={{ width: "82%", paddingTop: 70 }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "70%" }}>{children}</div>
                <div
                  style={{
                    width: "30%"
                  }}
                >
                  <div
                    style={{
                      position: isFixed ? "fixed" : "absolute",
                      backgroundColor: "#F2F2F2",
                      borderRadius: 5,
                      borderColor: "#E5E5E5",
                      borderWidth: 1,
                      borderStyle: "solid",
                      width: "24%",
                      height: "88vh"
                    }}
                  >
                    <div style={{ padding: 10 }}>
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
                          <div style={{ marginBottom: 10, display:'flex',  }}>
                            <Avatar>
                              <FolderIcon />
                            </Avatar>
                            <div style={{marginLeft:20,marginTop:10}}>
                              Subject name header
                            </div>
                          </div>
                          <div style={{ marginBottom: 10, display:'flex',  }}>
                            <Avatar>
                              <PageviewIcon />
                            </Avatar>
                            <div style={{marginLeft:20,marginTop:10}}>
                              Subject name header
                            </div>
                          </div>
                          <div style={{ marginBottom: 10, display:'flex',  }}>
                            <Avatar>
                              <AssignmentIcon />
                            </Avatar>
                            <div style={{marginLeft:20,marginTop:10}}>
                              Subject name header
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{!noFooter && <FooterNav />}</div>
            </div>
          </div>
        </DesktopContainer>
      </div>
      <div>
        <MobileContainer>
          <div>
            <div style={{ width: "100%", paddingTop: 30 }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{ padding: 15 }}>
                  <Alert show={true} variant="success">
                    <Alert.Heading>join Antobolo!</Alert.Heading>
                    <p>Do more cool stuff when join anntobolo.</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={() => handleClickOpen()}
                        variant="outline-success"
                      >
                        Login
                      </Button>
                      <Button
                        // onClick={() => setShow(false)}
                        variant="outline-success"
                      >
                        Sign up
                      </Button>
                    </div>
                  </Alert>
                </div>
              </div>
              <div>{children}</div>
              <div>{!noFooter && <FooterNav mobile={true} />}</div>
            </div>
          </div>
        </MobileContainer>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#1C1A31"
          }}
        >
          <div style={{ padding: 20, color: "#fff", fontSize: 22 }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer"
              }}
              onClick={handleClose}
            >
              <i className="material-icons">close</i>
            </button>
          </div>
          <div>
            <UserAuth />
          </div>
        </div>
      </Dialog>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="Antobolo care center"
        subtitle="How would you like us to help you?"
      />
    </div>
  );
};

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
