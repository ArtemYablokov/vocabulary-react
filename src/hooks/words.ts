import {useState} from 'react'
import {IWord} from '../models'
import axios, {AxiosError} from 'axios'

export function useWord() {
	const [words, setWords] = useState<IWord[]>([])
	
	const emptyWord: IWord = {
		name: "",
		parts: [{
			name: "",
			definitions: [],
			synonyms: [],
			antonyms: []
		}]
	};
	const [word, setWord] = useState<IWord>(emptyWord)
	// const [search, setSearch] = useState('')
	
	
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	
	const url = 'http://localhost:8080/find/';
	const findByIdUrl = 'http://localhost:8080/word/';
	
	
	async function fetchWords(preifx: string) {
		try {
			if (preifx === '') {
				setWords([])
				return
			}
			setError('')
			setLoading(true)
			console.log('searc prefix = ' + preifx)
			const response = await axios.get<IWord[]>(url + preifx)
			
			setWords(response.data)
			
			setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}
	
	async function fetchWord(id: string) {
		try {
			setError('')
			setLoading(true)
			
			const response = await axios.get<IWord>(findByIdUrl + id)
			
			setWord(response.data)
			
			setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}
	
	return {words, fetchWords, word, fetchWord, error, loading}
}