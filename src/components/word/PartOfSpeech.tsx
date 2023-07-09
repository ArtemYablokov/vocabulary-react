import React from "react";
import {IPos} from "../../models";
import {Definition} from "./Definition";

interface PosProps {
	pos: IPos
}


export const PartOfSpeech = ({pos}: PosProps) => {
	
	return (
		<div className="mb-4 flex">
			<div className="w-4/6">
				<div
					className="rounded-full w-10 h-10 bg-indigo-500 font-bold flex justify-center items-center text-center mb-2">{pos.pos}
				</div>
				<div className="px-3 py-3 rounded-lg bg-indigo-400">
					{pos.definitions.map((def, index) => <Definition def={def} key={index}/>)}
				</div>
			</div>
			
			<div className="w-1/6 mt-12 ml-6 py-2 px-2 rounded-lg bg-indigo-300 border-indigo-500 border-2">
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">comprehensive</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 2</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 3</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 3</div>
			</div>
			<div className="w-1/6 mt-12 ml-6 py-2 px-2 rounded-lg bg-indigo-300 border-indigo-500 border-2">
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 1</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 2</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 3</div>
				<div className="py-2 px-2 mb-3 bg-white border-2 border-sky-100 rounded-lg">Syn 3</div>
			</div>
		</div>
	)
}