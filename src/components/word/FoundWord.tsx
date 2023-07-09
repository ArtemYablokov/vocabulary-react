import React from 'react'
import {IPos} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";
import {poss} from "../../data/products";


export function FoundWord() {
	
	return (
		<div className="py-6 px-6 mb-2 border rounded-2xl bg-blue-100">
			<div>
				{poss.map((pos, index) => <PartOfSpeech pos={pos} key={index}/>)}
			</div>
		</div>
	)
}