import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { transform } from "typescript";

function Animacion5() {
    const [animacion] = useState(new Animated.Value(1))
    const presionarBtn = () =>{
        Animated.spring(animacion,{
            toValue: .7,
            useNativeDriver: true,
        }).start()
    }
    const soltarBtn = () =>{
        Animated.spring(animacion, {
            toValue: 1,
            friction: 2, // mas bajo mas rebote
            tension: 10,
            useNativeDriver: true,
        }). start()
    }
    const estiloAnimacion ={
        transform:[{scale: animacion}]
    }
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}
      >
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height:80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
export default Animacion5;
