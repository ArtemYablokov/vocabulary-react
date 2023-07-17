import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {SearchPage} from './pages/SearchPage'
import {Navigation} from './components/Navigation'
import React from "react";
import {Word} from "./components/word/Word";

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/product" element={<ProductsPage/>}/>
				<Route path="/" element={<SearchPage/>}/>
				
				<Route path="/word" element={<Word/>}/>
				<Route path="/create" element={<Word/>}/>
			</Routes>
		</>
	)
}

export default App;
