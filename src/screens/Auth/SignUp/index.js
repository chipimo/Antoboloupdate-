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
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {connect} from "react-redux"
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"Antobolo"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#46A24A"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp=(props) =>{
  const classes = useStyles();

  const [name, setname] = React.useState("");
  const [nameError, setnameError] = React.useState("");
  const [LastName, setLastname] = React.useState("");
  const [LastNameError, setLastnameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [passError, setPassError] = React.useState("");
  const [confirmPass, setconfirmPass] = React.useState("");
  const [confirmPassError, setconfirmPassError] = React.useState("");
  const [netError, setNetError] = React.useState(false);


  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });

  const TextOnChange = (type, event) => {
    if (type === "email") {
      setEmail(event.target.value);
      setEmailError("false");
    } else {
      setPass(event.target.value);
      setPassError(false);
    }
  };

  const onSubmit = () => {
    if (props.SocketConnId.conn) {        
    } else {
      setNetError(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          backgroundColor: "#F7F7F7",
          marginTop: 25,
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
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={text => {
                      TextOnChange("pass", text);
                    }}
                    error={nameError!==""?true:false}
                    helperText={nameError!=="" ? "" : nameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
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
                    Sign Up
                  </Typography>
                </Button>
              </ThemeProvider>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/Auth-page/Login");
                    }}
                    variant="body2"
                  >
                    <Typography
                      style={{ color: "green" }}
                      variant="subtitle2"
                      display="block"
                      gutterBottom
                    >
                      Already have an account? Sign in
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
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
}


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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
