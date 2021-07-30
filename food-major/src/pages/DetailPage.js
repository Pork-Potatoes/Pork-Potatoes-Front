import styled from "styled-components";
import Review from "../components/Review";
import RestuarantInfo from '../components/RestuarantInfo';
import image from "../assets/reviewImg.png";

const Contents = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const NewReview = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
`

const DetailPage = () => {
  return (
    <div>
      <RestuarantInfo 
        restaurantName="위샐러듀" 
        address="서울특별시 서대문구 이화여대길 52-31"
        phoneNum="02-363-0113" 
        businessHour="월-금: 11:00 - 21:00"
        snsAccount="https://www.instagram.com/we_saladu/"
        avgScore="4.4"
        scrap="true"/>
      <NewReview>
        <h3 style={{marginBottom:0, marginLeft:15}}>최신 리뷰</h3>
            <Contents>
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건']} score='4'/> 
            </Contents>
      </NewReview>
    </div>
  );
};

export default DetailPage;