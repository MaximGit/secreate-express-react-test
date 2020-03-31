import React, { useContext, useReducer } from 'react'

import Shop from './components/Shop/Shop'

import Context from './context'
import reducer from './reducer'

const App = () => {
	const initialState = useContext(Context)
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<Context.Provider value={{ state, dispatch }}>
			<Shop />
		</Context.Provider>
	)
}

export default App
