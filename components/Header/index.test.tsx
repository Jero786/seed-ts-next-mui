import { screen, render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("should true", async () => {
    render(<Header />);

    expect(await screen.findByText(/HELLO WORLD/)).toBeInTheDocument();
  });
});
