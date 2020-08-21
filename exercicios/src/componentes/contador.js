import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default props => {

    const [numero, setNumero] = useState(props.inicial)

    function inc() {
        setNumero(numero + 1)
    }

    function dec() {
        setNumero(numero - 1)
    }


    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title='+' onPress={inc} color='red'/>
            <Button title='-' onPress={dec}/>
        </>
    )
}