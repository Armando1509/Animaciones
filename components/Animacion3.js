import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

function Animacion3(props) {
    const [ animacion ] = useState( new Animated.Value(14) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 55,  // al valor al que llega
                duration: 5000 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <View>
            <Animated.Text style={[styles.texto,{fontSize:animacion}]}>Animacion 1</Animated.Text>
        </View>
     );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animacion3