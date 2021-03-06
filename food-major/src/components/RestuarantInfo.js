import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import Scrap from './Scrap';

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

const RestaurantInfo = ({restaurantNum, restaurantName, address, phoneNum, businessHour, snsAccount, notice, avgScore}) => {
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
          <Scrap />
        </Title>
        <Info>
          <Detail>
            ?????? : {address}<br/>
            ???????????? : {phoneNum}<br/>
            ???????????? : {snsAccount}<br/>
            ???????????? : {businessHour}<br/>
          </Detail>
          <Map id='restMap'>???????????????</Map>
        </Info>
      </RestInfo>
  );
};

export default RestaurantInfo;