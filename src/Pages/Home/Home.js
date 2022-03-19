import React, { Component } from "react";
import { DetailItem, Item, ItemList, ModalShow } from "../../Components";
import { dataProps } from "../../data";

export default class Home extends Component {
  state = {
    dsdt: dataProps,
    sanPhamChiTiet: dataProps[0],
    gioHang: JSON.parse(localStorage.getItem("carts")) || [],
  };

  handleDetailItem = (id) => {
    const newItem = this.state.dsdt.filter((item) => item.id === id)[0];
    this.setState({
      sanPhamChiTiet: newItem,
    });
  };

  handleAddItem = (idItem) => {
    const newItem = this.state.dsdt.filter((item) => item.id === idItem)[0];
    const valid = this.state.gioHang.filter((item) => item.id === idItem)[0];
    const newGioHang = [...this.state.gioHang];
    if (!valid) {
      this.setState({
        gioHang: [
          ...this.state.gioHang,
          {
            ...newItem,
            soLuong: 1,
          },
        ],
      });
    } else {
      const index = newGioHang.findIndex((item) => item.id === idItem);

      newGioHang[index].soLuong++;
      this.setState({
        gioHang: newGioHang,
      });
    }
    localStorage.setItem("carts", JSON.stringify(this.state.gioHang));
  };

  handleItem = (id, method) => {
    const newGioHang = [...this.state.gioHang];
    const index = newGioHang.findIndex((item) => item.id === id);
    if (method === "LOWER") {
      if (newGioHang[index].soLuong === 1) {
        newGioHang.splice(index, 1);
      } else {
        newGioHang[index].soLuong--;
      }
    } else {
      newGioHang[index].soLuong++;
    }
    this.setState({
      gioHang: newGioHang,
    });
    localStorage.setItem("carts", JSON.stringify(newGioHang));
  };

  render() {
    const newData = [];
    this.state.dsdt.forEach((item) => {
      const { id } = item;
      if (newData.filter((item) => item.id === id).length === 0 && item) {
        newData.push(item);
      }
    });
    return (
      <div className="container p-5">
        <ModalShow gioHang={this.state.gioHang} handleItem={this.handleItem} />
        <ItemList
          handleDetailItem={this.handleDetailItem}
          handleAddItem={this.handleAddItem}
          data={newData}
        />
        <DetailItem data={this.state.sanPhamChiTiet} />
      </div>
    );
  }
}
