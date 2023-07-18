import React from 'react'
import {IWord} from "../../models";
import {useNavigate} from "react-router-dom";

export interface Word {
	word: IWord
}

export const FoundWord = ({word}: Word) => {
	
	const navigate = useNavigate();
	
	return (
		<>
			<button
				className="py-2 px-4 mb-2 w-2/6 border rounded-2xl text-2xl bg-green-100 hover:text-blue-300 text-left"
			onClick={() => navigate(`update/${word.id}`)}>
				{word.name}
			</button>
		</>
	)
}