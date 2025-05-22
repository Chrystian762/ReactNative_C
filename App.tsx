import{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');



  const [resultado, setResultado] = useState('');

  const [grau, setGrau] = useState('');
const [fundoGrau, setFundoGrau] = useState('transparent');


  function calcularImc(){
    let alturaEmMetro = parseFloat(altura) / 100;
    let result = parseFloat(peso) / (alturaEmMetro * alturaEmMetro);
   


let msg = "";

if (result < 18.5) {
    msg = " Abaixo do peso.";
     setFundoGrau('#1e81eb');
}else if(result >= 18.5 && result <24.9  ){
  msg = " Peso normal.";
   setFundoGrau('#1bf51f');
}else if(result >= 25 && result < 29.9){
  msg = " Sobrepeso.";
 setFundoGrau('#faf339');
}else if(result >= 30 && result < 34.9){
  msg = " Obesidade grau 1.";
    setFundoGrau('#f2a735');
}else if(result >= 35 && result < 39.9){
  msg = " Obesidade grau 2.";
    setFundoGrau('#ff6f00');
}else{
  msg = "Obesidade grau 3.";
    setFundoGrau('#f50707');
}

 setResultado("Valor do IMC: "+result.toFixed(2));
 setGrau(msg);

  }




  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> IMC </Text>

    <View style={styles.bloco}>
      <Text style={styles.label}> Peso</Text>
      <TextInput
        keyboardType='numeric' 
        style={styles.input}
        value={peso}
        onChangeText={(valor)=>setPeso(valor)}
      />
    </View>
    <View style={styles.bloco}>
      <Text style={styles.label}> Altura</Text>
      <TextInput 
         keyboardType='numeric' 
        style={styles.input}
         value={altura}
        onChangeText={(valor)=>setAltura(valor)}
      />
    </View>
        <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc}>
               <Text style={styles.btnTxt}> Calcular</Text>
          </TouchableOpacity>
        </View>

           <View style={styles.bloco}>
           <Text style={styles.titulo}>{resultado}</Text>
           </View>

            <View style={styles.blocoGrau}>
  <Text style={[styles.grauTexto,  { backgroundColor: fundoGrau,}]}>
    {grau}
  </Text>
</View>



      </View>

   



     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },

  input:{
    borderWidth:1,
    width:'80%',
    marginLeft:'10%',
    fontSize:20,
    height:40,
    borderRadius:15,
    
    
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    fontFamily: 'times',
    fontWeight: 'bold',
    color:'#0516ab'
  },
  bloco:{
    width: '100%',
  },
  label:{
    marginLeft:'10%',
    fontSize:30,
    fontFamily: 'times',
    fontStyle:'italic',
    fontWeight: 'bold',
    color:'#0516ab'
    
  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'#0516ab',
    marginTop:15,
    borderRadius:15,
    height:35,
    justifyContent:'center'


  },

  btnTxt:{
    fontSize:20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    color:'white',
    textAlign:'center',
    
    
  },

  blocoGrau:{
    marginTop:100,
    width:'80%',
    textAlign:'center',
    alignItems: 'center', 
    marginLeft: '10%'
    
  

  },

  grauTexto: {
  textAlign: 'center',
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  padding: 15,
  borderRadius: 12,
 

},

});
