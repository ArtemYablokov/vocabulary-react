import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {SearchWord} from './pages/SearchWord'
import {Navigation} from './components/Navigation'

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/" element={<ProductsPage/>}/>
				<Route path="/about" element={<SearchWord integer={1} />}/>
			</Routes>
		</>
	)
}

export default App;
