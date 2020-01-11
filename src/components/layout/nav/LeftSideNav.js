import React from "react";
import { Dropdown, Icon, Input, Menu, Divider } from "semantic-ui-react";
import { useLocation, withRouter } from "react-router-dom";
import configureStore from "../../../redux/store";

function LeftSideNav(props) {
  const [activeItem, setactiveItem] = React.useState("Explorer");
  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
    props.history.push(`/home-page/${name}`);
  };
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname) {
      if (location.pathname === "/home-page/Explorer") {
        setactiveItem("Explorer");
      } else if (location.pathname === "/home-page/Assignments") {
        setactiveItem("Assignments");
      }
    }
  }, [props, location]);

  return (
    // <div style={{ width: "100%" }}>
    //   <div
    //     onClick={() => {
    //       setactiveItem("Exploler");
    //       props.history.push("/home-page/Explorer");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor:
    //         activeItem === "Exploler" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor: activeItem === "Exploler" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>Explorer</div>
    //       <div>
    //         <Icon name="th large" color="grey" />
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     onClick={() => {
    //       setactiveItem("Assignments");
    //       props.history.push("/home-page/Assignments");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor:
    //         activeItem === "Assignments" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor:
    //         activeItem === "Assignments" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>Assignments</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     onClick={() => {
    //       setactiveItem("Pastpapers");
    //       props.history.push("/home-page/Pastpapers");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor:
    //         activeItem === "Pastpapers" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor:
    //         activeItem === "Pastpapers" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>Past Papers</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     onClick={() => {
    //       setactiveItem("Books");
    //       props.history.push("/home-page/Books");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor: activeItem === "Books" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor: activeItem === "Books" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>Books</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     onClick={() => {
    //       setactiveItem("Newspapers");
    //       props.history.push("/home-page/Newspapers");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor:
    //         activeItem === "Newspapers" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor:
    //         activeItem === "Newspapers" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>News Papers</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     style={{
    //       padding: 10,
    //       backgroundColor:
    //         activeItem === "Knowledge-Base"
    //           ? "#E3E3E3"
    //           : activeItem === "FAQ"
    //           ? "#E3E3E3"
    //           : activeItem === "Access"
    //           ? "#E3E3E3"
    //           : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor:
    //         activeItem === "Knowledge-Base"
    //           ? "#34853D"
    //           : activeItem === "FAQ"
    //           ? "#34853D"
    //           : activeItem === "Access"
    //           ? "#34853D"
    //           : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>E-larning</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //     <div style={{ marginLeft: 10, marginTop: 5 }}>
    //       <div
    //         onClick={() => {
    //           setactiveItem("Knowledge-Base");
    //           props.history.push("/home-page/Knowledge-Base");
    //         }}
    //         style={{
    //           cursor: "pointer",
    //           padding: 8,
    //           backgroundColor:
    //             activeItem === "Knowledge-Base" ? "#B9B9B9" : "transparent"
    //         }}
    //       >
    //         Knowledge-Base
    //       </div>
    //       <div
    //         onClick={() => {
    //           setactiveItem("FAQ");
    //           props.history.push("/home-page/FAQ");
    //         }}
    //         style={{
    //           padding: 8,
    //           cursor: "pointer",
    //           backgroundColor: activeItem === "FAQ" ? "#B9B9B9" : "transparent"
    //         }}
    //       >
    //         FAQ
    //       </div>
    //       <div
    //         onClick={() => {
    //           setactiveItem("Access");
    //           props.history.push("/home-page/Access");
    //         }}
    //         style={{
    //           cursor: "pointer",
    //           padding: 8,
    //           backgroundColor:
    //             activeItem === "Access" ? "#B9B9B9" : "transparent"
    //         }}
    //       >
    //         How To Access
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     onClick={() => {
    //       setactiveItem("About");
    //       props.history.push("/home-page/About");
    //     }}
    //     style={{
    //       padding: 10,
    //       cursor: "pointer",
    //       backgroundColor: activeItem === "About" ? "#E3E3E3" : "transparent",
    //       borderColor: "transparent",
    //       borderWidth: 3,
    //       borderStyle: "solid",
    //       borderLeftColor: activeItem === "About" ? "#34853D" : "transparent"
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>About Us</div>
    //       <div>
    //         <Icon name="file alternate" size={80} color="grey" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      style={{
        position: "fixed",
        width: "18%",
        paddingTop: 6,
        backgroundColor: "#F7F7F7",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "transparent",
        borderRightColor: "#ECECEC",
        height: "98vh"
      }}
    >
      <Menu vertical pointing fluid size="large">
        <Menu.Item
          name="Explorer"
          active={activeItem === "Explorer"}
          onClick={handleItemClick}
        >
          Explorer
        </Menu.Item>
        <Menu.Item>
          Assignments
          <Menu.Menu>
            <Menu.Item
              name="All"
              active={activeItem === "All"}
              onClick={handleItemClick}
            >
              All Assignments
            </Menu.Item>
            <Menu.Item
              name="add"
              active={activeItem === "add"}
              onClick={handleItemClick}
            >
              New Assignments
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={handleItemClick}
            >
              Tranding
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name="Pastpapers"
          active={activeItem === "Pastpapers"}
          onClick={handleItemClick}
        >
          <Icon name="grid layout" />
          Past Papers
        </Menu.Item>
        <Menu.Item
          name="Newspapers"
          active={activeItem === "Newspapers"}
          onClick={handleItemClick}
        >
          News Papers
        </Menu.Item>
        <Menu.Item
          name="Books"
          active={activeItem === "Books"}
          onClick={handleItemClick}
        >
          Books
        </Menu.Item>

        <Menu.Item
          name="Knowledge-Base"
          active={activeItem === "Knowledge-Base"}
          onClick={handleItemClick}
        >
          Knowledge-Base
        </Menu.Item>
        <Menu.Item
          name="FAQ"
          active={activeItem === "FAQ"}
          onClick={handleItemClick}
        >
          FAQ
        </Menu.Item>

        <Menu.Item
          name="About"
          active={activeItem === "About"}
          onClick={handleItemClick}
        >
          About Us
        </Menu.Item>
        <Menu.Item
          name="TCS"
          active={activeItem === "TCS"}
          onClick={handleItemClick}
        >
          Terms and Conditions
        </Menu.Item>
        <Menu.Item
          name="Privacy"
          active={activeItem === "Privacy"}
          onClick={handleItemClick}
        >
          Privacy Policy
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Add Files" />
            <Dropdown.Item icon="settings" text="Account Settings" />
            <Dropdown.Item icon="globe" text="Help" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}

export default withRouter(LeftSideNav);
