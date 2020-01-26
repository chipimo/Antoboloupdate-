import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { green } from "@material-ui/core/colors";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"Antobolo "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  ErrorInfo: {
    backgroundColor: "#F6DBD8",
    padding: 20,
    borderRadius: 5,
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#E3887F",
    borderWidth: 1,
    borderStyle: "solid"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#46A24A"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  ModalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Login = props => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [netError, setNetError] = React.useState(false);
  const [EmailError, setEmailError] = React.useState(false);
  const [PassError, setPassError] = React.useState(false);
  const [ErrorMsg, setErrorMsg] = React.useState("");
  const [InputError, setInputError] = React.useState(false);
  const [ModalState, setModalState] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    props.dispatchEvent({ type: "USERLOGOUT" });
  }, []);

  const classes = useStyles();

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
      setEmailError(false);
    } else {
      setPass(event.target.value);
      setInputError(false);
      setPassError(false);
    }
  };

  const onSubmit = () => {
    if (props.SocketConnId.conn) {
      if (email === "") {
        setInputError(true);
        setEmailError(true);

        setErrorMsg(
          "You can only sign in for an account once with a given e-mail address."
        );
      } else if (pass === "") {
        setInputError(true);
        setPassError(true);
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
          setInputError(
            "No account found with the information submited. Please create an account first then login"
          );
          handleOpen();
          // console.log(`data from sever ${data}`);
        });

        props.SocketConnId.sockectId.on("USER_IS_VERIFYED", data => {
          props.dispatchEvent({
            type: "USRELOGIN",
            payload: data
          });
          props.history.push("/");
        });

        props.SocketConnId.sockectId.on("USER_PASS_INCLLECT", data => {
          setModalState(false);
          setInputError("Wrong username or password. Try agin");
          handleOpen();
        });
      }
    } else {
      setNetError(true);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });

  return (
    <div>
      <Dimmer active={ModalState} inverted>
        <Loader inverted={ModalState}>Loading</Loader>
      </Dimmer>
      <div
        style={{
          backgroundColor: "#F7F7F7",
          marginTop: 28,
          paddingBottom: 15,
          paddingTop: 15,
          borderRadius: 10,
          boxShadow: "0px 10px 20px #AAAAAA"
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={text => {
                  TextOnChange("email", text);
                }}
                error={EmailError}
                helperText={EmailError ? ErrorMsg : ""}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={text => {
                  TextOnChange("pass", text);
                }}
                error={PassError}
                helperText={PassError ? ErrorMsg : ""}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={e => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <Typography
                    style={{ color: "#fff", marginTop: 5 }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    Sign In
                  </Typography>
                </Button>
              </ThemeProvider>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/Auth-page/Password-recovery");
                    }}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/Auth-page/SignUp");
                    }}
                    variant="body2"
                    color="secondary"
                  >
                    <Typography
                      style={{ color: "green" }}
                      variant="subtitle2"
                      display="block"
                      gutterBottom
                    >
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
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
          <div className={classes.ErrorInfo}>
            <h4 id="transition-modal-title">We're sorry</h4>
            <p
              id="transition-modal-description"
              style={{ padding: 0, margin: 0 }}
            >
              {InputError}
            </p>
          </div>
        </Fade>
      </Modal>

      <Snackbar
        open={netError}
        autoHideDuration={20000}
        onClose={() => {
          setNetError(false);
        }}
      >
        <Alert onClose={() => setNetError(false)} severity="error">
          Opps! Something went wrong, Please try checking your internet
          connection or reloading the page again.
        </Alert>
      </Snackbar>
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
