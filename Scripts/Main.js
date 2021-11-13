import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Linking, Animated, Image, StyleSheet, Text, View } from 'react-native';
import { useLinkTo, Link } from '@react-navigation/native';
import { main, colors } from '../Scripts/Styles.js';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-web';
import Web3 from 'web3'
import ActivityIndicatorView from './ActivityIndicatorView.js'
export default function Empty() {
    
  const linkTo = useLinkTo()

  // Styling variables.
  const [styles, setStyles] = useState(main)

  // Stage control variables.
  const [loading, setLoading] = useState(false)
  const [web3ErrorScreen, setWeb3ErrorScreen] = useState(false)

  // Web3 variables.
  const [web3Enabled, setWeb3Enabled] = useState(false)
  const [web3Loading, setWeb3Loading] = useState(false)
  const [web3Client, setWeb3Client] = useState(undefined)
  const [web3Accounts, setWeb3Accounts] = useState([])

  // -- Stage control functions. -- //

  // Attempt to connect wallet and then log user in.
  const attemptConnection = async () => {

    setLoading(true)
    setWeb3Loading(true)

    var client = await connectWallet()

    console.log('Wallet connection returned', client)
    if (client != false) {

      var accounts = await ethereum.request({ method: 'eth_accounts' });
      console.log('accounts:',accounts)
      setWeb3Accounts(accounts)
      setWeb3Loading(false)
      setLoading(false)
      setWeb3Enabled(true)
      
    } else {

      setWeb3ErrorScreen(true)
    }

  }

  // -- Web3 functions. -- //

  // Check if a wallet has inserted the ethereum object and attempt connection.
  const connectWallet = async () => {

    console.log('Attempting to connect wallet...')
    if (typeof window.ethereum !== 'undefined') {

      var client = new Web3(window.ethereum)
      setWeb3Client(client)

      // Request account access.
      try {
        
        await window.ethereum.enable()
        return client

      } catch (e) {

        return false

      }

    }

    return false

  }


  useEffect(() => {

  })

  return (<View style={styles.container}>
    {loading && (<View style={styles.loadingContainer}>
      <ActivityIndicatorView />
      {web3Loading && (<Text style={styles.loadingText}>Please sign in your wallet then return here.</Text>)}
    </View>) 
    || (<View style={styles.midContainer}>
        {web3Enabled && (<View style={styles.web3Container}>
          <View style={styles.web3Header}>
            <Text style={styles.web3HeaderText}>WalletDisplay v1.0</Text>
          </View>
          <View styles={styles.web3Accounts}>
            {web3Accounts.map((account, accountIndex) => {

              return (<View style={styles.web3Account} key={'account'+accountIndex}>
                <Text style={styles.web3AccountTitle}>Account #{accountIndex}</Text>
                <Text style={styles.web3AccountAddress}>{account}</Text>
              </View>)

            })}
          </View>
          <View style={styles.web3Footer}>
            <Text style={styles.web3HeaderText}></Text>
          </View>
        </View>) 
        || (<View style={styles.web3Container}>
            <View style={styles.web3Header}>
              <Text style={styles.web3HeaderText}>WalletDisplay v1.0</Text>
            </View>
            {web3ErrorScreen && (<View style={styles.web3ErrorContainer}>
            
            </View>)
            || (<View style={styles.web3LoginContainer}>
                <Text style={styles.web3LoginHeader}>Welcome to WalletDisplay!</Text>
                <Text style={styles.web3LoginDescription}>Your all-in-one dashboard for wallet management.</Text>
                <Button 
                    title={'Connect Ethereum Wallet'}
                    onPress={() => attemptConnection()}
                    titleStyle={styles.web3LoginButtonTitle}
                    buttonStyle={styles.web3LoginButton}
                />
            </View>)}
            <View style={styles.web3Footer}>
                <Text style={styles.web3HeaderText}></Text>
            </View>
        </View>)}
    </View>)}
  </View>)
}
