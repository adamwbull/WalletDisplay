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
  primaryHighlight: '#A44200',
  secondaryHighlight: '#A44200',
  primaryBackground: '#2C2D32', 
  secondaryBackground: '#1E201D',
  primaryTextColor: '#EAEAEA',
  secondaryTextColor: '#A44200',
  header: '#FAFAFA',
  headerBorder: '#ebeef6',
}

export const main = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
      color:colors.primaryTextColor,
      marginTop:10,
      textAlign: 'center',
      fontSize:20,
      fontFamily:'Poppins',  
    },
    midContainer: {
        width:'100%',
        height:'100%',
    },
    web3Container: {
        width:'100%',
        height:'100%',
        padding:20,
        justifyContent: 'space-between',
    },
    web3Header: {
        flex:1,
    },
    web3HeaderText: {
        fontFamily:'Poppins',
        fontSize:20,
        color:colors.primaryTextColor,
    },
    web3Footer: {
        flex:1,
        justifyContent: 'flex-end'
    },
    web3LoginContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flex:2,
    },
    web3LoginHeader: {
        textAlign: 'center',
        color:colors.primaryTextColor,
        fontFamily:'PoppinsSemiBold',
        fontSize:35,
        borderBottomColor:colors.primaryHighlight,
        borderBottomWidth:3,
    },
    web3LoginDescription: {
        textAlign:'center',
        fontFamily:'Poppins',
        color:colors.primaryTextColor,
        fontSize:22,
        margin:20
    },
    web3LoginButton: {
        backgroundColor:colors.primaryHighlight,
        borderRadius:15,
        paddingBottom:12,
        paddingLeft:20,
        paddingRight:20
    },
    web3LoginButtonTitle: {
        textAlign:'center',
        fontFamily:'Poppins',
        color:colors.primaryTextColor,
        fontSize:20
    },
    web3Account: {
        borderRadius:20,
        padding:20,
        backgroundColor:colors.primaryBackground,
    },
    web3AccountTitle: {
        color:colors.primaryTextColor,
        fontFamily:'PoppinsSemiBold',
        fontSize:26
    },
    web3AccountAddress: {
        color:colors.primaryTextColor,
        fontFamily:'Poppins',
        fontSize:22,
        padding:10,
        borderRadius:10,
        backgroundColor:colors.secondaryBackground,
    },
})

export const empty = StyleSheet.create({
  container: {
    flex:1,
  }
})