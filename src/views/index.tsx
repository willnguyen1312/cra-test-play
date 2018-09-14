import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as React from "react";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const newComments = {
    author: "Nam",
    comment: "Wonderful Life",
    id: 3,
};

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

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

export const comments = [comment1, comment2];

// Mock any GET request to /users
mock.onGet("/api/comments").reply(200, {
    comments
});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onPost("/api/comments").reply(200, {
    newComments
});

export default class Comments extends React.Component {

    public state = {
        comments: [],
    };

    public componentDidMount() {
        this.fetchComments();
    }

    public addComment = (comment: string) => this.setState(prevState => ({
        // tslint:disable-next-line:no-any
        comments: (prevState as any).comments.concat(comment)
    }))

    public fetchComments() {
        // tslint:disable-next-line:no-console
        console.log("object");
        axios.get("/api/comments")
            // tslint:disable-next-line:no-shadowed-variable
            .then(data => {
                // tslint:disable-next-line:no-shadowed-variable
                const { data: { comments } } = data;
                this.setState({ comments });
            })
            // tslint:disable-next-line:no-console
            .catch(console.error);
    }

    public render() {
        // tslint:disable-next-line:no-shadowed-variable
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