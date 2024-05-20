import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

function Animacion2(props) {
    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450,  // al valor al que llega
                duration: 1000 // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <Animated.View
            style={[
                styles.caja,
                {
                    width: animacion,
                    height: animacion
                }
            ]}
        >
           
        </Animated.View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})

export default Animacion2