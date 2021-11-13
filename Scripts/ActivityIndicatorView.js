/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState, useCallback } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { colors } from './Styles.js'

export default function ActivityIndicatorView({ size }) {

  const [style, setColorStyle] = useState(colors)
  const [aSize, setSize] = useState('large')

  useEffect(() => {
    if (size !== undefined) {
      setSize(size)
    }
  }, [])

  return(<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator color={style.secondaryHighlight} size={aSize} color={style.secondaryHighlight} />
  </View>)

}
