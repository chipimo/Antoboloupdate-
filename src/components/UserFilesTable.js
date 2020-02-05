import React from "react";
import { Header, Table, Rating, Button, Icon, Label } from "semantic-ui-react";
import { connect } from "react-redux";

const UserFilesTable = props => {
  React.useEffect(() => {
    var data = { pdf_type: "assignments", id: props.user.email };

    props.SocketConnId.sockectId.emit("PRODUCTS", data);

    props.SocketConnId.sockectId.on("PRODUCTS_RESULTS", dataValues => {
      // console.log(dataValues);
      props.dispatchEvent({
        type: "LOADLIST",
        payload: dataValues
      });
    });
  }, []);

  return (
    <div>
      <Button.Group floated="left" color="green">
        <Button active>Assignments</Button>
        <Button>Past Papers</Button>
        <Button>Books</Button>
      </Button.Group>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>File type</Table.HeaderCell>
            <Table.HeaderCell>File Name</Table.HeaderCell>
            {/* <Table.HeaderCell>Ratting</Table.HeaderCell> */}
            <Table.HeaderCell>Downloads</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>About</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.ItemList.data.map(items => (
            <Table.Row key={items.key}>
              <Table.Cell>
                <Icon name="file pdf" color="red" size="big" />
              </Table.Cell>
              <Table.Cell singleLine>{items.name}</Table.Cell>
              {/* <Table.Cell>
              <Rating icon="star" defaultRating={3} maxRating={3} />
            </Table.Cell> */}
              <Table.Cell textAlign="right">
                {" "}
                <Label>
                  <Icon name="download" />
                  {items.downloads}
                  {/* <Label.Detail>Downloads</Label.Detail> */}
                </Label>
              </Table.Cell>
              <Table.Cell>
                <Label as="a" color="teal" tag>
                  K {items.price}.00
                </Label>
              </Table.Cell>
              <Table.Cell textAlign="right">
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: 2, marginRight: 5 }}>
                    <Label circular color="green" empty />
                  </div>
                  <div>Active</div>
                </div>
              </Table.Cell>
              <Table.Cell textAlign="right">{items.overview.about}</Table.Cell>
              <Table.Cell textAlign="right">
                <Button.Group basic size="small">
                  <Button icon="edit" />
                  <Button
                    icon="download"
                    onClick={() => {
                      const url = items.link;
                      window.open(url, "_blank");
                    }}
                  />
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    SocketConnId: state.SocketConnId,
    ItemList: state.ItemList
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFilesTable);
