import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { handelCart } = this.props;
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <ItemShoe
              handViewDetail={this.props.handViewDetail}
              handelCart={handelCart}
              key={index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
