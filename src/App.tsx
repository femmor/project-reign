import { FC } from "react"

const App: FC = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="mb-4 text-4xl font-bold">Hello World!</h1>
				<p className="mb-4 text-lg">
					This is the starter template for Project Reign
				</p>
				<button
					type="button"
					className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
					onClick={() =>
						window.open("https://github.com/femmor/project-reign", "_blank")
					}
				>
					Clone this repo ➡️
				</button>
			</div>
		</div>
	)
}

export default App
