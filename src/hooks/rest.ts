import axios, {AxiosError} from "axios";
import {IProduct} from "../models";


export function getAllByPrefix(prefix: string) {
	
	const url = 'localhost:8080/'
	
	async function fetchProducts() {
		try {
			const response = await axios.get<IProduct[]>(url)
			return response.data
		} catch (e: unknown) {
			const error = e as AxiosError
			console.log(error)
		}
	}
}