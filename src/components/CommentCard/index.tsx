import * as React from "react";

interface ICommentCardProps {
  comment: string;
  author: string;
}

const CommentCard = ({ comment, author }: ICommentCardProps) => (
  <div style={styles.card as any}>
    <p>{comment}</p>
    <p style={styles.authorTag as any}>- {author}</p>
  </div>
);

const styles = {
  authorTag: {
    bottom: "0",
    position: "absolute",
    right: "12px"
  },
  card: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #767676",
    borderRadius: "8px",
    fontFamily: "Palatino",
    fontStyle: "italic",
    height: "80px",
    margin: "24px",
    padding: "2px 24px",
    position: "relative"
  }
};

export default CommentCard;
