import React, {ChangeEvent, useState} from "react";
import {IDefinition} from "../../models";
import {Phrase} from "./Phrase";
import {TextInput} from "../TextInput";

interface DefProps {
	def: IDefinition
}


export const Definition = ({def}: DefProps) => {
	
	const [definition, setDefinition] = useState<IDefinition>(def)
	const changeDefinition = (e: ChangeEvent<HTMLInputElement>) => {
		setDefinition((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	
	return (
		<div className="py-2 px-2 mb-1 rounded-lg bg-indigo-300">
			<div className="mb-1">
				<TextInput val={definition.name} onChange={changeDefinition}/>
			</div>
			<div className=" pl-4 pr-2 flex flex-col align-baseline rounded-lg">
				{def.phrases.map((phrase, index) =>
					<Phrase phraseI={phrase} key={index}/>)}
			</div>
		</div>
	)
}