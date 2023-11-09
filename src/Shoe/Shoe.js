import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./data";

export default class Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    // cart: shoeArr,
    cart: [],
  };

  handViewDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };

  handleRemove = (idShoe) => {
    let newCart = this.state.cart.filter((item) => {
      return item.id !== idShoe;
    });
    this.setState({ cart: newCart });
  };

  handelCart = (shoe) => {
    // console.log("shoe: ", shoe);
    // const newCart = [...this.state.cart, shoe];

    const newCart = this.state.cart;

    // kiểm tra trong cart đã tồn tại sản phẩm hay chưa
    const index = newCart.findIndex((value) => value.id === shoe.id);

    if (index !== -1) {
      //sản phẩm đãcó trong cart
      newCart[index].cartQuantity += 1;
    } else {
      //sản phẩm chưa có trong cart
      newCart.push({ ...shoe, cartQuantity: 1 });
    }

    // newCart.push({ ...shoe, cartQuantity: 1 });

    this.setState({ cart: newCart });
  };

  handelCartQuantity = (shoeId, quantity) => {
    console.log("👉 - Ex_Shoe - quantity:", quantity);
    console.log("👉 - Ex_Shoe - shoeId:", shoeId);
    const newCart = [...this.state.cart];
    const index = newCart.findIndex((value) => value.id === shoeId);

    if (index !== -1) {
      newCart[index].cartQuantity = newCart[index].cartQuantity + quantity || 1;
    }

    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <CartShoe
              handleRemove={this.handleRemove}
              handelCartQuantity={this.handelCartQuantity}
              cart={this.state.cart}
            />
          </div>
          <div className="col-6">
            <ListShoe
              handViewDetail={this.handViewDetail}
              list={this.state.shoeArr}
              handelCart={this.handelCart}
            />
          </div>
          <div className="col-12">
            <DetailShoe detail={this.state.detail} />
          </div>
        </div>
      </div>
    );
  }
}
