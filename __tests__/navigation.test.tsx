import { render, screen, fireEvent } from "@testing-library/react"
import Navigation from "@/components/navigation"
import { jest } from "@jest/globals"

const mockProps = {
  isDarkMode: true,
  scrollToSection: jest.fn(),
}

describe("Navigation", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders navigation items correctly", () => {
    render(<Navigation {...mockProps} />)

    expect(screen.getByText("HOME")).toBeInTheDocument()
    expect(screen.getByText("ABOUT")).toBeInTheDocument()
    expect(screen.getByText("TRACKS")).toBeInTheDocument()
    expect(screen.getByText("TIMELINE")).toBeInTheDocument()
    expect(screen.getByText("PRIZES")).toBeInTheDocument()
    expect(screen.getByText("SPONSORS")).toBeInTheDocument()
    expect(screen.getByText("TEAM")).toBeInTheDocument()
    expect(screen.getByText("FAQ")).toBeInTheDocument()
  })

  it("calls scrollToSection when navigation item is clicked", () => {
    render(<Navigation {...mockProps} />)

    fireEvent.click(screen.getByText("ABOUT"))
    expect(mockProps.scrollToSection).toHaveBeenCalledWith("about")
  })

  it("renders Devfolio button", () => {
    render(<Navigation {...mockProps} />)

    expect(screen.getByText("Devfolio")).toBeInTheDocument()
  })

  it("does not render logo/website name", () => {
    render(<Navigation {...mockProps} />)

    expect(screen.queryByText("CODESYNTHESIS")).not.toBeInTheDocument()
    expect(screen.queryByText("CODE SYNTHESIS")).not.toBeInTheDocument()
  })

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Navigation {...mockProps} />)

    const hamburgerButton = screen.getByRole("button", { name: /menu/i })
    fireEvent.click(hamburgerButton)

    // Check if mobile menu items are visible
    const mobileMenuItems = screen.getAllByText("HOME")
    expect(mobileMenuItems.length).toBeGreaterThan(1) // Desktop + Mobile
  })
})
