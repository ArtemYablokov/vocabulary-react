import React, {ChangeEvent} from "react";
import {IDefinition, IPos, StringHolder} from "../../models";
import {Definition} from "./Definition";
import {SynOrAnt} from "./SynOrAnt";


interface PartProps {
	partOfSpeech: IPos
	change: (arg0: IPos) => void;
}

export const PartOfSpeech = ({partOfSpeech, change}: PartProps) => {
	
	// lets try w/out state
	// const [partOfSpeech, setPartOfSpeech] = useState<IPos>(pos)
	
	const changePosName = (e: ChangeEvent<HTMLInputElement>) => {
		
		// NOTE 1
		// tried state -> it doesn't change name in word, only in COMPONENT itself, which make sense, since state is in component only
		// setPartOfSpeech((prev) => ({
		// 	...prev,
		// 	name: e.target.value
		// }));
		
		// MANUAL works
		partOfSpeech.name = e.target.value
		change(partOfSpeech)
	};
	
	const changePosSyn = (index: number, stringHolder: StringHolder) => {
		partOfSpeech.synonyms[index] = stringHolder
		change(partOfSpeech)
	};
	
	const changePosAnt = (index: number, stringHolder: StringHolder) => {
		partOfSpeech.antonyms[index] = stringHolder
		change(partOfSpeech)
	};
	
	return (
		<div className="mb-4 flex">
			<div className=" w-4/6">
				
				<input
					className="py-1 mb-2 px-3 w-2/6 text-2xl flex flex-col align-baseline w-full rounded-lg border-2 border-sky-300 bg-white"
					type="text"
					id="word"
					placeholder="Part Of Speech"
					value={partOfSpeech.name}
					onChange={changePosName}
				/>
				
				{/*<div*/}
				{/*	className="rounded-full w-10 h-10 bg-indigo-500 font-bold flex justify-center items-center text-center mb-2">*/}
				{/*	{partOfSpeech.name}*/}
				{/*</div>*/}
				
				<div className="px-3 py-3 rounded-lg bg-indigo-300 w-full">
					{partOfSpeech.definitions.map((def, index) =>
						<Definition def={def} key={index}/>)}
				</div>
			</div>
			
			<div className="w-1/6 ml-6 py-2 px-2 h-fit rounded-lg {/*bg-indigo-300*/} border-indigo-500 border-2 ">
				{partOfSpeech.synonyms.map((syn, index) =>
					<SynOrAnt stringHolder={syn} key={index}
							  change={(updatedStringHolder) => changePosSyn(index, updatedStringHolder)}
					
					/>
				)}
			</div>
			<div className="w-1/6 ml-6 py-2 px-2 h-fit rounded-lg {/*bg-indigo-300*/} border-indigo-500 border-2">
				{partOfSpeech.antonyms.map((ant, index) =>
					<SynOrAnt stringHolder={ant} key={index}
							  change={(updatedStringHolder) => changePosAnt(index, updatedStringHolder)}
					/>
				)}
			</div>
		</div>
	)
	
	
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
}