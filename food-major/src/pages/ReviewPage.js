import React, { Component } from "react";
import styled from "styled-components";
import '../components/Modal.css';
import logo from '../assets/logo.png';
import ReactRoundedImage from "react-rounded-image";
import userImg from '../assets/user.png'


const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height:40px;
  display: flex;
  margin-left: 10%;
`

const Profile2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:flex-start;
  width: 80%;
  height:40px;
  margin-left: 40px;
`


class ReviewPage extends Component {
    render() {
      const { open, close ,restaurant,menuName,user,content,score} = this.props;
      return (
        <>
          {open ? (  
            <div className="modal">
              <section>
                <header>
                  <img src={logo} height='40px'></img>
                  <button className="close" onClick={close}></button>
                </header>
                <main onClick={open}>
                  <Profile>
                    <ReactRoundedImage 
                     image={userImg} imageWidth="10" imageHeight="10"
                    ></ReactRoundedImage>
                    <Profile2>
                      <text>익명</text>
                      <text>시간</text>
                    </Profile2>
                  </Profile>
                </main>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default ReviewPage;