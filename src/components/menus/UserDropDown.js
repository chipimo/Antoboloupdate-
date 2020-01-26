import React from "react";
import Menu from "@material-ui/core/Menu";
import { Label } from "semantic-ui-react";
import { connect } from "react-redux";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import FolderIcon from "@material-ui/icons/FolderOpen";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 230,
    paddingTop: 10
  },
  avatar: {
    width: "100%",
    textAlign: "center"
  },
  avatarChild: {
    margin: "auto"
  }
});

const UserDropDown = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Label
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="black"
        as="a"
        image
      >
        <img src="https://res.cloudinary.com/chawanangwa/image/upload/v1560520651/profile/2325312890863699.jpg" />
        {props.user.isLogedin
          ? capitalizeFirstLetter(props.user.user_name)
          : "No user name"}
      </Label>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.root}>
          <div className={classes.avatar}>
            <div className={classes.avatarChild}>
              <div style={{ paddingLeft: "40%" }}>
                <Avatar
                  alt={
                    props.user.isLogedin ? props.user.user_name : "No user name"
                  }
                  src="https://res.cloudinary.com/chawanangwa/image/upload/v1560520651/profile/2325312890863699.jpg"
                />
              </div>
              <Typography variant="caption" noWrap>
                {props.user.isLogedin
                  ? capitalizeFirstLetter(props.user.Fname)
                  : "No user name"}{" "}
                {props.user.isLogedin
                  ? capitalizeFirstLetter(props.user.Lname)
                  : "No user name"}
              </Typography>
              <br />
              <Typography variant="caption" noWrap>
                {props.user.isLogedin ? props.user.email : "No user email"}
              </Typography>
            </div>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <ListItem
                onClick={() => {
                  history.push("/Home-page/files");
                  handleClose();
                }}
                button
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="My Files" />
              </ListItem>
              <ListItem
                onClick={() => {
                  history.push("/Home-page/account");
                  handleClose();
                }}
                button
              >
                <ListItemIcon>
                  <TuneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
              </ListItem>
              <ListItem
                onClick={() => {
                  handleClose();
                  history.push("/Auth-page/Login");
                }}
                button
              >
                <ListItemIcon>
                  <TrendingFlatIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </List>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown);
