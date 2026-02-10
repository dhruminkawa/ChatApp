import { Stack } from 'expo-router'
import React from 'react'

const AUTHStack = () => {
  return (
    <Stack screenOptions={{ headerShown:false}}>
      <Stack.Screen  name="index" />
      <Stack.Screen name="terms_agree" />
      <Stack.Screen name="login" />
      <Stack.Screen name="verfiy_otp" />

    </Stack>
  )
}

export default AUTHStack