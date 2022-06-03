import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tabs = ['posts', 'albums']

const Effect = () =>{
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState([])
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [show, setShow] = useState(false)
    const [avatar, setAvatar] = useState()
//thay đổi title  của trang web 
    useEffect(() =>{
        document.title =  title
    })
//call api
    useEffect(() =>{
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts =>{
            setPosts(posts)
        })
    }, [type])
//DOM events //cleanup
    useEffect(() =>{

        const handlesCroll = ()=>{
            // console.log(window.scrollY) //xem khoảng cách khi t lướt xuống dưới
           if(window.scrollY >= 50 ) {
            setShow(true)
           }else{
            setShow(false)
           }
        }
        window.addEventListener('scroll',handlesCroll)
        return () =>{
            window.removeEventListener('scroll',handlesCroll)// lm cho k bi dò dỉ bộ nhớ 
        }
    },[])

    const handleAvatar = (e) =>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        console.log('>>>check', e)
    }

    useEffect(() =>{

        return () =>{
            avatar &&  URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handleSubmib = () =>{
        if(!title){
            return  toast.error("thêm thất bại")
        }
        setTodo([...todo,{
            id: Math.floor(Math.random() * 1000),
            name: title
        }])
        setTitle('')
        toast.success("Thêm thành công")
    }
    const handleClear = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
      };
      const handleAll = () =>{
        const clear = [...todo];
        clear.splice(0, clear.length);
        setTodo(clear);
      }
    return(
        <div>
            <input 
                type='text'
                value={title} 
                onChange={e =>setTitle(e.target.value)}  
                
            /><button onClick={handleSubmib}>add</button>
            <button onClick={handleAll}>clear all</button>
            <div>
                    {todo.map((item,index) =>(
                        <div key={index}>
                            {item.name}--<button onClick={() =>handleClear(index)}>clear</button>
                        </div>
                    ))}
            </div>
            <div>
                {tabs.map((tab,index) =>(
                    <button 
                        key={index}
                        onClick={() =>setType(tab)}
                    >{tab}</button>
                ))}
                
            </div>
            <div>
            <ul>
                {posts && posts.map((item,key)=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            </div>
            <div>
                {show && <button style={{position: 'fixed',right:20,bottom: 20,}}>goto</button>}
            </div>
            <div>
                <input type='file' onChange={handleAvatar} />
            </div>
            <div>
                {avatar && (
                   <img src={avatar.preview} alt='' />
                )}
            </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
        </div>
    )
}

export default Effect