import Calls from '@/src/components/molecules/Calls';
import Chats from '@/src/components/molecules/Chats';
import Status from '@/src/components/molecules/Status';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Main = () => {
  const [currentPage,setCurrentPage] = useState("calls");
  const ActivePage =() =>{
    switch(currentPage){
      case "chat":
        return <Chats /> ;
      case "status":
        return <Status />;
        case "calls":
          return <Calls />;
          default: 
          return <Chats />
    }
  }
  const WhatsAppHeader = () => {
    return <View style={styles.whatsappHeaderStyle}> 
      <Text style={styles.whatsappText}>WhatsApp</Text>
      <View style={styles.iconContainer}>
        <Feather name="search"  style={styles.headerIcon} />
        <Entypo name="dots-three-vertical"  style={styles.headerIcon} onPress={() => alert("comming soon")} /></View>
    </View>
  }
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="#008069" />
      <WhatsAppHeader />
      <View style={styles.topBarContainer}>
        {
          ["chats","status",'calls'].map((item,index)=>{
            return <TouchableOpacity key={index} onPress={() =>
              setCurrentPage(item)} 
              style={[styles.topBarButton, item==currentPage &&{
                borderColor:"white"
              }]}
              >
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          })
        }
      </View>
      {ActivePage()}</View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    backgroundColor:"#008069"
  },
  topBarContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:scale(10),
    backgroundColor:"#008069",
    gap:scale(10),
    marginBottom:1
    
  
  },
  topBarButton:{
     flex:1, 
     alignItems:'center',
     borderBottomWidth:3,
     paddingBottom:verticalScale(10),
     borderColor:"#008069"
  },
  topBarText:{
    fontSize:moderateScale(14),
    fontWeight:'bold',
    color:'white',
    textTransform:'uppercase'

  },
  headerIcon:{
    fontSize:moderateScale(24),
    color:"white"
  },
  whatsappHeaderStyle:{
    backgroundColor:"#008069",
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(12),
    paddingVertical:verticalScale(10)
  },
  iconContainer:{
    flexDirection:'row',
    gap:scale(10)
  },
  whatsappText:{
    fontSize:moderateScale(20),
    fontWeight:'bold',
    color:'white',
    marginBottom:15
  }
  
})
export default Main