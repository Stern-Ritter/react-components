import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./title";

describe("Component Title", () => {
  it("render component with correct level - h1", () => {
    render(<Title level={1}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("render component with correct level - h2", () => {
    render(<Title level={2}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("render component with correct level - h3", () => {
    render(<Title level={3}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("render component with correct level - h4", () => {
    render(<Title level={4}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  it("render component with correct level - h5", () => {
    render(<Title level={5}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  it("render component with correct level - h6", () => {
    render(<Title level={6}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });

  it("render component with correct text", () => {
    render(<Title level={1}>Содержание</Title>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Содержание");
  });

  it("render component with correct class", () => {
    render(<Title level={1}>Содержание</Title>);
    expect(screen.getByRole("heading")).toHaveClass("h1");
  });
});
