import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Login = props => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [EmailError, setEmailError] = React.useState("");
  const [PassError, setPassError] = React.useState("");
  const [ErrorMsg, setErrorMsg] = React.useState("");
  const [InputError, setInputError] = React.useState(false);
  const [ModalState, setModalState] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const TextOnChange = (type, event) => {
    if (type === "email") {
      setEmail(event.target.value);
      setErrorMsg("");
      setInputError(false);
    } else {
      setPass(event.target.value);
      setInputError(false);
      setPassError("");
    }
  };

  const onSubmit = () => {
    if (email === "") {
      setInputError(true);

      setErrorMsg(
        "You can only sign in for an account once with a given e-mail address."
      );
    } else if (pass === "") {
      setInputError(true);
          setErrorMsg(
            "You can only sign in for an account once with a given Password."
          );
    } else {
      setModalState(true);
      props.SocketConnId.sockectId.emit("VERIFY_USER", {
        email: email,
        pass: pass
      });

      props.SocketConnId.sockectId.on("USER_NOT_EXIST", data => {
        setModalState(false);
        handleOpen();
        // console.log(`data from sever ${data}`);
      });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Dimmer active={ModalState} inverted>
        <Loader inverted={ModalState}>Loading</Loader>
      </Dimmer>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="green" textAlign="center">
            <Image src="/../../../assets/images/logos/LOGO.png" /> Log-in to
            your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                onChange={text => {
                  TextOnChange("email", text);
                }}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={pass}
                onChange={text => {
                  TextOnChange("pass", text);
                }}
              />

              <Button
                onClick={e => {
                  e.preventDefault();
                  onSubmit();
                }}
                color="green"
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
          {InputError ? (
            <Message color="red" header="Action Forbidden" content={ErrorMsg} />
          ) : null}

          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title">We're sorry</h4>
            <p
              id="transition-modal-description"
              style={{ padding: 0, margin: 0 }}
            >
              No account found with the information submited
            </p>
            <p id="transition-modal-description">
              Please create an account first then login
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    NavTo: state.NavTo,
    SocketConnId: state.SocketConnId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
