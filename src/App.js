import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './useTelegram';
import {Form} from './form/form.jsx'



function App() {

  const {tg, onToggleButton} = useTelegram()


  useEffect(() => {
    tg.ready();
}, [tg])
  

  return (
    <div className="App">
      <h3> бот ищет СИ с Государственной поверкой</h3>
    
     {/* <button onClick={onClose}>Закрыть</button> */}
     <Form/>
     <button onClick={onToggleButton}>Сохранить</button>
    </div>
  );
}

export default App;
