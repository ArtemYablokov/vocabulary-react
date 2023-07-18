import {useParams} from "react-router-dom";
import {Word} from "./word/Word";
import {IWord} from "../models";
import React, {useState} from "react";
import {getWordById} from "../hooks/api";


export function PagePhonesForm() {
	const {wordId} = useParams();
	
	const emptyWord: IWord = {
		name: "",
		parts: [{
			name: "",
			definitions: [],
			synonyms: [],
			antonyms: []
		}]
	};
	
	const [word, setWord] = useState<IWord>(emptyWord)
	
	React.useEffect(() => {
		if (wordId != null) {
			
			getWordById(wordId)
				.then((data) => {
					setWord(data)
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		} else {
			setWord(emptyWord)
		}
	}, [])
	
	return (
		<>
			<Word wordInit={word}/>
		</>
	)
}