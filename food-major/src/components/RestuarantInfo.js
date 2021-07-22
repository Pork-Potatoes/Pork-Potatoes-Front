import React, { useState } from 'react';
import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const RestInfo = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 165px;
  margin-right: 165px;
  padding-top: 70px;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin-top: 50px;
`

const Announcement = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba( 237, 108, 84 );
  height: 43px;
  width: auto;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin-top: 50px;
`

const Detail = styled.div`
  background-color: #E5C1C8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width:60vw;
  height:40vh;
`

const Map = styled.div`
  background-color: #C3E2DD;
  display: flex;
  justify-content: center;
  align-items: center;
  width:40vw;
  height:40vh;
`

const RestaurantInfo = ({restaurantNum, restaurantName, address, phoneNum, businessHour, snsAccount, notice, avgScore, scrap}) => {
  const [scraped, setScraped] = useState(scrap);
  return (
      <RestInfo>
        <Title>
          <h2>{restaurantName} {avgScore}</h2>
          {scraped ? <BsBookmark onClick={()=>setScraped(!scraped)} color="#d57358" size="30"/> : <BsFillBookmarkFill onClick={()=>setScraped(!scraped)} color="#d57358" size="30"/>}
        </Title>
        <Announcement>
          <p style={{paddingLeft:'30px'}}>{notice}</p>
        </Announcement>
        <Info>
          <Detail>
          <ul>
            <li>주소 {address}</li>
            <li>전화번호 {phoneNum}</li>
            <li>웹사이트 {snsAccount}</li>
            <li>영업시간 {businessHour}</li>
          </ul>
          </Detail>
          <Map>지도 입니다</Map>
        </Info>
      </RestInfo>
  );
};

export default RestaurantInfo
;