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
		<div className="mb-1">
			<TextInput val={phrase.name} placeHolder={'Phrase'} onChange={changePhrase}/>
		</div>
	)
}