import React from "react";
import { Menu, Image, Responsive } from "semantic-ui-react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBar = props => {
  const [activeItem, setActiveItem] = React.useState("home");
  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name === "auth") {
      history.push("/Auth-page");
    } else if (name === "blog") {
      history.push("/home-page/Blog");
    } else if (name === "home") {
      history.push("/home-page/Explorer");
    }
  };
  return (
    <div style={{ backgroundColor: "#1B1C1D", width: "100%" }}>
      <Menu inverted fluid>
        <Responsive
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <div
            onClick={() => {
              props.dispatchEvent({
                type: "OPENSIDEBAR",
              });
            }}
            style={{ padding: 10, cursor: "pointer" }}
          >
            <i
              style={{ color: "#ffffff", fontSize: 18 }}
              class="material-icons"
            >
              menu
            </i>
          </div>
        </Responsive>
        <Menu.Item
          as="a"
          header
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          <Image
            className="logo-img"
            src="/../../../assets/images/logos/LOGO.png"
            style={{ marginRight: "1.5em" }}
          />
          Antobolo Assignments
        </Menu.Item>

        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <div style={{ display: "flex" }}>
            <Menu.Item
              as="a"
              name="blog"
              active={activeItem === "blog"}
              onClick={handleItemClick}
            >
              Blog
            </Menu.Item>

            <Menu.Item>
              <div
                style={{
                  width: "20%",
                  borderColor: "#4C4D4E",
                  display: "flex"
                }}
              >
                <i className="search link icon" /> <span>Search</span>
              </div>
            </Menu.Item>
          </div>
        </Responsive>

        <Menu.Item
          position="right"
          name="auth"
          active={activeItem === "auth"}
          onClick={handleItemClick}
        >
          Login | SignUp
        </Menu.Item>
      </Menu>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    SideBarState: state.SideBarState
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
