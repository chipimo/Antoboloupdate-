import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {
  Dropdown,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Message,
  Label,
  Dimmer,
  Loader
} from "semantic-ui-react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";

import firebase from "firebase/app";
import FileUploader from "react-firebase-file-uploader";
import firebaseConfig from "../firebase";
import LinearProgress from "@material-ui/core/LinearProgress";

import "firebase/storage";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const options = [
  { key: "a", text: "Assignment", value: "assignments" },
  { key: "p_p", text: "Past paper", value: "past_papers" },
  { key: "b", text: "Book", value: "books" }
];

const NewFile = props => {
  const [pdfName, setpdfName] = React.useState("");
  const [fileName, setfileName] = React.useState("");
  const [PdfType, setPdfType] = React.useState("");
  const [PdfPrice, setPdfPrice] = React.useState("");
  const [PdfAbout, setPdfAbout] = React.useState("");

  const [pdfURL, setpdfURL] = React.useState("");
  const [isUploading, setisUploading] = React.useState(false);
  const [isPDFUploading, setisPDFUploading] = React.useState(false);
  const [done, setdone] = React.useState(false);
  const [progress, setprogress] = React.useState(0);

  // React.useEffect(() => {
  //   console.log(props.user.email);
  // }, []);

  const handleChange = (event, value) => {
    if (event === "pdf_name") {
      setpdfName(value.value);
    } else if (event === "pdf_type") {
      setPdfType(value);
    } else if (event === "pdf_price") {
      setPdfPrice(value.value);
    } else if (event === "pdf_about") {
      setPdfAbout(value.value);
    }
  };

  const handleUploadStart = () => {
    setisUploading(true);
    setisPDFUploading(true);
    setprogress(0);
  };

  const handleProgress = progress => setprogress(progress);

  const handleCancel = () => {
    setisUploading(false);
  };

  const handleUploadError = event => {
    // setValue(event.target.value);
    console.log("error");
  };

  const handleSetproduct = values => {
    // console.log(values);
    props.SocketConnId.sockectId.emit("PRODUCT_ENTRY", values);
    props.SocketConnId.sockectId.on("PRODUCTS_RESULTS", data => {
      setdone(true);
    });
  };

  const handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref("pdf_files")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        setpdfURL(url);
        setfileName(filename);
        setisPDFUploading(false);

        handleSetproduct({
          userId: props.user.email,
          pdf_name: pdfName,
          pdf_id: filename,
          pdf_type: PdfType,
          pdfURL: url,
          pdf_price: PdfPrice,
          pdf_about: PdfAbout
        });
      });
  };

  return (
    <div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        open={isUploading}
        // {...other}
      >
        {isPDFUploading ? (
          <div>
            <DialogTitle id="confirmation-dialog-title">
              Uploading PDF file
            </DialogTitle>

            <DialogContent>
              <div style={{ width: 300 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  color="secondary"
                />
              </div>
            </DialogContent>
          </div>
        ) : done ? (
          <div>all set</div>
        ) : (
          <div>
            <DialogTitle id="confirmation-dialog-title">
              PDF Uploaded successfully, please wait we set up a few things...
            </DialogTitle>
            <DialogContent>
              <LinearProgress variant="query" color="secondary" />
            </DialogContent>
          </div>
        )}
        <DialogActions>
          <Button
            disabled={!done}
            autoFocus
            onClick={handleCancel}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>

      <Paper
        style={{
          width: "100%",
          padding: 50,
          backgroundColor: "#E2E2E2",
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 150
        }}
      >
        <Form warning>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="File name"
              placeholder="File name"
            >
              <Input
                icon="file pdf outline"
                iconPosition="left"
                placeholder="File name"
                onChange={(text, value) => handleChange("pdf_name", value)}
              />
            </Form.Field>

            <Form.Field
            // control={Select}
            // label="File Type"
            // options={options}
            // placeholder="File Type"
            >
              <label>File type</label>
              <Dropdown
                placeholder="Select Friend"
                fluid
                selection
                options={options}
                onChange={(text, ev) => {
                  handleChange("pdf_type", ev.value);
                }}
              />
            </Form.Field>
          </Form.Group>

          <Form.Field
            inline
            // control={Input}
            // placeholder="Price (Leave blanck if free)"
          >
            <Input
              labelPosition="right"
              label="Price (Leave blanck if free)"
              type="text"
              placeholder="Price (Leave blanck if free)"
              onChange={(event, value) => {
                handleChange("pdf_price", value);
              }}
            >
              <Label basic>K</Label>
              <input />
              <Label>.00</Label>
            </Input>
          </Form.Field>

          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Write more about..."
            onChange={(event, value) => {
              handleChange("pdf_about", value);
            }}
          />
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Message
            warning
            header="About this form!"
            list={[
              "You have to fill in all the required fileds to upload PDF.",
              "Its important to put a fear estmented price the file, to atract more users. It the file is free leave the input fild empty."
            ]}
          />
          <Message
            success
            header="Form Completed"
            content="You're all signed up for the newsletter"
          />
          <Form.Field inline>
            <label
              // disabled
              style={{
                backgroundColor: "steelblue",
                color: "white",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer",
                overflow: "hidden"
              }}
            >
              Select your PDF you wish to upload complete the form
              <FileUploader
                hidden
                accept="application/pdf"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("pdf_files")}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />
            </label>

            {/* <Button onClick={handleUploadStart} color="green">
              Submit
            </Button> */}
          </Form.Field>
        </Form>
      </Paper>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    NewFileModal: state.NewFileModal,
    user: state.user,
    SocketConnId: state.SocketConnId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFile);
