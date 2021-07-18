import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Review from "./components/Review";
import image from "./assets/reviewImg.png";
import ImgSlide from "./components/ImgSlide";

const Banner = styled.div`
  background-color: #9FB7B9;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HOTReview = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
`

const NewReview = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
`

const Contents = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Banner>
          <ImgSlide />
        </Banner>
        <HOTReview>
          <h3 style={{marginBottom:0, marginLeft:15}}>오늘의 HOT 리뷰</h3>
          <Contents>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/>
          </Contents>
        </HOTReview>
        <NewReview>
          <h3 style={{marginBottom:0, marginLeft:15}}>최신 리뷰 모아보기</h3>
          <Contents>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          </Contents>
        </NewReview>
        
      </div>
    );
  }
}

export default App;