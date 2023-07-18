import React, {useState} from 'react'
import {WordList} from "../components/word/WordList";
import {useWord} from "../hooks/words";

export interface SearchWordProps {
	variablelll: number
}

export const SearchPage = () => {
	
	const [prefix, setPrefix] = useState('')
	
	const {
		words, fetchWords, error, loading
	} = useWord()
	
	
	return (
		<>
			<div className='py-5 px-10 '>
				<div className="py-2 px-6 mb-5 border bg-blue-50">
					<input className=" py-2 px-4 w-2/6 border rounded-2xl text-2xl"
						   placeholder="Search word"
						   onChange={e => {
							   setPrefix(e.target.value)
							   fetchWords(e.target.value)
						   }}
					></input>
				</div>
				{words.length > 0 &&
					<WordList words={words}/>
				}
			</div>
		</>
	)
}