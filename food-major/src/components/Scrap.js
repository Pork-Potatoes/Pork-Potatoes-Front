import React, { useEffect, useState, Component } from 'react';
import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import AddList from './Modals/AddListModal'

class Scrap extends Component {
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
        onClick={this.openModal}
        style={{backgroundColor: 'white', border: "none", fontSize: "1.5rem"}}
        ><BsBookmark /></button>
        <AddList isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default Scrap;