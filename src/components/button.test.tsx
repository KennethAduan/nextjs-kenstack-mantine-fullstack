import { render, screen } from "@/test-utils";
import ButtonComponent from "./button";

describe("ButtonComponent", () => {
  it("should render", () => {
    render(<ButtonComponent />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
