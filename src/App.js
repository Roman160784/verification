import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './useTelegram';
import {Form} from './form/form.jsx'



function App() {

  const {tg, onClose, onToggleButton} = useTelegram()


  useEffect(() => {
    tg.ready()
  }, )
  

  return (
    <div className="App">
     gsdgsdfgsd
     <button onClick={onClose}>Закрыть</button>
     <Form/>
     <button onClick={onToggleButton}>Togle</button>
    </div>
  );
}

export default App;
