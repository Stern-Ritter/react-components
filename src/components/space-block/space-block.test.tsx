import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SpaceBlock from "./space-block";

describe("Component SpaceBlock", () => {
  beforeEach(() => {
    render(
      <TextBlock fontFamily="Roboto" fontSize="24" color="#4169E1">
        Text
      </TextBlock>
    );
  });

  it("render component", () => {
    expect(screen.getByTestId("space")).toBeInTheDocument();
  });
});
