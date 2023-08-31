import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd(){
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembrod de 2022
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );

}