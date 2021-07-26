import React, { Component } from "react";
import styled from "styled-components";
import '../components/Modal.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import { fontSize } from "@material-ui/system";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';


const Input = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.08), 0px 4px 16px rgba(51, 51, 51, 0.08);
    width:35vw;
    height:5vh;
    border: none;
    margin-bottom: 23px;
`
const InputConsol = styled.input`
    border: none;
    outline: none;
    width: 35vw;
    height: 5vh;
` 

const InputContent = styled.input`
    border: gray;
    outline: none;
    background-color: #F4F4F4;
    width: 35vw;
    height: 150px;
    margin-top:16px;
` 
const Button = styled.button`
    background-color: white;
    border: none;
    width: 24px;
    height: 24px
`


class WriteReviewPage extends Component {

    render() {
      const { open, close } = this.props;
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
                  <Input>
                    <Button><img src={search} alt="search" height="15px"/></Button>
                    <InputConsol placeholder="맛집 이름을 입력해 주세요"/>
                  </Input>
                  <Input>
                    <Button><img src={search} alt="search" height="15px"/></Button>
                    <InputConsol placeholder="메뉴를 입력해 주세요"/>
                  </Input>
                  <text style={{color:"rgb(17,17,17,0.48)", fontSize:"18px",marginTop:"11px"}}>선택하세요</text>
                  <Rating name="rating" defaultValue={2.5} precision="0.5" size="large" />
                  <hr size="10px" width="600vw" color="#D7D7D7" />
                  <text style={{fontSize:"20px",marginTop:"20px"}}>어떤 점이 좋았나요?</text>
                  <InputContent placeholder="최소 10자 이상 입력해주세요."></InputContent>
                </main>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default WriteReviewPage;