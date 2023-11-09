import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let { cart, handleRemove, handelCartQuantity } = this.props;
    console.log("cart: ", cart);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>

                <td>
                  <img src={item.image} alt="" style={{ width: 50 }} />
                </td>

                <td>
                  <button
                    onClick={() => {
                      handelCartQuantity(item.id, 1);
                    }}
                    className="btn btn-success"
                  >
                    +
                  </button>

                  <span className="mx-3">{item.cartQuantity}</span>

                  <button
                    onClick={() => {
                      handelCartQuantity(item.id, -1);
                    }}
                    className="btn btn-danger"
                  >
                    -
                  </button>
                </td>

                <td>{item.price}</td>

                <td>
                  <button
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
