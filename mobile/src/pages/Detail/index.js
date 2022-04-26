import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'


import styles from './styles'

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois quero participar a iniciativa x';

  function navigateBack() {
    navigation.goBack()
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Heroi do caso: Cadelinha atropelada',
      recipients: ['ygorpereira.dev@gmail.com'],
      body: message,
    })

  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5521978788006&text=${message}`);



  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidents}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>AACD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>LIMPEZA DAS PRAIAS</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>60</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Planeta</Text>
        <Text style={styles.heroTitle}>Você faz diferença</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

        </View>

      </View>



    </View>
  );
}