import React, {useContext, useState} from 'react'

import Context from '../../context'
import {ADD_SHOP_ITEM_IN_CART} from '../../constants'
import {Button, Input, InputNumber, Select} from 'antd';
import './Shop.scss'
import Cart from "../Cart/Cart";


const Shop = () => {
    const { Option } = Select
    const {dispatch} = useContext(Context)
    const [currency, setCurrency] = useState('RUB')
    const [name, setName] = useState('Товар 1')
    const [price, setPrice] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const [key, setKey] = useState(1)

    const addShopItemInCart = () => {

        setKey(key + 1)
        const shopItemData = {
            key,
            name,
            price,
            currency,
            quantity,
        }
        dispatch({type: ADD_SHOP_ITEM_IN_CART, payload: shopItemData})
    }

    const handleChange = value => {
        setCurrency(value)
    }


    return (

        <>
        <h2>Магазин</h2>
            <div className="shop-page">
                <div className="shop-item">
                    <div className="shop-footer">
                        <span className="name"><Input placeholder="Название товара"
                                                      onChange={(e) => setName(e.target.value)} value={name}/></span>
                        <span className="price"><InputNumber placeholder="Цена" min={1}
                                                             onChange={(value) => setPrice(+value)}
                                                             value={price}/></span>
                        <span className="quantity"><InputNumber placeholder="Количество" min={1}
                                                                onChange={(value) => setQuantity(+value)}
                                                                value={quantity}/></span>

                        <Select defaultValue={currency} style={{ width: 120 }} onChange={handleChange}>
                            <Option value={'RUB'}>RUB</Option>
                            <Option value={'EUR'}>EUR</Option>
                            <Option value={'USD'}>USD</Option>
                        </Select>

                        <Button type="primary" value="large" onClick={addShopItemInCart}>Добавить в корзину</Button>
                    </div>

                </div>
            </div>
            <Cart/>
        </>
    )
}

export default Shop
