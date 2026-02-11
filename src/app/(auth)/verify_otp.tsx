import ButtomComp from '@/src/components/atoms/ButtomComp'
import OTPInput from "@codsod/react-native-otp-input"
import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'


const Verify_Otp = () => {
  const [otp, setOTP] = useState("")
  const onPress =() =>{

  }
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.head}>
     <AntDesign name="arrow-left" size={24} color="black" />
     <Text style={styles.headTitle}>Enter OTP Code</Text>
     </View>
     <View style={styles.body}>
      <Text>Code has been send to +91 11*******44</Text>
      <OTPInput
        length={4}
        onOtpComplete={(txt: string) => setOTP(txt)}
        style={styles.otpcontainer}
        inputStyle={styles.otpInput}
      />
      <Text style={styles.otpSendText}>Resend Code in <Text style={styles.counterText}>56</Text> s</Text>
     </View>
     <View style={styles.footer}></View>
     <ButtomComp  title="Verify" onPress={onPress} style={styles.verifyButton}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    padding:moderateScale(20),
    flex:1,
    justifyContent:"space-between",
    paddingTop:verticalScale(30),

  },
  head:{
    flexDirection:'row',
    alignItems:'center',
    gap:scale(10)
  },
  backButton:{
    fontSize: moderateScale(24),
    color:'black',
    fontWeight:'bold'
  },
  headTitle:{
    fontSize: moderateScale(24),
    color:'black',
    fontWeight:'bold'
  },
  body:{
    alignItems:'center',
    gap:verticalScale(25)
  },
  otpSendText:{
    fontSize:moderateScale(16),
    fontWeight:'400'
  },
  counterText:{
      color:"#00a884"
  },
  resendText:{},
  footer:{},
  verifyButton:{
    borderRadius:moderateScale(30)
  },
  otpcontainer:{
    gap:scale(8),
    
  },
  otpInput:{
    borderColor:"black",
    borderRadius:moderateScale(15),
    width:scale(60),
    height:verticalScale(50)
  },
  
})
export default Verify_Otp