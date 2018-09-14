import * as React from "react";
import styled from "styled-components";
import Comments from "./views";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
export default class App extends React.Component {
  public render() {
    return <AppWrapper>
      <Comments />
    </AppWrapper>;
  }
}