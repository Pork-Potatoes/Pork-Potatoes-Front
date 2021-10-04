import React, { Component,useState } from "react";
import styled from "styled-components";
import '../components/Modals/Modal.css';
import logo from '../assets/logo.png';
import ReactRoundedImage from "react-rounded-image";
import userImg from '../assets/user.png'
import { FaRegHeart,FaRegBookmark } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import axios from 'axios';
import https from "https";
import { create } from "domain";


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

const InputContent = styled.div`
    text-align: left;
    font-size: 13px;
    padding: 10px;
    border: gray;
    outline: none;
    background-color: #F4F4F4;
    width: 35vw;
    min-height: 140px;
    margin-top:16px;
` 

const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
`

const Button = styled.button`
  height: 4vh;
  padding:10px;
  margin:5px;
  font-size: 11px;
  text-align: center;
  border-radius: 23px;
  background-color: white;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    display:none;
  }
`

class ReviewPage extends Component {
  state={
    LikeButtonClicked:false,
    ScrapButtonClicked:false,
  };

  clickLike = () =>{
    this.state.LikeButtonClicked?
    this.setState({
      LikeButtonClicked:false
    })
    :
    this.setState({
      LikeButtonClicked:true
    });
  }

  clickScrap = () =>{
    this.state.ScrapButtonClicked?
    this.setState({
      ScrapButtonClicked:false
    })
    :
    this.setState({
      ScrapButtonClicked:true
    });
  }


  render() {
    const { open, close ,reviewNum,restaurantName,menuName,content,score,createdDate,image,likedCnt} = this.props;
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
                      <text>{createdDate}</text>
                    </Profile2>
                  </Profile>
                  <InputContent>
                    <h1>{restaurantName}</h1>
                    <h3>{menuName}</h3>
                    <h4>{score}점</h4>
                    <text>{content}</text>
                  </InputContent>
                  <ButtonWrapper>
                    {this.state.LikeButtonClicked ?
                    <Button style={{border:'solid 1px #F44428'}} onClick={this.clickLike}><FaRegHeart style={{color:'#F44428',paddingRight:'7px'}}/>좋아요 ({likedCnt})</Button>:
                    <Button style={{border:'solid 1px black'}} onClick={this.clickLike}><FaRegHeart style={{color:'black',paddingRight:'7px'}}/>좋아요 ({likedCnt})</Button>
                    }
                    {this.state.ScrapButtonClicked ?
                    <Button style={{border:'solid 1px #F44428'}} onClick={this.clickScrap}><FaRegBookmark style={{color:'#F44428',paddingRight:'7px'}}/>스크랩</Button>:
                    <Button style={{border:'solid 1px black'}} onClick={this.clickScrap}><FaRegBookmark style={{color:'black',paddingRight:'7px'}}/>스크랩</Button>
                    }
                    <Button style={{border:'solid 1px black'}}><HiOutlineSpeakerphone style={{paddingRight:'7px', height:'15px'}}/>신고</Button>
                  </ButtonWrapper>
                  <ImageWrapper>
                    <img src={image} style={{width:'15vh'}}/>
                  </ImageWrapper>                 
                </main>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default ReviewPage;