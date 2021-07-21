import React from "react";
import styled from "styled-components";
import Review from "../components/Review";

import image from "../assets/reviewImg.png";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

class MyReviewPage extends React.Component {
  render() {
    const tags = ['비건', '연예인 맛집']
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px"}}>내가 쓴 리뷰</h1>
          <Grid>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={tags} score='4' url="http://www.naver.com"/>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="낭만식탁" university="이대" tags={tags} score='3' url="http://www.naver.com"/>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="언니네양식당" university="이대" tags={tags} score='5' url="http://www.naver.com"/>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="연어초밥" university="이대" tags={tags} score='4' url="http://www.naver.com"/>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="돈천동" university="이대" tags={tags} score='4' url="http://www.naver.com"/>
            <Review image={image} content="여기에 리뷰 내용이 들어갑니다" restaurantName="비윰" university="이대" tags={tags} score='5' url="http://www.naver.com"/>
          </Grid>
        </Container>
      </Contents>
    );
  }
}

export default MyReviewPage;