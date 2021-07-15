import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Review from "./components/Review";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Review/>
      </div>
    );
  }
}

export default App;