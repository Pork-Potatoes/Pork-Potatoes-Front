import React, { Component } from "react";
import styled from "styled-components";
import '../components/Modals/Modal.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import { fontSize } from "@material-ui/system";
import Rating from '@material-ui/lab/Rating';
import ReactStars from "react-rating-stars-component";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

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
    height: 30vh;
    margin-top:16px;
` 
const Button = styled.button`
    background-color: white;
    border: none;
    width: 24px;
    height: 24px;
`

const UploadButton = styled.button`
  width:35vw;
  height:8vh;
  margin-top: 10px;
  background-color: white;
  border: dashed 1px #999999;
  text-align: center;
`

const RegisterButton = styled.button`
  width:25vw;
  height:8vh;
  margin-top: 10px;
  background-color: white;
  border:solid 1px #BABABA;
  border-radius: 32px;
  text-align: center;
  color:#F06D58;
`



class WriteReviewPage extends Component {
  state={
    inputRestaurant:'',
    inputMenu:'',
    inputContent:'',
    curTime:new Date().toLocaleString(),
    classes:'',
    score:5
  };
  inputRestaurantChange=(event)=>{
    let keyword=event.target.value;
    this.setState({inputRestaurant:keyword})
  }
  inputReviewChange=(event)=>{
    let keyword=event.target.value;
    this.setState({inputReview:keyword})
  }
  inputContentChange=(event)=>{
    let keyword=event.target.value;
    this.setState({inputContent:keyword})
  }

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  addReview = async (event) => {
    try{
      const response = await axios.post("https://www.matzipmajor.com/api/reviews",
      {
        restaurant:this.state.inputRestaurant,
        user:7,
        content:this.state.inputContent,
        score:this.state.score,
        anonymousFlag:true,
        menuName:this.state.inputMenu,
        tagFood:'분식',
        tagMood:'회식',
        createDate:this.state.curTime
      });
      response.status===200 ? alert("리뷰 업로드 완료!") : alert("다시 시도해주세요");
    }
    catch(e){
      console.log("reviewUpload error");
    }
  }

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
                    <InputConsol placeholder="맛집 이름을 입력해 주세요"
                    onChange={this.inputRestaurantChange}/>
                  </Input>
                  <Input>
                    <Button><img src={search} alt="search" height="15px"/></Button>
                    <InputConsol placeholder="메뉴를 입력해 주세요"
                    onChange={this.inputReviewChange}/>
                  </Input>
                  <text style={{color:"rgb(17,17,17,0.48)", fontSize:"18px",marginTop:"11px"}}>선택하세요</text>
                  <ReactStars
                    count={5}
                    onChange={this.ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <hr size="10px" width="600vw" color="#D7D7D7" />
                  <text style={{fontSize:"20px",marginTop:"20px"}}>어떤 점이 좋았나요?</text>
                  <InputContent placeholder="최소 10자 이상 입력해주세요." 
                  onChange={this.inputContentChange}/>
                  <UploadButton>사진/동영상 첨부하기</UploadButton>
                  <RegisterButton onClick={this.addReview} >리뷰 등록</RegisterButton>
                </main>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default WriteReviewPage;