import {IWord} from "../../models";
import React, {useState} from "react";
import {Word} from "../word/Word";
import {getWordById} from "../../hooks/api";


export interface UpdateWordProps {
	wordId: string
}

export function UpdateWordWrapper({wordId}: UpdateWordProps) {
	
	const [word, setWord] = useState<IWord>()
	const [err, setErr] = useState<string>()
	
	React.useEffect(() => {
		getWordById(wordId)
			.then((data) => {
				setWord(data)
			})
			.catch((error) => {
				console.error('Error:', error);
				setErr(error)
			});
	}, [wordId])
	
	
	return (
		<>
			{word && <Word wordInit={word}/>}
		</>
	)
}