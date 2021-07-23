import React, { Component } from "react";
import styled from "styled-components";
import '../components/Modal.css';


class ReviewPage extends Component {
    render() {
      const { open, close } = this.props;
      return (
        <>
          {open ? (  
            <div className="modal">
              <section>
                <header>
                  <button className="close" onClick={close}>&times;</button>
                </header>
                <main onClick={open}>
                  <h1>리뷰</h1>
                </main>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default ReviewPage;