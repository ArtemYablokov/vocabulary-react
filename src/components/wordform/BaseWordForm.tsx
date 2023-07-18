import {useParams} from "react-router-dom";
import React from "react";
import {CreateWordWrapper} from "./CreateWordWrapper";
import {UpdateWordWrapper} from "./UpdateWordWrapper";


export function BaseWordForm() {
	const {wordId} = useParams();
	
	return (
		<>
			{wordId ? (
				<UpdateWordWrapper wordId={wordId}/>
			) : (
				<CreateWordWrapper/>
			)}
		</>
	)
}