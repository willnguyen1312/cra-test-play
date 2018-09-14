import * as React from "react";
import { render } from "react-testing-library";
import CommentCard from "..";

describe("Comment Card", () => {
    it("it renders the comment and the author", () => {

        // Arrange
        const props = {
            author: "Luke Ghenco",
            comment: "React Testing Library is great",
        };

        // Act
        const { getByText } = render(<CommentCard {...props} />);

        // Assert
        const commentNode = getByText(props.comment);
        const authorTagNode = getByText(`- ${props.author}`);

        expect(commentNode).toBeDefined();
        expect(authorTagNode).toBeDefined();
    });
});