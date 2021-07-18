import React from 'react';
import styled from "styled-components";
import Restaurant from "../components/Restaurant.js";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`
const Center = styled.div`
  display: flex;
  flex-direction: row;
`

function ListPage() {
  const tags = ['비건', '연예인 맛집']
  return (
    <Center>
      <Contents>
        <div style={{width:"600px", marginTop:"120px"}}>
          <h2>윤지 님이 뽑은 이대 밥약 추천 맛집 100선</h2>
          <br></br>
        </div>
        <Restaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="false"/>
        <Restaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="true"/>
        <Restaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="false"/>
        <Restaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="true"/>
        <Restaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="false"/>
      </Contents>
      <div style={{backgroundColor: "lightgray", width: "40%", height: "92vh", position: "fixed", right:"0", marginTop:"70px"}}>
        지도 들어갈 공간
      </div>
    </Center>
  );
}

export default ListPage;