import * as React from "react";
import CommentCard from "../CommentCard";

interface CommentType {
  id: number;
  comment: string;
  author: string;
}

interface CommentListProps {
  comments: CommentType[];
}

const CommentList = ({ comments }: CommentListProps) => (
  <div>
    {comments.map(comment => (
      <CommentCard key={comment.id} {...comment} />
    ))}
  </div>
);

export default CommentList;
