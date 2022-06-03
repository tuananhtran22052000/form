import React, {Suspense }from 'react'
import classes from './Home.module.scss'


class Home extends React.Component {
    state = {
        title:'',
        todoList: [ ]
    }
    render() {
        let { todoList, title } = this.state
        const handleOnChange = (e) =>{
            this.setState({
                title: e.target.value
            })
            console.log('...check', title)
        }
         
        const handleSubmit = (todo) =>{
            if(!title){
                return alert('nhập dữ liệu')
            }
            todo = {
             id: Math.floor(Math.random() * 1001),
              title:title,
            }
          this.setState({
            todoList: [...todoList,todo]
          })
          this.state.title = ''
          console.log('>>>>check', todo)
        }

        const handleClear = (todo) =>()=>{
            this.setState({
                todoList : todoList.filter(list => list.id !== todo.id)
            })
            console.log('>>>todo' ,todo)
        }

        const handleClrearAll = () => {
            this.setState({
                todoList : todoList.slice(0,todoList)
            })
        }
         
        return (
            <div className={classes.container}>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className={classes.row}>
                        <input type='text' 
                        value={title}
                        onChange={(e) =>{handleOnChange(e)}}
                        placeholder={'nhập dữ liệu'} 
                        />
                        <button onClick={handleSubmit}> ADD </button>
                        <button onClick={handleClrearAll}>clear all</button>
                    </div>
                    <div className={classes.content}>
                        <ul>
                        { todoList && todoList.map((item,index) =>(
                            <li key={index}>
                                <span>{item.title}</span>
                                <button onClick={handleClear(item)}>clear</button>
                            </li>
                            ))}
                        </ul>
                    </div>
                </Suspense>
            </div>
        )
    }
}

export default Home