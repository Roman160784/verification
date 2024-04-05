import React, { useCallback, useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from '../useTelegram';

export const Form = () => {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Поиск'
        })
    }, [tg.MainButton])

  


    useEffect(() => {
        tg.WebApp.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.WebApp.offEvent('mainButtonClicked', onSendData)   
        }
    }, )


    const [type, setType] = useState('')
    const [numberSi, setNumberSi] = useState('')
    const [certif, setCertif] = useState('')
    const [year, setYear] = useState('2024')


   const onSendData = useCallback(() => {
        const data = {
            type, 
            numberSi,
            certif,
            year,
        }
        tg.sendData(JSON.stringify(data))
    }, [certif, numberSi, tg, type, year])

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
            <input className={'input'} onChange={onChangeType} value={type} type="text" placeholder='Тип СИ' />
            <input className={'input'} onChange={onChangeNumberSi} value={numberSi} type="text" placeholder='Номер СИ' />
            <input className={'input'} onChange={onChangeCertif} value={certif} type="text" placeholder='Номер свидетельства'/>
            <input className={'input'} onChange={onChangeYear} value={year} type="text" placeholder='Год поверки' />
        </div>
    )

}