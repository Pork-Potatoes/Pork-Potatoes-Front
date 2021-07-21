import React, { useState } from "react";
import _ from 'lodash'; 
import styled from "styled-components";

import List from "../components/List";
import Pagination from "../components/Pagination";

import image1 from "../assets/reviewImg.png";
import image2 from "../assets/test1.png";
import image3 from "../assets/test2.png";
import image4 from "../assets/test3.png";
import image5 from "../assets/test4.png";

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

const MyListPage = () => {
  const getLists = () => {
    const lists = [
      { id: 0, image:`${image1}`, content:"집앞 가성비 맛집", url:"http://www.naver.com"},
      { id: 1, image:`${image2}`, content:"안주 맛집", url:"http://www.naver.com"},
      { id: 2, image:`${image3}`, content:"내 최애", url:"http://www.naver.com"},
      { id: 3, image:`${image4}`, content:"밀크티 맛집", url:"http://www.naver.com"},
      { id: 4, image:`${image5}`, content:"혼밥하기 좋음", url:"http://www.naver.com"},
      { id: 5, image:`${image5}`, content:"혼밥하기 좋음", url:"http://www.naver.com"},
      { id: 6, image:`${image5}`, content:"혼밥하기 좋음", url:"http://www.naver.com"},
      { id: 7, image:`${image5}`, content:"혼밥하기 좋음", url:"http://www.naver.com"},
      { id: 8, image:`${image5}`, content:"혼밥하기 좋음", url:"http://www.naver.com"}
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
        <h1 style={{margin:"15px", paddingBottom:"30px"}}>내가 만든 맛집 리스트</h1>
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

export default MyListPage;