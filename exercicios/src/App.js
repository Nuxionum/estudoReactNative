import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import Titulo from './componentes/Titulo'
import Botao from './componentes/Botao'
import BTN from './componentes/contador'
/*chamar estilo*/
// import Aleatorio from './componentes/aleatorio'
/*import Primeiro from './componentes/Primeiro'
import CompPadrao,{Comp1,Comp2} from './componentes/Multi'  
import MinMax from './componentes/min_max' */

export default () =>  (
    /*coloco no componente e .nome do style*/
    <View style={style.App}>   
            <BTN inicial={0}/>
            {/*<Titulo principal= 'Cadastro Produto' secundario= 'Tela de cadastro de produto'/> 
            <Botao />*/}
            {/*<Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <MinMax min={3} max={20} />
            <MinMax min={1} max={94} />
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1, /* ele cresce a tela inteira */
        justifyContent: 'center', /* eixo horizontal */
        alignItems: 'center',
        padding: 20,  // foi um paddin em tds as direções
        
    }
})