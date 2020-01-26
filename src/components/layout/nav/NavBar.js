import React from "react";
import { Menu, Image, Responsive } from "semantic-ui-react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import UserDropDown from "../../menus/UserDropDown";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBar = props => {
  const [activeItem, setActiveItem] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    console.log(props);
  }, []);

  const handleItemClick = (e, { name }) => {
    if (props.NavTo.isRouted) {
      props.dispatchEvent({
        type: "OFFLOADROUTE"
      });
    }
    setActiveItem(name);
    if (name === "auth") {
      history.push("/Auth-page/Login");
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
                type: "OPENSIDEBAR"
              });
            }}
            style={{ padding: 14, cursor: "pointer" }}
          >
            <i
              style={{ color: "#ffffff", fontSize: 25 }}
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
          // active={activeItem === "home"}
          onClick={handleItemClick}
        >
          <Image
            size="mini"
            src="/../../../assets/images/logos/LOGO.png"
            style={{ marginRight: "1.5em" }}
          />
          <Responsive
            getWidth={getWidth}
            minWidth={Responsive.onlyTablet.minWidth}
          >
            Antobolo
          </Responsive>
        </Menu.Item>

        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <div style={{ display: "flex", height: 56 }}>
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
        {props.user.isLogedin ? (
          <Menu.Item position="right" name="user">
            <div style={{ display: "flex" }}>
              <UserDropDown />
            </div>
          </Menu.Item>
        ) : (
          <Menu.Item
            position="right"
            name="auth"
            active={activeItem === "auth"}
            onClick={handleItemClick}
          >
            Login | SignUp
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    SideBarState: state.SideBarState,
    NavTo: state.NavTo,
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
