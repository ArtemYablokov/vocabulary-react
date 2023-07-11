import React from "react";
import {IDefinition} from "../../models";
import {Phrase} from "./Phrase";

interface DefProps {
	def: IDefinition
}

export const Definition = ({def}: DefProps) => {
	return (
		<div className="py-2 px-2 mb-1 rounded-lg bg-indigo-300">
			<div className="mb-1">
				<div>
					<p>{def.name}</p>
				</div>
			</div>
			<div className=" pl-4 pr-2 flex flex-col align-baseline rounded-lg">
				{def.phrases.map((phrase, index) => <Phrase phrase={phrase} key={index}/>)}
			</div>
		</div>
	)
}