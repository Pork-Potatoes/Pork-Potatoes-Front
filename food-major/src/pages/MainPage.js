import React from "react";
import axios from "axios";
import https from "https"
import styled from "styled-components";
import Review from "../components/Review";
import image from "../assets/reviewImg.png";
import ImgSlide from "../components/ImgSlide";

const Banner = styled.div`
  background-color: #9FB7B9;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

// const HOTReview = styled.div`
//   height: 280px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-left: 150px;
// `

// const NewReview = styled.div`
//   height: 560px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-left: 150px;
// `

// const Contents = styled.div`
//   display:flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `

const agent = new https.Agent({
  rejectUnauthorized: false
});

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hotReviews: [],
      reviews: []
    }
  }
  getHotReviews = async () => {
    try{
      const {data: reviews} = await axios.get("http://localhost:8080/api/reviews/today", {httpsAgent: agent});
      this.setState({ hotReviews: reviews });
    }
    catch(e){
      console.log("getHotReviews error");
    }
  }
  getReviews = async () => {
    try{
      const {data: reviews} = await axios.get("http://localhost:8080/api/reviews/recent", {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getReviews error");
    }
  }

  componentDidMount() {
    this.getHotReviews();
    this.getReviews();
  }
  render() {
    const { reviews, hotReviews } = this.state;
      return(
      <Container>
        <Banner>
          <ImgSlide />
        </Banner>
        <Wrapper>
          <h1 style={{margin:"15px", marginTop:"30px"}}>오늘의 HOT 리뷰</h1>
          <Grid>
            {Object.values(hotReviews).map( (review) =>
              <Review key={review.id}
                image={review.filePath}
                content={review.content}
                restaurantName={review.restaurant.restaurantName}
                menuName={review.menuName}
                foodTag={review.foodTag}
                moodTag={review.moodTag}
                score={review.score}
                url={review.url} />
            )}
          </Grid>
        </Wrapper>
        <Wrapper>
          <h1 style={{margin:"15px", marginTop:"30px"}}>최신 리뷰 모아보기</h1>
          <Grid>
            {Object.values(reviews).map( (review) =>
              <Review key={review.id}
                image={review.filePath}
                content={review.content}
                restaurantName={review.restaurant.restaurantName}
                menuName={review.menuName}
                foodTag={review.foodTag}
                moodTag={review.moodTag}
                score={review.score}
                url={review.url} />
            )}
          </Grid>
        </Wrapper>
        {/* <HOTReview>
          <h3 style={{marginBottom:0, marginLeft:15}}>오늘의 HOT 리뷰</h3>
          <Contents>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/>
          </Contents>
        </HOTReview>
        <NewReview>
          <h3 style={{marginBottom:0, marginLeft:15}}>최신 리뷰 모아보기</h3>
          <Contents>
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
            <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식','혼밥']} score='4'/> 
          </Contents>
        </NewReview> */}
      </Container>
    );
  }
}

export default MainPage;