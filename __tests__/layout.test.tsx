import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RootLayout from "../app/layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

vi.mock("../app/globals.css", () => ({}));

describe("RootLayout", () => {
  it("renders children", () => {
    render(<RootLayout><p>Hello World, Hare Krsna!!</p></RootLayout>);
    expect(screen.getByText("Hello World, Hare Krsna!!")).toBeInTheDocument();
  });

  it("sets lang attribute to en on html element", () => {
    render(<RootLayout><div /></RootLayout>);
    expect(document.documentElement.lang).toBe("en");
  });

  it("applies font CSS variables to body", () => {
    render(<RootLayout><div /></RootLayout>);
    const body = document.body;
    expect(body.className).toContain("--font-geist-sans");
    expect(body.className).toContain("--font-geist-mono");
  });

  it("applies antialiased class to body", () => {
    render(<RootLayout><div /></RootLayout>);
    expect(document.body.className).toContain("antialiased");
  });
});
