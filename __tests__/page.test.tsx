import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Home from "../app/page";

vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string; width: number; height: number }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} {...props} />
  ),
}));

describe("Home page", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /to get started, edit the page\.tsx file/i })
    ).toBeInTheDocument();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /deploy now/i })).toBeInTheDocument();
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    const docLink = screen.getByRole("link", { name: /documentation/i });
    expect(docLink).toBeInTheDocument();
    expect(docLink).toHaveAttribute("href", expect.stringContaining("nextjs.org/docs"));
  });

  it("renders the Templates link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /templates/i })).toBeInTheDocument();
  });

  it("renders the Learning center link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /learning/i })).toBeInTheDocument();
  });
});
