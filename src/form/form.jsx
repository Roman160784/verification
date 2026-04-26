

import React from 'react';
import './form.css';

export const Form = ({ formData, onChange }) => {
  return (
    <div className={'form'}>
      <h3>{`Введите параметр (параметры) поиска`}</h3>
      <input
        className={'input'}
        onChange={(e) => onChange('name', e.target.value)}
        value={formData.name}
        type="text"
        placeholder="Наименование CИ"
      />
      <input
        className={'input'}
        onChange={(e) => onChange('type', e.target.value)}
        value={formData.type}
        type="text"
        placeholder="Тип СИ"
      />
      <input
        className={'input'}
        onChange={(e) => onChange('numberSi', e.target.value)}
        value={formData.numberSi}
        type="text"
        placeholder="Номер СИ"
      />
      <input
        className={'input'}
        onChange={(e) => onChange('certif', e.target.value)}
        value={formData.certif}
        type="text"
        placeholder="Номер свидетельства XX-XXXXXX-не обязательно"
      />
      <select
        onChange={(e) => onChange('year', e.target.value)}
        className={'select'}
        value={formData.year}
      >
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
