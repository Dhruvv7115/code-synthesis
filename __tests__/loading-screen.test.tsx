import { render, screen, waitFor } from "@testing-library/react"
import LoadingScreen from "@/components/loading-screen"
import { jest } from "@jest/globals"

const mockOnLoadingComplete = jest.fn()

describe("LoadingScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders loading screen with correct title", () => {
    render(<LoadingScreen onLoadingComplete={mockOnLoadingComplete} />)

    expect(screen.getByText("CODE SYNTHESIS")).toBeInTheDocument()
    expect(screen.getByText("2025")).toBeInTheDocument()
    expect(screen.getByText(12-HOUR HACKATHON")).toBeInTheDocument()
  })

  it("shows loading text", () => {
    render(<LoadingScreen onLoadingComplete={mockOnLoadingComplete} />)

    expect(screen.getByText("Loading Experience...")).toBeInTheDocument()
  })

  it("calls onLoadingComplete after progress completes", async () => {
    render(<LoadingScreen onLoadingComplete={mockOnLoadingComplete} />)

    await waitFor(
      () => {
        expect(mockOnLoadingComplete).toHaveBeenCalled()
      },
      { timeout: 2000 },
    )
  })

  it("renders progress bar", () => {
    render(<LoadingScreen onLoadingComplete={mockOnLoadingComplete} />)

    const progressContainer = screen.getByText("Loading Experience...").previousElementSibling
    expect(progressContainer).toBeInTheDocument()
  })
})
