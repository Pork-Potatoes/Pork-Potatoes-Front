import React, { useState } from "react";
import _ from 'lodash'; 
import styled from "styled-components";

import List from "../components/List";
import Pagination from "../components/Pagination";

import image1 from "../assets/reviewImg.png";
import image2 from "../assets/test1.png";

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

const LikedListPage = () => {
  const getLists = () => {
    const lists = [
      { id: 0, image:`${image1}`, content:"윤지 님의 추천 맛집", url:"http://www.naver.com"},
      { id: 1, image:`${image2}`, content:"이대 맛집 TOP 30", url:"http://www.naver.com"},

    ]
    return lists;
  }

  const [lists, setLists] = useState({
    data: getLists(),
    currentPage: 1
  });

  const handlePageChange = (page) => {
    setLists({ ...lists, currentPage: page });
  };

  const paginate = (items, pageNumber) => {
    const startIndex = (pageNumber - 1) * 6;
  
    return _(items)
      .slice(startIndex)
      .take(6)
      .value();
  }

  const { data, currentPage } = lists;
  
  const pagedLists = paginate(data, currentPage);

  const { length: count } = lists.data;

  return(
    <Contents>
      <Container>
        <h1 style={{margin:"15px", paddingBottom:"30px"}}>좋아요 한 맛집 리스트</h1>
        <Grid>
          {pagedLists.map( (list) =>
            <List key={list.id}
              image={list.image}
              content={list.content}
              url={list.url} />
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

export default LikedListPage;