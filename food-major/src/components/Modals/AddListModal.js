import React, { Component } from "react";
import styled from "styled-components";

class AddListModal extends Component {

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? (  
          <div className="modal">
            <section>
              <header>
                <button className="close" onClick={close} />
              </header>
              <main onClick={isOpen}>
                <text style={{fontSize:"37px"}}>수업목록에 추가</text>
              </main>
            </section>
          </div>
        ) : null}
      </>
    );
  }
}

export default AddListModal;