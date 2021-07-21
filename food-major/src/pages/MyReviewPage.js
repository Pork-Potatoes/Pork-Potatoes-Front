import React, { useState } from "react";
import _ from 'lodash'; 
import styled from "styled-components";

import Review from "../components/Review";
import Pagination from "../components/Pagination";

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
  grid-template-rows: 1fr 1fr;
`

const MyReviewPage = () => {
  const getReviews = () => {
    const reviews = [
      { id: 0, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 1, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 2, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 3, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 4, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 5, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 6, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 7, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 8, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
      { id: 9, image: `${image}`, content:"내용", restaurantName:"산타비", tags:['비건', '연예인 맛집'], score:'4', url:"http://www.naver.com" },
    ]
    return reviews;
  }

  const [reviews, setReviews] = useState({
    data: getReviews(),
    currentPage: 1
  });

  const handlePageChange = (page) => {
    setReviews({ ...reviews, currentPage: page });
  };

  const paginate = (items, pageNumber) => {
    const startIndex = (pageNumber - 1) * 6;
  
    return _(items)
      .slice(startIndex)
      .take(6)
      .value();
  }

  const { data, currentPage } = reviews;
  
  const pagedReviews = paginate(data, currentPage);

  const { length: count } = reviews.data;

  return(
    <Contents>
      <Container>
        <h1 style={{margin:"15px", paddingBottom:"30px"}}>내가 쓴 리뷰</h1>
        <Grid>
          {pagedReviews.map( (review) =>
            <Review key={review.id}
              image={review.image}
              content={review.content}
              restaurantName={review.restaurantName}
              university={review.university}
              tags={review.tags}
              score={review.score}
              url={review.url} />
          )}
        </Grid>
      </Container>
      <Pagination 
      itemsCount={count} 
      currentPage={currentPage} 
      onPageChange={handlePageChange}
    />
    </Contents>
  );
}

export default MyReviewPage;