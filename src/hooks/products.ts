import {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios, {AxiosError} from 'axios'

export function useProducts() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	
	function addProduct(product: IProduct) {
		setProducts(prev => [...prev, product])
	}
	
	function deleteProduct(id: number | undefined) {
		debugger
		console.log(products)
		
		const newArray = products.map((item) => {
			debugger
			if (item.id === id) {
				item.description = 'DELETED DESCRIPTION';
				return item;
			} else {
				return item;
			}
		})
		
		setProducts(prev => prev.filter(company => company.id !== id))
		
		setProducts(newArray);
		
		console.log(products)
	}
	
	async function fetchProducts() {
		try {
			setError('')
			setLoading(true)
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
			setProducts(response.data)
			setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}
	
	useEffect(() => {
		fetchProducts()
	}, [])
	
	return {products, error, loading, addProduct, deleteProduct}
}