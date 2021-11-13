import { Dimensions, Appearance, StyleSheet } from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const btnColors = {
  primary:'#007ac8',
  caution:'#f1c40f',
  danger:'#e74c3c',
  success:'#2ecc71',
  info:'#41C3E0',
  lightBackground: '#FAFAFA',
}

export const colors = {
  primaryHighlight: '#003f87',
  secondaryHighlight: '#007ac8',
  primaryBackground: '#ffffff', 
  secondaryBackground: '#ebeef6',
  mainTextColor: '#1c2023',
  secondaryTextColor: '#667986',
  header: '#FAFAFA',
  headerBorder: '#ebeef6',
}

export const app = StyleSheet.create({
  container: {
    flex:1,
  }
})

export const empty = StyleSheet.create({
  container: {
    flex:1,
  }
})