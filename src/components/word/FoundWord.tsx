import React from 'react'
import {IPos, IWord} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";
import {poss} from "../../data/products";
import {useNavigate} from "react-router-dom";

export interface Word {
	word: IWord
}

export function FoundWord({word}: Word) {
	
	const navigate = useNavigate();
	
	
	return (
		<>
			<button
				className="py-2 px-4 mb-2 w-2/6 border rounded-2xl text-2xl bg-green-100 hover:text-blue-300 text-left"
				// onClick={() => console.log('go to ' + word.name)}
				onClick={() => navigate(`pos`, {state: word})}
			>
				{word.name}
			</button>
		</>
	
	
	)
}