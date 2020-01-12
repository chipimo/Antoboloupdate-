import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Login = props => {
  const [deviceWidth, setDeviceWidth] = React.useState(1032);

  React.useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, [props]);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        paddingLeft: deviceWidth > 768 ? 50 : 100,
        paddingRight: deviceWidth > 768 ? 50 : 100,
        paddingTop: 5
      }}
    >
      <Responsive
        onUpdate={(event, data) => {
          setDeviceWidth(data.width);
        }}
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      ></Responsive>

      <form className="login100-form validate-form flex-sb flex-w">
        <span className="login100-form-title p-b-51">Login</span>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Username is required"
        >
          <input
            className="input100"
            type="text"
            name="username"
            placeholder="Username"
          />
          <span className="focus-input100"></span>
        </div>

        <div
          className="wrap-input100 validate-input m-b-16"
          data-validate="Password is required"
        >
          <input
            className="input100"
            type="password"
            name="pass"
            placeholder="Password"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="flex-sb-m w-full p-t-3 p-b-24">
          <div className="contact100-form-checkbox">
            <input
              className="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember-me"
            />
            <label className="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>

          <div>
            <a href="#" className="txt1">
              Forgot?
            </a>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button className="login100-form-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    NavTo: state.NavTo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
