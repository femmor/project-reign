import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import App from "../App"
import { describe, expect, it } from "vitest"

describe("App", () => {
	it("renders the title", () => {
		render(<App />)
		const title = screen.getByText(/Hello World!/i)
		expect(title).toBeInTheDocument()
	})
})
