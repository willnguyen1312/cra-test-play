import * as React from "react";
import styled from "styled-components";

const CommentCardWrapper = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #767676;
  border-radius: 8px;
  font-family: Palatino;
  font-style: italic;
  height: 80px;
  margin: 24px;
  padding: 2px 24px;
  position: relative;
`;

const AuthorTag = styled.p`
    bottom: 0;
    position: absolute;
    right: 12px;
`;

interface CommentCardProps {
  comment: string;
  author: string;
}

const CommentCard = ({ comment, author }: CommentCardProps) => (
  <CommentCardWrapper>
    <p>{comment}</p>
    <AuthorTag>- {author}</AuthorTag>
  </CommentCardWrapper>
);

export default CommentCard;
