import React from "react";
import renderer from "react-test-renderer";
import { ImageHolder } from "../ImageHolder";

describe("ImageHolder Component", () => {
  const props = {
    imgs: ["foo", "bar"]
  };

  it("should render the two images", () => {
    const tree = renderer.create(
      <ImageHolder {...props}>
        <div>Some nested content</div>
      </ImageHolder>
    );

    expect(tree).toMatchSnapshot();
  });
});
