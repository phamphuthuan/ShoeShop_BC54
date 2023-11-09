import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handViewDetail, handelCart } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />

        <button onClick={() => handelCart(data)} className="btn btn-primary">
          Add
        </button>
        <button
          onClick={() => {
            handViewDetail(data);
          }}
          className="btn btn-info"
        >
          View
        </button>
      </div>
    );
  }
}
