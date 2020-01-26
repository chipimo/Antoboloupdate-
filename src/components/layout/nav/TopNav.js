import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Button,
  Responsive,
  Sidebar,
  Segment,
  Icon
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function DesktopContainer() {
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
            <Button as="a" inverted>
              Log in
            </Button>
            <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </Responsive>
  );
}

function MobileContainer() {
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
          Home
        </Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item as="a">Log in</Menu.Item>
        <Menu.Item as="a">Sign Up</Menu.Item>
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
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
      </Sidebar.Pusher>
    </Responsive>
  );
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

function TopNav() {
  return (
    <div>
      <ResponsiveContainer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
