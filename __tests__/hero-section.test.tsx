import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/hero-section";

const mockProps = {
  isDarkMode: true,
  cardClasses: "bg-gray-900/80 border-gray-700/50 text-white",
};

describe("HeroSection", () => {
  it("renders main title correctly", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("code synthesis")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
  });

  it("renders event details correctly", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("Sep 27, 2025")).toBeInTheDocument();
    expect(screen.getByText("8 Hours")).toBeInTheDocument();
    expect(screen.getByText("Delhi, India")).toBeInTheDocument();
  });

  it("renders stats cards correctly", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("5000+")).toBeInTheDocument();
    expect(screen.getByText("PARTICIPANTS")).toBeInTheDocument();
    expect(screen.getByText("₹3,00,000+")).toBeInTheDocument();
    expect(screen.getByText("IN PRIZES")).toBeInTheDocument();
    expect(screen.getByText("JOIN")).toBeInTheDocument();
    expect(screen.getByText("DISCORD")).toBeInTheDocument();
  });

  it("renders CTA buttons correctly", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("Go to projects")).toBeInTheDocument();
    expect(screen.getByText("Dive In")).toBeInTheDocument();
  });

  it("renders subtitle correctly", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("8-HOUR HACKATHON")).toBeInTheDocument();
  });
});
