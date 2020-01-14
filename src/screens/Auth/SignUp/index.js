import React from "react";
import { Button, Form, Icon, Message, Loader, Dimmer } from "semantic-ui-react";

const SignUp = () => (
  <div style={{ padding: 10, marginBottom: 15 }}>
    <Message
      attached
      header="Welcome to Antobolo!"
      content="Fill out the form below to sign-up for a new account"
    />
    <Form className="attached fluid segment">
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="First Name"
          placeholder="First Name"
          type="text"
        />
        <Form.Input
          fluid
          label="Last Name"
          placeholder="Last Name"
          type="text"
        />
      </Form.Group>
      <Form.Input label="Email" placeholder="Email" type="email" />
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Password"
          type="password"
          placeholder="Password"
        />
        <Form.Input
          fluid
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Group>
      <Form.Checkbox inline label="I agree to the terms and conditions" />
      <Button color="green">Submit</Button>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
      Already signed up?&nbsp;Login&nbsp;instead.
    </Message>
  </div>
);

export default SignUp;
