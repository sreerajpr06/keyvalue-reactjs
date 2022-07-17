import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import CreateEmployee from './CreateEmployee';
import { useEffect, useState } from 'react';

function App() {
  const onClick = () => {
    const val = prompt('Enter your name');
    console.log(val);
  }
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onChange = (value) => {
    setUserName(value);
  }

  // useEffect(() => {
  //   setDisplayName('Sample Name');
  // }, [])

  useEffect(() => {
    if(userName)
      setDisplayName(userName)
    else 
      setDisplayName('SampleName')
  }, [userName])


  return (
    <div className="App">
      <div>
        {/* <InputField label='UserName' onChange={onChange}/>
        <InputField label='Password' onChange={onChange}/>
        <Button label='Login' handleClick={() => {}} />
        {displayName && <h1>Hello {displayName}</h1>} */}
      </div>
    </div>
  );
  // <CreateEmployee />
}

export default App;
