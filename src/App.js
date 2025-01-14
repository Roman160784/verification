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
import { useEffect, useState, useCallback } from 'react';
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

  const handleSearch = useCallback(() => {
    console.log("Отправляем данные в Telegram:", formData);
    tg.sendData(JSON.stringify(formData)); // Отправляем данные в Telegram
  }, [formData, tg]);

  useEffect(() => {
    tg.ready();
    tg.onEvent('mainButtonClicked', handleSearch);

    return () => {
      tg.offEvent('mainButtonClicked', handleSearch);
    };
  }, [tg, handleSearch]);

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
          style={{ borderRadius: '10px', border: '2px solid red', color: 'red', marginLeft: '136px' }}
          onClick={handleCancel}
        >
          Очистить форму
        </button>
      ) : (
        <button
          style={{ borderRadius: '10px', border: '2px solid blueviolet', marginLeft: '136px' }}
          onClick={handleSave}
        >
          Сохранить
        </button>
      )}
    </div>
  );
}

export default App;