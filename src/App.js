
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber('0');
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber('0');
      setOperation('')
    }

  }

  const handleMultiplyNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('×')
    }else{
      const multiply = parseFloat(firstNumber) * parseFloat(currentNumber)
      setCurrentNumber(String(multiply))
      setFirstNumber('0');
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('÷')
    }else{
      const divide = parseFloat(firstNumber) / parseFloat(currentNumber)
      setCurrentNumber(String(divide))
      setFirstNumber('0');
      setOperation('')
    }
  }

  const handleModNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('%')
    }else{
      const mod = parseFloat(firstNumber) % parseFloat(currentNumber)
      setCurrentNumber(String(mod))
      setFirstNumber('0');
      setOperation('')
    }
  }

  const handleDecimalNumbers = () => {
    if(!currentNumber.includes(',')){
      const decimal = String(currentNumber.concat('.'))
      setCurrentNumber(decimal)
    }
  }

  const handleBackSpace = () => {
    if(currentNumber.split('').length >= 2){
      setCurrentNumber(String(currentNumber.substr(0, currentNumber.split('').length-1)))
    }else{
      setCurrentNumber('0')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '×':
            handleMultiplyNumbers();
            break;
          case '÷':
            handleDivideNumbers();
            break;
          case '%':
            handleModNumbers();
            break;
          default: 
            break;
      }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="%" onClick={handleModNumbers}/>
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="÷" onClick={handleDivideNumbers}/>
          <Button label="⭠" onClick={handleBackSpace} />

        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="×" onClick={handleMultiplyNumbers}/>

        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={handleDecimalNumbers}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
