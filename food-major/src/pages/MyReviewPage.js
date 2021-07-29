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
  grid-template-rows: 1fr 1fr;
`

const agent = new https.Agent({
  rejectUnauthorized: false
});

class MyReviewPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1
    }
  }
  getReviews = async () => {
    try{
      const {data: reviews} = await axios.get("http://ec2-3-37-228-150.ap-northeast-2.compute.amazonaws.com:8080/api/reviews/recent", {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getReviews error");
    }
  }
  componentDidMount() {
    this.getReviews();
  }

  render() {
    const reviews = this.state.reviews;
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
    console.log(Object.keys(reviews));
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px", paddingBottom:"30px"}}>내가 쓴 리뷰</h1>
          <Grid>
            {Object.values(pagedReviews).map( (review) =>
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
        </Container>
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