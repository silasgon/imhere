import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const participants = ['Silas', 'Fernanda', 'Alice', 'Athos', 'Fofo', 'Vildon', 'Deusany', 'Deyce', 'Natan', 'Wolasse', 'Tuna', 'Alaídes', 'Divina', 'Anangelica', 'Lió']

  function handleParticipantAdd() {
    if (participants.includes("Silas")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

      {/*       <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView> */}

    </View>
  );

}