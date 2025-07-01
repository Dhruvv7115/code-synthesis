import { render, screen } from "@testing-library/react"
import AboutSection from "@/components/about-section"

const mockProps = {
  isDarkMode: true,
  cardClasses: "bg-gray-900/80 border-gray-700/50 text-white",
  accentColor: "text-pink-400",
}

describe("AboutSection", () => {
  it("renders section title correctly", () => {
    render(<AboutSection {...mockProps} />)

    expect(screen.getByText("ABOUT")).toBeInTheDocument()
    expect(screen.getByText("CODE SYNTHESIS")).toBeInTheDocument()
  })

  it("renders feature cards correctly", () => {
    render(<AboutSection {...mockProps} />)

    expect(screen.getByText("INNOVATION")).toBeInTheDocument()
    expect(screen.getByText("IMPACT")).toBeInTheDocument()
    expect(screen.getByText("COMMUNITY")).toBeInTheDocument()
  })

  it("renders mission statement", () => {
    render(<AboutSection {...mockProps} />)

    expect(screen.getByText("OUR MISSION")).toBeInTheDocument()
    expect(screen.getByText(/To empower the next generation/)).toBeInTheDocument()
  })

  it("renders description text", () => {
    render(<AboutSection {...mockProps} />)

    expect(screen.getByText(/After CodeZen, we promised you something even bigger/)).toBeInTheDocument()
  })
})
