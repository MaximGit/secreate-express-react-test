export const addItemToCart = (cartItems, cartItemToAdd) => {
	return [...cartItems, { ...cartItemToAdd }]
}

