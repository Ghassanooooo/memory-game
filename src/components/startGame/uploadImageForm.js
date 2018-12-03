import React, { Component, Fragment } from "react";

class UploadImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  handleReset(event) {
    this.setState({
      file: URL.revokeObjectURL(this.state.file),
      value: ""
    });
  }

  render() {
    return (
      <Fragment>
        <div class="row container">
          {this.props.imgData.map((item, i) => (
            <div key={i} class="col-md-3 col-sm-4 col-6 mb-4">
              <div class="card" style={{ width: "15rem" }}>
                {item.imgUrl && (
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.imgUrl}
                  />
                )}
                <div class="card-body">
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name={item.name}
                    onChange={this.props.onChange}
                    type="file"
                    value={this.state.value}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default UploadImageForm;
