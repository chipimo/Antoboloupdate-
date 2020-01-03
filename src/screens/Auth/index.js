import React from "react";
import { Card, Col, Button } from "shards-react";
import Login from "./Login";
import { isMobile } from "react-device-detect";

export default function UserAuth() {
  return (
    <div 
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        color: "#ccc"
      }}
    >
      <Col lg="8" className="mb-4">
        <Card
          style={{ backgroundColor: "#2D314D", overflow: "hidden" }}
          small
          className="mb-4"
        >
          {isMobile ? (
            <div style={{ width: "100%", display: "flex", backgroundColor:"#cfd8dc" }}>
              <div
                style={{
                  width: "100%",
                  height: 450,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div>
                  <Login />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ width: "100%", display: "flex"}}>
              <div
                style={{
                  width: "40%",
                  height: 450,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div style={{ marginTop: 90 }}>
                  <div style={{ width: "70%", margin: "auto" }}>
                    <img
                      id="main-logo"
                      className="d-inline-block align-top mr-1"
                      style={{ maxWidth: "200px" }}
                      src={require("../../assets/images/logos/LOGO-whait.png")}
                      alt="Antobolo"
                    />
                  </div>
                  <div style={{ marginTop: 10, width: "60%", margin: "auto" }}>
                    <h6 style={{ color: "#ccc" }}>
                      Login usign social media to get quick access
                    </h6>
                  </div>
                  <div
                    style={{
                      width: "65%",
                      margin: "auto",
                      marginTop: 50
                    }}
                  >
                    <Button pill outline size="sm" className="mb-4">
                      Login with Facebook
                    </Button>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "#fff", width: "60%" }}>
                <Login />
              </div>
            </div>
          )}
        </Card>
      </Col>
    </div>
  );
}
