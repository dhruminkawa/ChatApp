import imagePath from '@/src/constants/imagePath'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ChatHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
       <View style={styles.nameContainer}>
        <Ionicons
            name="arrow-back-sharp"
            style={styles.backIcon}
            onPress={() => router.back()}
            />
            <Image
               source={imagePath.elon}
               style={styles.image}
               />
               <Text style={styles.name}>Elon musk</Text>
       </View>
       <View style={styles.actionButtonsContainer}>
        <Feather name="video" size={24} color="white" />
        <Ionicons name="call" size={24} color="white" />
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
       </View>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
     container:{ 
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:"black"
       

     },
     mainContainer:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
     },
     nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        
     },
     backIcon:{
        fontSize:24,
        color:"white"
     },
     image:{
        width:44,
        height:44,
        borderRadius:24

     },
     name:{
        fontSize:21,
        fontWeight:"700",
        marginStart:7,
         color:"white"
     },
     actionButtonsContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:20 
     }
})
export default ChatHeader