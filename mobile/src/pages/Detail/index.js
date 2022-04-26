import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import styles from './styles'

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => { }}>
          <Feather name="arrow-left" size={28} color="E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidents}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>AACD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>LIMPEZA DAS PRAIAS</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>60</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Planeta</Text>
        <Text style={styles.heroTitle}>Suas Contribuição faz a diferença</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

        </View>

      </View>



    </View>
  );
}