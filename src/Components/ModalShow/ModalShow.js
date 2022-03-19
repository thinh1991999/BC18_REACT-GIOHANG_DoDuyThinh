import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class ModalShow extends Component {
  state = {
    showModal: false,
  };

  renderSanPham = () => {
    return this.props.gioHang.map((sp) => {
      return (
        <tr key={sp.id}>
          <td>{sp.id}</td>
          <td>
            <img
              style={{
                width: 50,
                height: 50,
              }}
              src={sp.thumbnail_url}
            />
          </td>
          <td>{sp.name}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleItem(sp.id, "LOWER")}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className="btn btn-success"
              onClick={() => this.props.handleItem(sp.id, "HIGHER")}
            >
              +
            </button>
          </td>
          <td>{sp.price.toLocaleString()}</td>
          <td>{(sp.soLuong * sp.price).toLocaleString()}</td>
        </tr>
      );
    });
  };

  render() {
    let count = 0;
    this.props.gioHang.forEach((item) => {
      const { soLuong } = item;
      count += soLuong;
    });
    console.log(this.props.gioHang);
    return (
      <>
        <Button
          type="primary"
          onClick={() => this.setState({ showModal: true })}
        >
          Giỏ hàng {count}
        </Button>
        <Modal
          title="Giỏ hàng"
          visible={this.state.showModal}
          onOk={() => this.setState({ showModal: false })}
          onCancel={() => this.setState({ showModal: false })}
          width={1200}
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩn</th>
                  <th>Hình</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderSanPham()}</tbody>
            </table>
          </div>
        </Modal>
      </>
    );
  }
}
