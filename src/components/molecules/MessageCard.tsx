import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({name,message,time,count,image,logoComponent,rightIcon,messageLeftIcon,onPress}:any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.leftContainer}>
        <View>
         <Image source={image} style={styles.image}/>
         {logoComponent}
         </View>
         <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.flexRow}> 
                {messageLeftIcon}
            <Text style={styles.message}>{message}</Text>
            </View>
         </View>
      </View>
      
      <View style={styles.rightContainer}>
        {time &&<Text style={styles.time}>{time}</Text>}
        {!!count && (
             <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>{count}</Text>
        </View>
        )}
        {rightIcon}
        
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:scale(20),
        paddingVertical:verticalScale(15),
    },
    image:{
        height:moderateScale(53),
        width:moderateScale(53),
        borderRadius:moderateScale(53)
    },
    name:{
        fontSize:moderateScale(14),
        fontWeight:"bold",
        color:'black'
    },
    message:{
        fontSize:moderateScale(13),
        color:"#889095",
        fontWeight:'500'
    },
    time:{
        color:"#889095",
        fontWeight:'bold',
        fontSize:moderateScale(12)
    },
    messageCountContainer:{
          backgroundColor:"#036a01",
          width:moderateScale(22),
          height:moderateScale(22),
          borderRadius:moderateScale(22),
          justifyContent:"center",
          alignItems:'center'
    },
    messageCount:{
        color:"white",
        fontSize:moderateScale(12)
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:scale(10)
    },
    rightContainer:{
        alignItems:'flex-end',
        gap:verticalScale(6)
    },
    flexRow:{
        flexDirection:"row",
        alignItems:'center',
        gap:scale(7)
    }
    
})
export default MessageCard






