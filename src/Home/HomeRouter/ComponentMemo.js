import React,{useState, useMemo, useRef} from 'react'

const ComponentMemo = () =>{
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    
    const HandleProduct = (e) =>{
        setProduct(e.target.value)
        // console.log('product',product)
    }
    const HandlePrice = (e) =>{
        setPrice(e.target.value)
        // console.log('price',price)
    }

    const inRef = useRef()
    
    const HandleClick = () =>{
        inRef.current.focus()

        if(!product || !price ){
            return alert('nhập đầy đủ product và price')
        }
        setProducts(
            [...products,{            
                product,
                price: +price}]
        )
        setProduct('')
        setPrice('')
        
    }

    const total = useMemo(() =>{
        console.log('re-render-useMemo')
        const calc = products.reduce((calc,pord) =>{
            return calc + pord.price
        },0)
        return calc
    },[products])


    ///
    return(
        <>
            <input type={'text'} placeholder='nhập tên sản phẩm'
                ref={inRef} 
                value={product}
                onChange={HandleProduct}
            /> <br />
            <input type={'text'} placeholder='nhập giá sản phẩm' 
                value={price}
                onChange={HandlePrice}
            /> <br />
            <button onClick={HandleClick}>ADD</button>
            <div>
                <h4>total:{total}$</h4>
                {products.map((item,index) =>(
                    <p key={index}>{item.product}-{item.price}$</p>
                ))}
            </div>
        </>
    )
}

export default ComponentMemo