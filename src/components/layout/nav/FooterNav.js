import React from "react";
import {
  Container,
  Divider,
  Icon,
  Grid,
  Header,
  Image,
  List,
  Input,
  Segment,
  Button
} from "semantic-ui-react";

function FooterNav(props) {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <div style={{ marginLeft: props.mobile ? 2 : 7 }}>
                <Header inverted as="h4" content="NEWSLETTER SIGNUP" />
                <div style={{ color: "#BABBBB" }}>
                  By subscribing to our mailing list you will always be update
                  with the latest news from us
                </div>
                <div style={{ marginTop: 10 }}>
                  <Input
                    action={{
                      color: "red",
                      labelPosition: "right",
                      icon: "at",
                      content: "Join Us"
                    }}
                    iconPosition="left"
                    placeholder="your.address@email.com"
                  />
                </div>
                <div style={{ color: "#BABBBB", marginTop: 5 }}>
                  We never spam!
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="GET IN TOUCH" />
              <div style={{ color: "#BABBBB", marginTop: 5 }}>
                Call: <b> (+260) 977-691-353</b>
              </div>
              <div style={{ color: "#BABBBB", marginTop: 3 }}>
                Email: <b> antobolo@help.com</b>
              </div>
              <div style={{ color: "#BABBBB", marginTop: 15 }}>
                Antobolo LTD
                <br />
                Street nr 100, 4536534, Lusaka, Zambia
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <div>
                <Image
                  verticalAlign="middle"
                  size="mini"
                  src="/../../../assets/images/logos/LOGO.png"
                />
                <span>
                  <b>Antobolo</b>
                </span>
                <div style={{ color: "#BABBBB" }}>
                  © 2019 All rights reserved Antobolo
                </div>
              </div>
              <List horizontal inverted divided link size="small">
                <List.Item as="a" href="#">
                  About Us
                </List.Item>
                <List.Item as="a" href="#">
                  Terms and Conditions
                </List.Item>
                <List.Item as="a" href="#">
                  Privacy Policy
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default FooterNav;
