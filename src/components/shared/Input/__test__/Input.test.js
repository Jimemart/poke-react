import React from "react";
import renderer from "react-test-renderer";
import { Input } from "../Input";

describe("Input Component", () => {
    const props = {
        id: 1,
        placeholder: "foo",
        onChange: jest.fn()
    };

    it("should render the Input Component", () => {
        const tree = renderer.create(
            <Input {...props}>
                <div>Some nested content</div>
            </Input>
        );

        expect(tree).toMatchSnapshot("snapshot_1");
    });
});
