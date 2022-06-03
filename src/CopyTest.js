import React,{useState} from 'react'

// truyền state lên

const USDtoVND = ({value,onHandleChange})=>{
 const convert = (vnd) =>{
    return vnd * 23000;
 }
 return(
    <>
        <span>USD:</span>
        <input type={'number'}
            value={value} 
            onChange={(e) => {
                const usd = e.target.value;
                const vnd = convert(usd);
                onHandleChange({
                    usd,
                    vnd,
                })
            }}
            
            
        />
        {console.log('usd',value)}
    </>
 )
} 


const VNDtoUSD = ({value,onHandleChange})=>{
    const convert = (vnd) =>{
       return vnd / 23000;
    }
    return(
       <>
           <span>VND:</span>
           <input type={'number'}
           value={value}
          onChange={(e) => {
            const vnd = e.target.value;
            const usd = convert(vnd);
            onHandleChange({
              usd,
              vnd,
            });
          }}
          
        />
        {console.log('vnd',value)}
       </>
    )
   } 

class CopyTests extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          usd: 0,
          vnd: 0,
        };
      }
      handleChange = (data) => {
        this.setState(data);
      };
    render(){

        return(
            <>
                <USDtoVND value={this.state.usd} onHandleChange={this.handleChange}  />
                <VNDtoUSD value={this.state.vnd} onHandleChange={this.handleChange}  />
            </>
        )
    }
}

export default CopyTests