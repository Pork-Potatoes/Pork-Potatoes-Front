import React, { Component } from "react";
import styled from "styled-components";
import './AddListModal.css';

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
                <text>수업목록에 추가</text>
                <text className="list">리스트 입니다</text>
              </main>
            </section>
          </div>
        ) : null}
      </>
    );
  }
}

export default AddListModal;