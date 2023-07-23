import React, {ChangeEvent, useState} from 'react'
import {IPos, IWord} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";
import {TextInput} from "../TextInput";
import {useWord} from "../../hooks/words";

export interface WordProps {
	wordInit: IWord
}

export function Word({wordInit}: WordProps) {
	
	const [word, setWord] = useState<IWord>(wordInit)
	
	const {saveWord} = useWord()
	
	const changeWord = (e: ChangeEvent<HTMLInputElement>) => {
		setWord((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	

	
	const changePos = (p : IPos, index : number) => {
		// word.parts.filter(p => p.id === id)
		debugger
		word.parts[index] = p;
		setWord(word);
	};
	
	return (
		<div className="py-6 px-6 mb-2 border bg-blue-50 WORD">
			<div className="py-2 w-2/6 px-6 mb-5 border bg-blue-200 rounded-lg">
				<TextInput val={word.name} placeHolder={'Word'} onChange={changeWord}/>
			</div>
			
			{word?.parts.map((pos, index) =>
				<PartOfSpeech pos={pos} change={(e) => changePos(e, index)} key={index}/>)}
			
			<button
				className="py-2 px-4 mb-2  border rounded-3xl text-2xl text-purple-50 hover:text-indigo-700 bg-blue-400"
				onClick={() => saveWord(word)}>
				Create word
			</button>
		</div>
	)
}