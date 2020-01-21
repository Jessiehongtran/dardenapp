import React from 'react';
// import '../styles/Product.scss';

const Products = (props) => {
    const handlePurchase = prod => () => {
        props.setSelectedProduct(prod)
        props.history.push('/checkout')
    }

    return (
        <div>
            {props.products.map(prod => {
                return (
                    <div className="product" key={prod.id}>
                        <section>
                            <h2>{prod.name}</h2>
                            <p>{prod.desc}</p>
                            <h3>{'$' + prod.price}</h3>
                            <button type="button" onClick={handlePurchase(prod)}>
                            PURCHASE
                            </button>
                        </section>
                        <img src={prod.img} alt={prod.name} />
                    </div>
                )
                })}
        </div>
    )
}

export default Products;