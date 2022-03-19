import React, { Component } from "react";

export default class DetailItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="my-5 row">
          <div className="col-3">
            <img
              style={{ width: "100%" }}
              src={this.props.data.thumbnail_url}
              alt=""
            />
          </div>
          <div className="col-7">
            <h4> {this.props.data.name}</h4>
            <p className="card-text text-danger">
              Price: {this.props.data.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
