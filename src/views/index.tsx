import axios from "axios";
import * as React from "react";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default class Comments extends React.Component {

    public state = {
        comments: []
    };

    public componentDidMount() {
        this.fetchComments();
    }

    public addComment = (comment: string) => this.setState(prevState => ({
        // tslint:disable-next-line:no-any
        comments: (prevState as any).comments.concat(comment)
    }))

    public fetchComments() {
        axios.get("/api/comments")
            .then(comments => this.setState({ comments }))
            // tslint:disable-next-line:no-console
            .catch(console.error);
    }

    public render() {
        const { comments } = this.state;
        return (
            <div>
                <CommentForm addComment={this.addComment} />
                {
                    comments && comments.length
                        ? <CommentList comments={comments} />
                        : null
                }
            </div>
        );
    }
}