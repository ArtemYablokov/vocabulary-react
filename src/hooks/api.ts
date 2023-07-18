import axios, {AxiosError} from "axios";
import {IWord} from "../models";


const findByIdUrl = 'http://localhost:8080/word/';

export async function getWordById(id: string) : Promise<IWord> {
	try {
		const response = await axios.get<IWord>(findByIdUrl + id)
		return response.data
	} catch (e: unknown) {
		const error = e as AxiosError
		console.log(error)
		throw error
	}
}