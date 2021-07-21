import React, { Component } from "react";
import SignIn from "../pages/SignInPage";
import user from "../assets/user.png";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button
        onClick={this.openModal} alt="user" height="40px"
        style={{marginRight: "30px", border:"none",backgroundColor:"white"}}
        ><img src={user}></img></button>
        <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default MyButton;