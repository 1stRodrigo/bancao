import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, gen: 'Maculino'},
    {key: 2, gen: 'Feminino'},
    {key: 3, gen: 'Prefiro não dizer'},
  ])
  const [limite, setLimite] = useState(250);
  const [estudante, setEstudante] = useState(false);

  function abrirConta(){

    if(nome === ''|| idade === ''){
      alert('Preencha todos os campos corretamente.')
      return;
    }

    alert(
      'Conta aberta com sucesso. \n\n' + 
      'Nome: '+nome + '\n' + 
      'Idade: ' + idade + '\n' +
      'Sexo: '+ sexo[sexoSelecionado].gen + ' \n' +
      'Limite Conta: ' + limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
      );

  }

  let sexoItem = sexo.map( (v, k) =>{
    return <Picker.Item key={k} value={k} label={v.gen} />
  });

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <Text style={styles.textoHeader}>Bancao</Text>
      <Text>Abra sua conta</Text>
      </View>

      <Text style={styles.textoTitles}>Nome: {nome} </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={ (text) => setNome(text) }
      />

      <Text style={styles.textoTitles}>Idade: {idade}</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua idade'
        onChangeText={ (text) => setIdade(text)}
        keyboardType='numeric'
      />

      <Text style={styles.textoTitles}>Sexo: {sexo[sexoSelecionado].gen}</Text>
      <Picker
        style={styles.input}
        selectedValue={sexoSelecionado}
        onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue) }
      >
        {sexoItem}
      </Picker>

      <Text style={styles.textoTitles}>Limite: {limite.toFixed(0)}</Text>
      <Slider
      style={styles.sliderLimite}
      minimumValue={250}
      maximumValue={2000}
      value={limite}
      onValueChange={ (limiteSelecionado) => setLimite(limiteSelecionado) }
      />


      <Text style={styles.textoTitles}>Estudante: {estudante ? 'SIM' : 'NÃO'} </Text>
      <Switch
      value={estudante}
      onValueChange={(valorEstudante) => setEstudante(valorEstudante)}
      trackColor="#00c300"
      />

    <TouchableOpacity style={styles.botao} onPress={ abrirConta}>
      <Text style={styles.textoHeader}>Abrir Conta</Text>
    </TouchableOpacity>

    
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems:'center',
    marginBottom: 15,
    marginTop: 10,
  },
  textoHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoTitles: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  botao: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1999',
    borderRadius: 150,
    margin: 20
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 15,
    padding: 15,
    backgroundColor: '#eee',
  },
  sliderLimite: {
    marginTop: 5,
    marginBottom: 15,
  }
});
