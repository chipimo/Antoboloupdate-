import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function LeftSideNav(props) {
  const [activeItem, setactiveItem] = React.useState("Explorer");

  const location = useLocation();
  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    if (props.NavTo.isRouted) {
      props.dispatchEvent({
        type: "OFFLOADROUTE"
      });
    }
    setactiveItem(name);
    history.push(`/home-page/${name}`);
  };

  React.useEffect(() => {
    if (location.pathname) {
      if (location.pathname === "/home-page/Explorer") {
        setactiveItem("Explorer");
      } else if (location.pathname === "/home-page/Assignments") {
        setactiveItem("Assignments");
      }
    }

    // if (props.NavTo.isRouted) {
    //   if (location.pathname !== `/home-page/${props.NavTo.nav_to}`) {
    //     setactiveItem(props.NavTo.nav_to);
    //     history.push(`/home-page/${props.NavTo.nav_to}`);
    //   }
    // }

    // return=()=>{

    // }
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
  );
}

function mapStateToProps(state) {
  return {
    SideBarState: state.SideBarState,
    NavTo: state.NavTo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideNav);
