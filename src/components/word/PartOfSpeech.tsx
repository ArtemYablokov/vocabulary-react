import React, {ChangeEvent, useState} from "react";
import {IDefinition, IPos} from "../../models";
import {Definition} from "./Definition";
import {SynOrAnt} from "./SynOrAnt";


interface PartProps {
	pos: IPos
	change: (arg0 : IPos) => void;
}

export const PartOfSpeech = ({pos, change}: PartProps) => {
	
	const [partOfSpeech, setPartOfSpeech] = useState<IPos>(pos)
	
	function addNewDefinition(def: IDefinition) {
		partOfSpeech.definitions.concat(def)
	}
	
	function addNewSynonym(synonym: string) {
		partOfSpeech.synonyms.concat({name: synonym})
	}
	
	function addNewAntonym(antonym: string) {
		partOfSpeech.antonyms.concat({name: antonym})
	}
	
	function deleteAntonym(antonym: string) {
		partOfSpeech.antonyms.filter(ant => ant.name !== antonym)
	}
	
	const changePos = (e: ChangeEvent<HTMLInputElement>) => {
		// setPartOfSpeech((prev) => ({
		// 	...prev,
		// 	name: e.target.value
		// }));
		
		// MANUAL works
		// SET - not
		partOfSpeech.name = e.target.value
		
		change(partOfSpeech)
	};
	
	return (
		<div className="mb-4 flex">
			<div className=" w-4/6">
				
				<input
					className="py-1 px-3 w-2/6 text-2xl flex flex-col align-baseline w-full rounded-lg border-2 border-sky-300 bg-white"
					type="text"
					id="word"
					placeholder="Part Of Speech"
					value={partOfSpeech.name}
					onChange={changePos}
				/>
				
				<div
					className="rounded-full w-10 h-10 bg-indigo-500 font-bold flex justify-center items-center text-center mb-2">
					{partOfSpeech.name}
				</div>
				
				<div className="px-3 py-3 rounded-lg bg-indigo-300 w-full">
					{pos.definitions.map((def, index) =>
						<Definition def={def} key={index}/>)}
				</div>
			</div>
			
			<div className="w-1/6 ml-6 py-2 px-2 h-fit rounded-lg bg-indigo-300 ">
				{pos.synonyms.map((syn, index) =>
					<SynOrAnt stringHolder={syn} key = {index}/>
				)}
			</div>
			<div className="w-1/6 ml-6 py-2 px-2 h-fit rounded-lg bg-indigo-300 border-indigo-500 border-2">
				{pos.antonyms.map((ant, index) =>
					<SynOrAnt stringHolder={ant} key = {index}/>
				)}
			</div>
		</div>
	)
}