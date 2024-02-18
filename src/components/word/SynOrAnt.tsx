import React, {ChangeEvent, useState} from 'react'
import {StringHolder} from "../../models";
import {TextInput} from "../TextInput";

export interface SynOrAntProps {
	stringHolder: StringHolder
	change: (arg0: StringHolder) => void;
}

export const SynOrAnt = ({stringHolder, change}: SynOrAntProps) => {
	
	// lets remove STATE!
	const [synOrAnt, setSynOrAnt] = useState<StringHolder>(stringHolder)
	
	const changeSynOrAnt = (e: ChangeEvent<HTMLInputElement>) => {
		stringHolder.name = e.target.value
		change(stringHolder)
		
		// strange behavior - some input are missing/overriding
		// setSynOrAnt((prev) => ({
		// 	...prev,
		// 	name: e.target.value
		// }));
		// change(synOrAnt)
	};
	
	return (
		<div className="mb-2">
			<TextInput val={stringHolder.name} placeHolder={'SynOrAnt'} onChange={changeSynOrAnt}/>
		</div>
	)
}