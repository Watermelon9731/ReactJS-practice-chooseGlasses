import React, { Component } from 'react'

export default class Glasses_Content extends Component {
    itemData = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];

    state = {
        sample: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }

    itemRender = () => {
        return this.itemData.map((prod, index) => {
            return (
                <div className="col-2 text-center" style={{ cursor: "pointer" }} key={index} onClick={() => {this.selectionRender(prod)}}>
                    <img src={prod.url} alt="..." className='py-3 w-100' />
                </div>
            )
        })
    }

    selectionRender = (selectionModel) => {
        this.setState({
            sample: selectionModel,
        })
    }

    render() {
        let { id, price, name, url, desc } = this.state.sample;
        return (
            <section className='container'>
                <div className="row model">
                    <div className="sample col-6 text-center">
                        <img src="./img/model.jpg" alt="" className='w-50' />
                        <img src={url} alt="" className='glass w-25' />
                        <div className='item-detail text-left w-50'>
                            <h3>{name}</h3>
                            <p>{desc}</p>
                            <p>{price}$</p>

                        </div>
                    </div>
                    <div className="origin col-6 text-center">
                        <img src="./img/model.jpg" alt="" className='w-50' />
                    </div>
                </div>
                <div className="row product bg-white">
                    {this.itemRender()}
                </div>
            </section >
        )
    }
}
