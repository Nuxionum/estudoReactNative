import React from 'react'
import {Button} from 'react-native'


export default props => {
    function execultar() {console.warn('Exec!!!')}
    return (
        <>
            <Button
                title='Me clique'
                onPress={execultar}
            />

            <Button 
                title='Sou o butão 2'
                onPress={function exec(){console.warn('BTN2')}}
            />

            <Button 
                title='Sou o butão 3'
                onPress={()=>(console.warn('BTN3'))}
            />

        </>
    )
}

