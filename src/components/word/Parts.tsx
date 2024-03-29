import React, {useState} from 'react'
import {IPos} from "../../models";
import {PartOfSpeech} from "./PartOfSpeech";

export interface PartsInterface {
	partsInit: IPos[],
	changePos: (arg0: IPos[]) => void
}

export function Parts({partsInit, changePos}: PartsInterface) {
	
	const [parts, setParts] = useState<IPos[]>(partsInit)
	
	const handlePartUpdate = (id: number, updatedPart: IPos) => {
		const newParts = parts.map((part) => {
			if (part.id === id) {
				return updatedPart
			}
			return part
		});
		setParts(newParts)
		
		// here state and update state works
		
		// MANUAL ? try ?
		// parts[id] = updatedPart
		
		changePos(newParts)
	};
	
	return (
		<div>
			
			{parts.map((pos, index) =>
				<PartOfSpeech partOfSpeech={pos} change={(updatedPart) => handlePartUpdate(index, updatedPart)}
							  key={index}/>)}
		
		</div>
	)
}