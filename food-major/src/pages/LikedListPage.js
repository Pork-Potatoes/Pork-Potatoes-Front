import React from "react";
import axios from "axios";
import _ from 'lodash';
import styled from "styled-components";
import https from "https"
import List from "../components/List";
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

class LikedListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lists: [],
      currentPage: 1
    }
  }
  getLists = async () => {
    try{
      const {data: lists} = await axios.get("https://www.matzipmajor.com/api/users/9/pins?sort=-CreatedDate", {httpsAgent: agent});
      this.setState({ lists });
    }
    catch(e){
      console.log("getLists error");
    }
  }
  componentDidMount() {
    this.getLists();
  }

  render() {
    const lists = this.state.lists;
    const handlePageChange = (page) => {
      this.setState({currentPage: page});
    };
    const paginate = (lists, pageNumber) => {
      const startIndex = (pageNumber-1) * 6;
      return _(lists)
        .slice(startIndex)
        .take(6)
        .value();
    }
    const pagedLists = paginate(lists, this.state.currentPage);
    const {length: count} = lists;
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px", paddingBottom:"30px"}}>내가 만든 맛집 리스트</h1>
          <Grid>
            {Object.values(pagedLists).map( (list) =>
              <List key={list.folder.folderNum}
                content={list.folder.title}
                url={list.url} />
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

export default LikedListPage;
