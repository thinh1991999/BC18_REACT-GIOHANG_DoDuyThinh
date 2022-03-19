import React, { Component } from "react";
import Item from "../Item/Item";

export default class ItemList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((dt, index) => {
          if (index < 3) {
            return (
              <Item
                key={index}
                data={dt}
                index={index}
                handleDetailItem={this.props.handleDetailItem}
                handleAddItem={this.props.handleAddItem}
              />
            );
          }
        })}
      </div>
    );
  }
}
