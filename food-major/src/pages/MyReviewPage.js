import React from "react";
import axios from "axios";
import _ from 'lodash';
import styled from "styled-components";
import https from "https"

import Review from "../components/Review";
import Pagination from "../components/Pagination";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2400px;
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
  grid-template-rows: 1fr 1fr;
`

const agent = new https.Agent({
  rejectUnauthorized: false
});

class MyReviewPage extends React.Component {
  state = {
    reviews: [],
    currentPage: 1,
    isLoading: true
  }
  
  getReviews = async () => {
    try{
      const {data: reviews} = await axios.get("https://matzipmajor.com/api/users/1/reviews?sort=-created-date", {httpsAgent: agent});
      this.setState({ reviews, isLoading: false });
    }
    catch(e){
      console.log("getReviews error");
    }
  }
  componentDidMount() {
    this.getReviews();
  }

  render() {
    const {isLoading, reviews} = this.state;
    const handlePageChange = (page) => {
      this.setState({currentPage: page});
    };
    const paginate = (reviews, pageNumber) => {
      const startIndex = (pageNumber-1) * 6;
      return _(reviews)
        .slice(startIndex)
        .take(6)
        .value();
    }
    const pagedReviews = paginate(reviews, this.state.currentPage);
    const {length: count} = reviews;
    return(
      <Contents>
        {isLoading
        ? (
          <div style={{width:"100%", height: "100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <span style={{fontWeight:"500"}}>Loading...</span>
          </div>
        )
        : (
          <Container>
            <h1 style={{margin:"15px", paddingBottom:"30px"}}>내가 쓴 리뷰</h1>
            <Grid>
              {Object.values(pagedReviews).map((review) =>
                <Review
                  key={review.id}
                  reviewNum={review.reviewNum}
                  image={review.filePath}
                  content={review.content}
                  restaurantName={review.restaurant.restaurantName}
                  menuName={review.menuName}
                  tagFood={review.tagFood}
                  tagMood={review.tagMood}
                  score={review.score}
                  url={review.url}
                />
              )}
            </Grid>
          </Container>
        )}
        <Pagination
          itemsCount={count}
          currentPage={this.state.currentPage}
          onPageChange={handlePageChange}
        />
      </Contents>
    );
  }
}

export default MyReviewPage;
