import React from "react";
import { Dropdown, Icon, Input, Menu, Divider } from "semantic-ui-react";

function LeftSideNav() {
  const [activeItem, setactiveItem] = React.useState("Exploler");
  const handleItemClick = (e, { name }) => setactiveItem(name);

  return (
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
          name="Exploler"
          active={activeItem === "Exploler"}
          onClick={handleItemClick}
        >
          Exploler
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
          name="past-papers"
          active={activeItem === "past-papers"}
          onClick={handleItemClick}
        >
          <Icon name="grid layout" />
          Past Papers
        </Menu.Item>
        <Menu.Item
          name="News-papers"
          active={activeItem === "News-papers"}
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
          name="Cart"
          active={activeItem === "Cart"}
          onClick={handleItemClick}
        >
          Shopping Cart
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

export default LeftSideNav;
