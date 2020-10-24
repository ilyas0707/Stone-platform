import React from 'react'
import Styles from './RealizationCreate.module.css'

import { Form } from './../../../components/Form/Form'

export const RealizationCreate = () => {
    const Role1 = [
        { type: "text", name: "client", label: "Покупатель"},
        { type: "number", name: "quantity", label: "Количество(m2)"},
        { type: "number", name: "price", label: "Стоимость(m2)"},
        { type: "number", name: "total", label: "Итого"},
    ]

    // const Role2 = [
    //     { type: "text", name: "carNumber", label: "Гос. номер"},
    //     { type: "text", name: "driver", label: "ФИО"},
    //     { type: "number", name: "invoice", label: "Накладная"},
    //     { type: "number", name: "cash", label: "Стоимость"},
    // ]

    const User = [Role1]

    const select = [
        { name: "categories", options: [
            { label: 'Категории', name: '' }, 
            { label: 'A1', name: 'A1' }, 
            { label: 'B2', name: 'B2' }, 
            { label: 'C3', name: 'C3' } 
        ] },
    ]

    return (
        <div className={Styles.create}>
            <Form data={ User } select={ select } />
        </div>
    )
}