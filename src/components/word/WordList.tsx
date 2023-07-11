import React from 'react'
import {PartOfSpeech} from "./PartOfSpeech";
import {poss} from "../../data/products";
import {IWord} from "../../models";
import {FoundWord} from "./FoundWord";

export interface FoundWords {
	words: IWord[]
}

export function WordList({words}: FoundWords) {
	
	return (
		<div className="py-6 px-6 mb-2 border bg-blue-50">
			
			{words.map((w, index) =>
				<FoundWord word={w} key = {index}/>
			)}
			
			
			{/*Это - полное слово*/}
			{/*<div>*/}
			{/*	{poss.map((pos, index) =>*/}
			{/*		<PartOfSpeech pos={pos} key={index}/>)}*/}
			{/*</div>*/}
		</div>
	)
}