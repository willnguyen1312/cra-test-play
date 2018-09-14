import axios from "axios";
import * as React from "react";
import { cleanup, fireEvent, render, wait } from "react-testing-library";
import Comments from "..";

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
const comments = [comment1, comment2];

describe("Comments Screen", () => {
    const newComment = {
        author: "Spongebob",
        comment: "Brave new world of testing",
        id: 3,
    };

    afterEach(cleanup);

    beforeEach(() => {
        axios.get = jest.fn(() => Promise.resolve(comments));
        axios.post = jest.fn(() => Promise.resolve(newComment));
      });

    it("should fetches comments and renders them to the page", async () => {
        const { getByText } = render(<Comments />);

        await wait(() => getByText(comment1.comment));

        const firstCommentNode = getByText(comment1.comment);
        const firstAuthorTagNode = getByText(`- ${comment1.author}`);
        const secondCommentNode = getByText(comment2.comment);
        const secondAuthorTagNode = getByText(`- ${comment2.author}`);

        expect(firstCommentNode).toBeDefined();
        expect(firstAuthorTagNode).toBeDefined();
        expect(secondCommentNode).toBeDefined();
        expect(secondAuthorTagNode).toBeDefined();
    });

    it("should creates a new comment, renders it and clears out form upon submission", async () => {
        const { getByLabelText, getByPlaceholderText, getByText } = render(<Comments />);
    
        await wait(() => getByText(comment1.comment));
    
        const submitButton = getByText("Add Comment");
        const commentTextfieldNode = getByPlaceholderText("Write something...");
        const nameFieldNode = getByLabelText("Your Name");
    
        fireEvent.change(commentTextfieldNode, { target: { value: newComment.comment } });
        fireEvent.change(nameFieldNode, { target: { value: newComment.author } });
        fireEvent.click(submitButton);
    
        await wait(() => getByText(`- ${newComment.author}`));
    
        expect((commentTextfieldNode as HTMLInputElement).value).toEqual("");
        expect((commentTextfieldNode as HTMLInputElement).value).toEqual("");
    });
    
});