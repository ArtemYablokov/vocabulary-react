import {useState} from 'react'
import {IWord} from '../models'
import axios, {AxiosError} from 'axios'

export function useWords() {
	const [words, setWords] = useState<IWord[]>([])
	// const [search, setSearch] = useState('')
	
	
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	
	const url = 'http://localhost:8080/find/';
	
	
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
	
	return {words, fetchWords, error, loading}
}