import React, {ChangeEvent, useState} from "react";
import {IPhrase} from "../../models";
import {TextInput} from "../TextInput";

interface PhraseProps {
	phraseI: IPhrase
}


export const Phrase = ({phraseI}: PhraseProps) => {
	
	const [phrase, setPhrase] = useState<IPhrase>(phraseI)
	const changePhrase = (e: ChangeEvent<HTMLInputElement>) => {
		setPhrase((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	
	return (
		<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">
			<TextInput val={phrase.name} onChange={changePhrase}/>
		</div>
	)
}