import React, {useState} from 'react'
import {FoundWord} from "../components/word/FoundWord";

export interface SearchWordProps {
	integer: number
}

export const SearchWord = ({integer}: SearchWordProps) => {
	
	const [searchWord, setSearchWord] = useState('')
	
	console.log(searchWord)
	
	return (
		<>
			<div className='py-2 px-10 '>
				<div className="py-4 px-6 mb-2 border rounded-2xl bg-blue-100">
					<input className=" py-1 px-2 w-2/6 text-2xl"
						   placeholder="Search word"
						   onChange={e => setSearchWord(e.target.value)}
					></input>
				</div>
				<div>
					<FoundWord/>
				</div>
			</div>
		</>
	)
}