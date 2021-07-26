import React, { Component,useState } from "react";
import styled from "styled-components";
import '../components/Modal.css';
import logo from '../assets/logo.png';
import ReactRoundedImage from "react-rounded-image";
import userImg from '../assets/user.png'
import { FaRegHeart,FaRegBookmark } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";


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
    height: 150px;
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

const Image = styled.image`
  background-color: lavender;
  height: 10vh;
  width:10vh;
  margin:7px;
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
                  <InputContent>내용</InputContent>
                  <ButtonWrapper>
                    {this.state.LikeButtonClicked ?
                    <Button style={{border:'solid 1px #F44428'}} onClick={this.clickLike}><FaRegHeart style={{color:'#F44428',paddingRight:'7px'}}/>좋아요</Button>:
                    <Button style={{border:'solid 1px black'}} onClick={this.clickLike}><FaRegHeart style={{color:'black',paddingRight:'7px'}}/>좋아요</Button>
                    }
                    {this.state.ScrapButtonClicked ?
                    <Button style={{border:'solid 1px #F44428'}} onClick={this.clickScrap}><FaRegBookmark style={{color:'#F44428',paddingRight:'7px'}}/>스크랩</Button>:
                    <Button style={{border:'solid 1px black'}} onClick={this.clickScrap}><FaRegBookmark style={{color:'black',paddingRight:'7px'}}/>스크랩</Button>
                    }
                    <Button style={{border:'solid 1px black'}}><HiOutlineSpeakerphone style={{paddingRight:'7px'}}/>신고</Button>
                  </ButtonWrapper>
                  <ImageWrapper>
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                    <Image />
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