import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const participants = ['Silas', 'Fernanda', 'Alice', 'Athos', 'Fofo', 'Vildon', 'Deusany', 'Deyce', 'Natan', 'Wolasse', 'Tuna', 'Alaídes', 'Divina', 'Anangelica', 'Lió']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o Participante! ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembrod de 2022
      </Text>
      <View style={styles.form}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView>

    </View>
  );

}