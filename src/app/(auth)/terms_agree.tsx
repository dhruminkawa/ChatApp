import ButtomComp from '@/src/components/atoms/ButtomComp'
import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const TermsAgree = () => {
  const onAgree = () => {
     router.push("/(auth)/login")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to Whatsapp</Text>
        <Image style={styles.img_style} resizeMode='contain' source={imagePath.welcome} />
        <Text
           style={styles.description_text}
       >Read our  <Text style={styles.link_text}>Privacy Policy.</Text> Tap "Agree and continue" to accept the <Text style={styles.link_text}>Teams of Service.</Text></Text>
      <View style={{width:moderateScale(300)}}>
      <ButtomComp title="AGREE AND CONTINUE" onPress={onAgree} />
      </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"white",
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: verticalScale(100),
    paddingHorizontal:scale(25)
       
   },
   header:{
     alignItems:'center',
     gap:verticalScale(30)
 
   },
   footer:{
      alignItems:'center'

   },
   from_text:{
       fontSize:moderateScale(12),
       color:"#867373"
   },
   facebook_text:{
      fontSize:moderateScale(15),
      color:"#000",
      textTransform:'uppercase',
      fontWeight:"600"

   },
   welcome_text:{
    fontSize:moderateScale(29),
    fontWeight:"bold",
    marginBottom:verticalScale(10)
   },
   img_style:{
    width:moderateScale(250),
    height:moderateScale(250),
    borderRadius: moderateScale(250)

   },
   description_text:{
    textAlign:'center',
    fontSize:moderateScale(12)

   },
   link_text:{
    color:"#023fd8"
   }
   
})
export default TermsAgree 