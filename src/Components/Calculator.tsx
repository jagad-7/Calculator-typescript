import React, { useState } from 'react'
import './Calculator.css'

const ClearButton: React.FC<{ handleClear: () => void }> = ({
    handleClear
  }) => (
    <button className="clear" onClick={handleClear}>
      Clear
    </button>
  );
  
  const Input: React.FC<{ input: string }> = ({ input }) => (
    <div className="input">{input}</div>
  );
  
  interface ButtonProps {
    handleClick: (val: string) => void;
    children: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ handleClick, children }) => (
    <button onClick={() => handleClick(children)}>{children}</button>
  );

function Calculator() {
    const [input, setInput] = useState('')

    const handleClick = (val: string)=>{
        setInput(input + val)
    }
    const handleEqual = ()=>{
        setInput(eval(input))
    }
    const handleClear = ()=>{
        setInput('')
    }

  return (
    <>
        <h1>Calculator App in Typescript</h1>
        <div className="container">
            <div className="wrapper">
                <input type='text' value={input} className='input'/>
                <div className="row">
                    <button onClick={()=>handleClick('7')}>7</button>
                    <button onClick={()=>handleClick('8')}>8</button>
                    <button onClick={()=>handleClick('9')}>9</button>
                    <button onClick={()=>handleClick('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick('4')}>4</button>
                    <button onClick={()=>handleClick('5')}>5</button>
                    <button onClick={()=>handleClick('6')}>6</button>
                    <button onClick={()=>handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick('1')}>1</button>
                    <button onClick={()=>handleClick('2')}>2</button>
                    <button onClick={()=>handleClick('3')}>3</button>
                    <button onClick={()=>handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={()=>handleClick('.')}>.</button>
                    <button onClick={()=>handleClick('0')}>0</button>
                    <button onClick={()=>handleEqual()}>=</button>
                    <button onClick={()=>handleClick('+')}>+</button>
                </div>
                <ClearButton handleClear={()=>handleClear()} />
            </div>
        </div>
    </>
  )
}

export default Calculator