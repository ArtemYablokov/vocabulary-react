import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {SearchPage} from './pages/SearchPage'
import {Navigation} from './components/Navigation'
import {PartOfSpeech} from "./components/word/PartOfSpeech";
import React from "react";

interface MatchParams {
	id: string;
}


function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/product" element={<ProductsPage/>}/>
				<Route path="/" element={<SearchPage/>}/>
			
				<Route path="/pos" element={<PartOfSpeech/>}/>
			</Routes>
		</>
	)
}

export default App;
