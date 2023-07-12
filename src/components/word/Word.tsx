import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import {IWord} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";

export function Word() {
	
	const location = useLocation();
	const [word, setWord] = useState<IWord>()
	
	useEffect(() => {
		const state: IWord = location.state as IWord;
		setWord(state)
		console.log(state);
	}, [location.state]);
	
	return (
		<div className="py-6 px-6 mb-2 border bg-blue-50 WORD">
			{word?.parts.map((pos, index) =>
				<PartOfSpeech pos={pos}/>)}
		</div>
	)
}