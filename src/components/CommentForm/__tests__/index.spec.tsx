import * as React from "react";
import { fireEvent, render } from "react-testing-library";
import CommentForm from "..";

describe("Comment Form", () => {
    it("it has a disabled button until both comment textbox and \"Your Name\" field have a value", () => {

        // Arrange
        const comment = "Never put off until tomorrow what can be done today.";
        const author = "Sensei Wu";

        // Act
        const { getByLabelText, getByPlaceholderText, getByText } = render(<CommentForm />);

        // Assert
        const submitButton = getByText("Add Comment");

        expect((submitButton as HTMLButtonElement).disabled).toEqual(true);

        const commentTextfieldNode = getByPlaceholderText("Write something...");

        fireEvent.change(commentTextfieldNode, { target: { value: comment } });

        expect((submitButton as HTMLButtonElement).disabled).toEqual(true);

        const nameFieldNode = getByLabelText("Your Name");

        fireEvent.change(nameFieldNode, { target: { value: author } });

        expect((submitButton as HTMLButtonElement).disabled).toEqual(false);
    });
});