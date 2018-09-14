import * as React from "react";

export default class CommentForm extends React.Component {
  public state = {
    author: "",
    comment: "",
  };

  public handleOnChange = ({ target: { name, value } }: { target: { name: string, value: string } }) =>
    this.setState(_prevState => ({
      [name]: value
    }))

  public hasInvalidFields = () => {
    const { comment, author } = this.state;

    if (comment.trim() !== "" && author.trim() !== "") {
      return false;
    }

    return true;
  }

  public render() {
    const { comment, author } = this.state;
    const isDisabled = this.hasInvalidFields() ? true : false;

    return (
      <form style={styles.form}>
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