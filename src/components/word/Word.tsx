import React, {ChangeEvent, useState} from 'react'
import {IWord} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";
import {TextInput} from "../TextInput";

export interface WordProps {
	wordInit: IWord
}

export function Word({wordInit}: WordProps) {
	
	const [word, setWord] = useState<IWord>(wordInit)
	
	const changeWord = (e: ChangeEvent<HTMLInputElement>) => {
		setWord((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	
	return (
		<div className="py-6 px-6 mb-2 border bg-blue-50 WORD">
			<div className="py-2 w-2/6 px-6 mb-5 border bg-blue-200 rounded-lg">
				<TextInput val={word.name} placeHolder={'Word'} onChange={changeWord}/>
			</div>
			
			{word?.parts.map((pos, index) =>
				<PartOfSpeech pos={pos} key = {index}/>)}
		</div>
	)
}