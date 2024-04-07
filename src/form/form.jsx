import React, { useCallback, useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from '../useTelegram';

export const Form = () => {
    const [type, setType] = useState('')
    const [numberSi, setNumberSi] = useState('')
    const [certif, setCertif] = useState('')
    const [year, setYear] = useState('2024')
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            type, 
            numberSi,
            certif,
            year,
        }
        tg.sendData(JSON.stringify(data))
    }, [certif, numberSi, tg, type, year])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])



    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Поиск СИ по Вашим параметрам'
        })
    }, [tg.MainButton])





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
            <h3>{`Введите параметр (параметры) поиска`}</h3>
            <input className={'input'} onChange={onChangeType} value={type} type="text" placeholder='Тип СИ' />
            <input className={'input'} onChange={onChangeNumberSi} value={numberSi} type="text" placeholder='Номер СИ' />
            <input className={'input'} onChange={onChangeCertif} value={certif} type="text" placeholder='Номер свидетельства XX-XXXXXX-не обязятельно'/>
            <select onChange={onChangeYear} className={'select'}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option> 
            </select>
        </div>
    )

}