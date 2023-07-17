import React, {ChangeEvent, useState} from 'react'
import {StringHolder} from "../../models";
import {TextInput} from "../TextInput";

export interface SynOrAntProps {
	stringHolder: StringHolder
}

export const SynOrAnt = ({stringHolder}: SynOrAntProps) => {
	
	
	const [synOrAnt, setSynOrAnt] = useState<StringHolder>(stringHolder)
	
	const changeSynOrAnt = (e: ChangeEvent<HTMLInputElement>) => {
		setSynOrAnt((prev) => ({
			...prev,
			name: e.target.value
		}));
	};
	
	return (
		<div className="mb-2">
			<TextInput val={synOrAnt.name} onChange={changeSynOrAnt}/>
		</div>
	)
}