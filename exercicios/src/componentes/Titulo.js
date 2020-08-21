import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (
    <>
        <Text style={Estilo.txtGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)