import {Word} from "../word/Word";
import {IWord} from "../../models";
import React from "react";

export function CreateWordWrapper() {
	
	const emptyWord: IWord = {
		name: "",
		parts: [{
			name: "",
			definitions: [],
			synonyms: [],
			antonyms: []
		}]
	};
	
	return (
		<>
			<Word wordInit={emptyWord}/>
		</>
	)
}