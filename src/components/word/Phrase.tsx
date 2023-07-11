import React from "react";
import {IPhrase} from "../../models";

interface PhraseProps {
	phrase: IPhrase
}


export const Phrase = ({phrase}: PhraseProps) => {
	
	return (
		<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">
			{phrase.name}
		</div>
	)
}