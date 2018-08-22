import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("ugly", () => {
    expect(4).toBe(4);
});

it("failing", () => {
    expect(5).toBe(5);
});
