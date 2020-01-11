import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "shards-react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Background from "../../assets/images/banner/level-up.png";
import cards from "./data";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Home(props) {
  const [PostListOne, SetPostListOne] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const [deviceWidth, setDeviceWidth] = React.useState(1032);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop;
  };

  return (
    <div
      style={{
        paddingTop: 10,
        paddingBottom: 20
      }}
    >
      <div>
        <Container fluid className="main-content-container px-14">
          <div>
            <div
              style={{
                borderColor: "#cfcfcf",
                borderStyle: "solid",
                borderWidth: 1,
                height: 210,
                width: "100%",
                borderRadius: 10,
                backgroundPosition: isMobile ? "90% 50%" : "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${Background})`,
                paddingLeft: isMobile ? 15 : 30
              }}
            >
              <div style={{ padding: 10, paddingTop: 30 }}>
                <h5 style={{ color: "green", margin: 0, padding: 0 }}>
                  Antobolo Level up{" "}
                </h5>
                <p style={{ padding: 0, margin: 0 }}>
                  Get 2 points with every purchase you make{" "}
                </p>
              </div>
              <Button theme="secondary" pill size="sm" className="mb-2">
                <i className="material-icons mr-1">person_add</i>Level up now
              </Button>
            </div>

            <div style={{ marginTop: 20 }}>
              <div>
                <strong>
                  <Typography
                    variant="h6"
                    style={{ color: "green", margin: 0, padding: 0 }}
                  >
                    Bestsellers
                  </Typography>
                </strong>
                <p style={{ margin: 0, padding: 0 }}>This year's top sellers</p>
              </div>

              <Responsive
                onUpdate={(event, data) => {
                  setDeviceWidth(data.width);
                }}
                getWidth={getWidth}
                minWidth={Responsive.onlyTablet.minWidth}
              >
                <div
                  className="custom-bar"
                  style={{
                    paddingTop: 6,
                    display: deviceWidth > 768 ? "flex" : "block",
                    justifyContent: "space-between",
                    overflowX: "auto"
                  }}
                >
                  {cards.map(items => (
                    <div key={items.id} style={{ margin: 10 }}>
                      <Card
                        style={{ overflow: "hidden" }}
                        small
                        className="mb-4 card-haver"
                        onClick={() => {
                          props.dispatchEvent({
                            type: "CARDITEMS",
                            payload: items
                          });
                          history.push("/item-over-view");
                        }}
                      >
                        <div style={{ minWidth: 150, height: 270 }}>
                          <div
                            style={{
                              height: 170,
                              width: "100%",
                              backgroundPosition: "50% 50%",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `url(${items.img})`
                            }}
                          ></div>
                          <div style={{ padding: 3, paddingLeft: 5 }}>
                            <Typography
                              style={{ color: "green" }}
                              variant="subtitle2"
                            >
                              {items.title}
                            </Typography>
                            <Typography
                              style={{ color: "gary" }}
                              variant="caption"
                            >
                              {items.author}
                            </Typography>
                            <div style={{ display: "flex" }}>
                              {items.price === 0.0 ? (
                                <Typography
                                  style={{ color: "gary" }}
                                  variant="caption"
                                >
                                  Price free
                                </Typography>
                              ) : (
                                <Typography
                                  style={{ color: "red" }}
                                  variant="caption"
                                >
                                  Price K {items.price}.00
                                </Typography>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </Responsive>
              <div></div>
            </div>
            <div>
              <div
                style={{
                  marginTop: 10,
                  borderColor: "transparent",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderTopColor: "#D9D9D9"
                }}
              >
                <Typography
                  variant="h6"
                  style={{ color: "green", margin: 0, padding: 0 }}
                >
                  You may also like
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    CardItem: state.CardItem
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
