import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Email from "@material-ui/icons/Email";
import LockOpen from "@material-ui/icons/LockOpen";
import { FormCheckbox } from "shards-react";
import { Button } from "antd";
import { isMobile } from "react-device-detect";

function Login() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: 10,
        paddingTop: 30
      }}
    >
      <h3>Login to your account</h3>
      <h6>
        Don't have an account? <a style={{ color: "green" }}>Sing up free!</a>
      </h6>
      <div style={{ width: isMobile? "100%": "70%", margin: "auto", marginTop: 50 }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Email address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
        />
        <div style={{ marginTop: 20 }}>
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="User password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpen />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <FormCheckbox toggle small defaultChecked>
            Remmber me
          </FormCheckbox>
          <a style={{ color: "#8EC78E" }}>Forgot password?</a>
        </div>
        <div style={{marginTop:30, width:'100%'}}>
          <Button block type="primary">Login with email</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
