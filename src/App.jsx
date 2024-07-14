import { useState } from "react"
import Comments from "./components/Comments"

import "./App.css"
import useNode from "./hooks/useNode"

const comment = {
	id: 1,
	items: [],
}

function App() {
	const [commentsData, setCommentsData] = useState(comment)

	const { insertNode, editNode, deleteNode } = useNode()

	const handleInsertNode = (folderId, item) => {
		const finalStructure = insertNode(commentsData, folderId, item)
		setCommentsData(finalStructure)
	}

	const handleEditNode = (folderId, value) => {
		const finalStructure = editNode(commentsData, folderId, value)
		setCommentsData(finalStructure)
	}

	const handleDeleteNode = (folderId) => {
		const finalStructure = deleteNode(commentsData, folderId)
		const temp = { ...finalStructure }
		setCommentsData(temp)
	}

	return (
		<div className="App">
			<Comments
				handleInsertNode={handleInsertNode}
				handleEditNode={handleEditNode}
				handleDeleteNode={handleDeleteNode}
				comment={commentsData}
			/>
		</div>
	)
}

export default App
