import React,{useContext} from 'react'
import { bgrContext } from '../UseContext'
import classes from '../style.scss'

const Item2 = () =>{
    const theme = useContext(bgrContext)
    return(
        <>
            <p className={theme}>
                Trong lần đầu render, mệnh đề điều kiện name !== '' trả về true, Hook sẽ được gọi. 
                Tuy nhiên, trong lần gọi tiếp theo, user có thể xóa giá trị trong form, việc này làm cho mệnh đề
                điều kiện trả về false, chúng ta bỏ qua câu
                gọi effect, thứ tự gọi Hook cũng thay đổi theo:
            </p>
        </>
    )
}

export default Item2