import React from 'react';
import store from "./store"
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import routes from "./router"
function App() {
	return (
		<Provider store = {store}>
			<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
		</Provider>
	);
}

export default App;
