import React from "react";
import axios from "axios";

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      missingChildName: "",
      Description: ""
    };
  }
  onchange = e => {
    this.setState({
      file: e.target.file,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  submit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("missingChildName", this.state.missingChildName);
    formData.append("Description", this.state.Description);

    axios
      .post(
        "https://missingchild.herokuapp.com/create/missingChildren/details",
        formData
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}
      >
        <form className="form-group">
          <input
            type="file"
            name="file"
            className="form-control-file"
            style={{ margin: "15px", width: "300px" }}
            onChange={this.onchange}
          />
          <input
            type="text"
            name="missingChildName"
            placeholder="Name"
            className="form-control"
            style={{ margin: "15px", width: "300px" }}
            onChange={this.onchange}
          />
          <div>
            <textarea
              type="text"
              name="Description"
              placeholder="write here"
              className="form-control z-depth-1"
              style={{ margin: "15px", width: "300px" }}
              onChange={this.onchange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-danger"
              style={{ margin: "15px", width: "100px" }}
              onClick={this.submit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Description;
