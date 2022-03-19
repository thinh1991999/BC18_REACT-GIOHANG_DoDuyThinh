import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { name, thumbnail_url, price } = this.props.data;
    return (
      <div className="col-3 p-1">
        <div className="card p-3">
          <img
            src={thumbnail_url}
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span>
                {price <= 3000000 ? (
                  <p className="text-primary">Giá: {price.toLocaleString()}</p>
                ) : (
                  <p className="text-danger">Giá: {price.toLocaleString()}</p>
                )}
              </span>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.handleDetailItem(this.props.data.id);
                }}
              >
                Xem chi tiết
              </button>
              <button
                onClick={() => {
                  this.props.handleAddItem(this.props.data.id);
                }}
                className="btn btn-danger"
              >
                Thêm giỏ hàng
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
