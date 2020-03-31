import React, {useContext, useState} from 'react'
import axios from 'axios'
import Context from '../../context'
import './Cart.scss'
import {Button, Table} from "antd";

const Cart = () => {

    const columns = [
        {
            title: 'Название товара',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Валюта',
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
        },
    ]
    const columnsRes = [
        {
            title: 'RUB',
            dataIndex: 'RUB',
            key: 'RUB',
        },
        {
            title: 'USD',
            dataIndex: 'USD',
            key: 'USD',
        },
        {
            title: 'EUR',
            dataIndex: 'EUR',
            key: 'EUR',
        },
    ]
    const {
        state: {cartItems},
    } = useContext(Context)

    const [totalPrice, setTotalPrice] = useState(null)
    const getTotalPrice = async () => {
        try {
            const res = await axios.post('/api', {cartItems})
            setTotalPrice(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-items">
                {cartItems.length ? (
                    <>
                        <h2>Корзина:</h2>
                        <Table columns={columns} dataSource={cartItems} pagination={false}/>
                    </>
                ) : (
                    <span className="empty-message">Корзина пуста</span>
                )}
            </div>
            <Button type={"primary"} style={{width: '200px'}} onClick={getTotalPrice}>Посчитать</Button>
            {totalPrice && (
                <>
                    <h2>Результаты</h2>
                    <div className="total-coast">
                        <Table columns={columnsRes} dataSource={totalPrice} pagination={false}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart
