import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View} from 'react-native'

import styles from './style'

export default function Home() {
    return (
        <View style={styles.container}>
          <Text>See this code man!</Text>
          <Text>It's amazing!</Text>
          <StatusBar style="auto" />
        </View>
    )
}