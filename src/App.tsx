import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {SearchPage} from './pages/SearchPage'
import {Navigation} from './components/Navigation'
import React from "react";
import {BaseWordForm} from "./components/wordform/BaseWordForm";

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/product" element={<ProductsPage/>}/>
				<Route path="/" element={<SearchPage/>}/>
				
				<Route path="/update/:wordId" element={<BaseWordForm/>}/>
				<Route path="/create" element={<BaseWordForm/>}/>
			</Routes>
		</>
	)
}

export default App;
