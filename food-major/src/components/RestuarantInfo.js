import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark, BsStar } from "react-icons/bs";

const RestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 165px;
  margin-right: 165px;
  margin-bottom: 50px;
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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  width: auto;
  margin-top: 10px;
`

const Detail = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  width:60vw;
  height:20vh;
  line-height: 3;
`

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:40vw;
  height:40vh;
`

const { kakao } = window;

const RestaurantInfo = ({restaurantNum, restaurantName, address, phoneNum, businessHour, snsAccount, notice, avgScore, scrap}) => {
  const [scraped, setScraped] = useState(scrap);
  useEffect(()=> {
    const container = document.getElementById('restMap');
      const options = {
        center: new kakao.maps.LatLng(37.56113771854151,126.9464649322563),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, function (result, status) {
            
            if (status === kakao.maps.services.Status.OK) {

                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                map.setCenter(coords);
                console.log(coords);
            }
        });

    }, []); 

  return (
      <RestInfo>
        <Title>
          <h2 style={{textAlign: 'center'}}>{restaurantName} <BsStar /> {avgScore}</h2>
          {scraped ? <BsBookmark onClick={()=>setScraped(!scraped)} color="#d57358" size="30"/> : <BsFillBookmarkFill onClick={()=>setScraped(!scraped)} color="#d57358" size="30"/>}
        </Title>
        <Info>
          <Detail>
            주소 : {address}<br/>
            전화번호 : {phoneNum}<br/>
            웹사이트 : {snsAccount}<br/>
            영업시간 : {businessHour}<br/>
          </Detail>
          <Map id='restMap'>지도입니다</Map>
        </Info>
      </RestInfo>
  );
};

export default RestaurantInfo;