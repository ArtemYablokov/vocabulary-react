import React, {ChangeEvent, useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import {IWord} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";
import {TextInput} from "../TextInput";

export function Word() {
	
	const location = useLocation();
	const [word, setWord] = useState<IWord>({
		name: "",
		parts: [{
			name: "",
			definitions: [],
			synonyms: [],
			antonyms: []
		}]
	})
	
	useEffect(() => {
		const state: IWord = location.state as IWord;
		if (state) {
			setWord(state)
			console.log(state);
		}
	}, [location.state]);
	
	
	const changeWord = (e: ChangeEvent<HTMLInputElement>) => {
		setWord((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	
	return (
		<div className="py-6 px-6 mb-2 border bg-blue-50 WORD">
			<div className="py-2 w-2/6 px-6 mb-5 border bg-blue-200 rounded-lg">
				<TextInput val={word.name} onChange={changeWord}/>
			</div>
			
			{word?.parts.map((pos, index) =>
				<PartOfSpeech pos={pos}/>)}
		</div>
	)
}