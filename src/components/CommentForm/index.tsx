import axios from "axios";
import * as React from "react";

// tslint:disable-next-line:no-any
export default class CommentForm extends React.Component<any, any> {
  
  public initialState = {
    author: "",
    comment: "",
  };
  
  public state = this.initialState;

  public handleOnChange = ({ target: { name, value } }: { target: { name: string, value: string } }) =>
    // tslint:disable-next-line:no-any
    this.setState((_prevState: any) => ({
      [name]: value
    }))

  public hasInvalidFields = () => {
    const { comment, author } = this.state;

    if (comment.trim() !== "" && author.trim() !== "") {
      return false;
    }

    return true;
  }

  // tslint:disable-next-line:no-any
  public handleOnSubmit = (event: any) => {
    event.preventDefault();
    const newComment = this.state;

    this.createComment(newComment);
  }

  // tslint:disable-next-line:no-any
  public createComment = (newComment: any) => {
    axios.post("/api/comments", { newComment })
      .then(data => {
        const {data: {newComments}} = data;
        this.props.addComment(newComments);
        this.clearForm();
      })
      // tslint:disable-next-line:no-console
      .catch(console.error);
  }

  public clearForm = () =>
    // tslint:disable-next-line:no-any
    this.setState((_prevState: any) => (this.initialState))

  public render() {
    const { comment, author } = this.state;
    const isDisabled = this.hasInvalidFields() ? true : false;

    return (
      <form onSubmit={this.handleOnSubmit} style={styles.form}>
        <div>
          <textarea
            style={styles.commentBox}
            onChange={this.handleOnChange}
            placeholder="Write something..."
            name="comment"
            value={comment}
          />
        </div>
        <div>
          <label htmlFor="author" aria-labelledby="author">
            Your Name
          </label>
          <input
            // tslint:disable-next-line:no-any
            style={styles.inputField as any}
            onChange={this.handleOnChange}
            id="author"
            type="text"
            name="author"
            value={author}
          />
        </div>
        <button style={styles.button} disabled={isDisabled}>Add Comment</button>
      </form>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#767676",
    borderRadius: "8px",
    color: "#ffffff",
    marginTop: "12px",
    padding: "6px",
    width: "500px",
  },
  commentBox: {
    height: "80px",
    marginBottom: "12px",
    width: "494px",
  },
  form: {
    margin: "auto",
    padding: "0px",
    width: "500px"
  },
  inputField: {
    float: "right",
    width: "360px",
  },
};