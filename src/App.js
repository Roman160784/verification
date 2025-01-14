// import { useEffect } from 'react';
// import './App.css';
// import { useTelegram } from './useTelegram';
// import {Form} from './form/form.jsx'



// function App() {

//   const {tg, onToggleButton} = useTelegram()


//   useEffect(() => {
//     tg.ready();
// }, [tg])
  

//   return (
//     <div className="App">
//       <h3> бот ищет СИ с Государственной поверкой</h3>
    
//      {/* <button onClick={onClose}>Закрыть</button> */}
//      <Form/>
//      <button style={{ borderRadius: '10px', border: '2px solid blueviolet' }} onClick={onToggleButton}>Сохранить</button>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './useTelegram';
import { Form } from './form/form.jsx';

function App() {
  const { tg } = useTelegram();
  const [showCancel, setShowCancel] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    numberSi: '',
    certif: '',
    year: '2025',
  });

  useEffect(() => {
    tg.ready();
  }, [tg]);

  const handleSave = () => {
    setShowCancel(true);
    tg.MainButton.setParams({
      text: 'Поиск СИ по Вашим параметрам',
    });
    tg.MainButton.show();
  };

  const handleCancel = () => {
    setShowCancel(false);
    tg.MainButton.hide(); 
    setFormData({
      name: '',
      type: '',
      numberSi: '',
      certif: '',
      year: '2025',
    });
  };

  const handleFormChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <div className="App">
      <h3>бот ищет СИ с Государственной поверкой</h3>
      <Form formData={formData} onChange={handleFormChange} />

      {showCancel ? (
        <button
          style={{ borderRadius: '10px', border: '2px solid red' }}
          onClick={handleCancel}
        >
          Отмена
        </button>
      ) : (
        <button
          style={{ borderRadius: '10px', border: '2px solid blueviolet' }}
          onClick={handleSave}
        >
          Сохранить
        </button>
      )}
    </div>
  );
}

export default App;