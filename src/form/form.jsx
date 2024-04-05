import React, { useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from '../useTelegram';

export const Form = () => {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Поиск'
        })
    }, )

    


    const [type, setType] = useState('')
    const [numberSi, setNumberSi] = useState('')
    const [certif, setCertif] = useState('')
    const [year, setYear] = useState('2024')


   

    const onChangeType = (e) => {
        setType(e.target.value)
    }
    const onChangeNumberSi = (e) => {
        setNumberSi(e.target.value)
    }
    const onChangeCertif = (e) => {
        setCertif(e.target.value)
    }
    const onChangeYear = (e) => {
        setYear(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите параметры поиска</h3>
            <input onChange={onChangeType} value={type} type="text" placeholder='Тип СИ' />
            <input onChange={onChangeNumberSi} value={numberSi} type="text" placeholder='Номер СИ' />
            <input onChange={onChangeCertif} value={certif} type="text" placeholder='Номер свидетельства'/>
            <input onChange={onChangeYear} value={year} type="text" placeholder='Год поверки' />
        </div>
    )

}