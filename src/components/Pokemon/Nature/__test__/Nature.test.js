import React from "react";
import renderer from "react-test-renderer";
import { Nature } from "../Nature";

describe("Nature Component", () => {
  const props = {
    nature: "grass",
    background: "green"
  };

  it("should render the natures", () => {
    const tree = renderer.create(
      <Nature {...props}>
        <div>Some nested content</div>
      </Nature>
    );

    expect(tree).toMatchSnapshot();
  });
});
