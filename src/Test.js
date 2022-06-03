import React from 'react'

const USDtoVND =  ({value,onHandleChange}) => {
    const convert =  (usd) => {
      return usd * 23632;
    };
    return (
      <div>
        <span>USD </span>
        <input
          onChange={(e) => {
            const usd = e.target.value;
            const vnd = convert(usd);
            onHandleChange({
              usd,
              vnd,
            });
          }}
          value={value}
        />
      </div>
    );
  };

  const VNDtoUSD =  ({value,onHandleChange}) =>{
    const convert =  (vnd) =>{
      return vnd / 2300;
    };
    return (
      <div>
        <span>VND </span>
        <input
          onChange={(e) => {
            const vnd = e.target.value;
            const usd = convert(vnd);
            onHandleChange({
              usd,
              vnd,
            });
          }}
          value={value}
        />
      </div>
    );
  };

class Test extends React.Component{
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
                <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
                <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
            </>
        )
    }
}

export default Test