import * as React from "react";
import styled from "styled-components";
import CommentList from "./components/CommentList";

const AppWrapper = styled.div`
  display: flex;
`;

const comment1 = {
  author: "The Notester",
  comment: "I do love writing tests",
  id: 1,
};
const comment2 = {
  author: "Comment Hater",
  comment: "Nothing is better than a good comment app",
  id: 2,
};
const props = {
  comments: [comment1, comment2]
};
export default class App extends React.Component {
  public render() {
    return <AppWrapper>
      <CommentList {...props} />
    </AppWrapper>;
  }
}