import {Word} from "../word/Word";
import {IWord} from "../../models";
import React from "react";

export function CreateWordWrapper() {
	
	const emptyWord: IWord = {
		name: '',
		parts: [{
			name: '',
			definitions: [
				{
					name: '',
					phrases: [{name: ''}, {name: ''}]
				},
				{
					name: '',
					phrases: [{name: ''}, {name: ''}]
				}
			],
			synonyms: [{name: ''}],
			antonyms: [
				{name: ''},
				{name: ''},
			]
		}]
	};
	
	return (
		<>
			<Word wordInit={emptyWord}/>
		</>
	)
}