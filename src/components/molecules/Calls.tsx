import imagePath from '@/src/constants/imagePath';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from './MessageCard';
const Calls = () => {
  const data = [
    {
      image:imagePath.logo,
      name:'Elon Musk',
      message:"today, 2:00 pm",
      rightIcon:<FontAwesome5 name="video"  style={styles.callIcon} />,
      messageLeftIcon:( <MaterialIcons name="call-received" style={[styles.messageRightIcon,{color:'green'}]} />

      )
      
    },
    {
      image:imagePath.logo,
      name:'Virat Kholi ',
      message:"25 June, 1:30 pm",
      rightIcon:<Ionicons name="call"  style={styles.callIcon}/>, 
      messageLeftIcon:(<MaterialIcons name="call-missed" style={[styles.messageRightIcon,{color:'red'}]}/>)

 
    },
    {
      image:imagePath.logo,
      name:"Rohit Sharma",
      message:'24 May, 1:00 pm',
      rightIcon:<FontAwesome5 name="video"  style={styles.callIcon} />,
      messageLeftIcon:(<MaterialIcons name="call-missed" style={[styles.messageRightIcon,{color:'red'}]}/>)
      
    
      
    }
  ]
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <FlatList 
         data={data}
         renderItem={({item}) =>{
          return <MessageCard 
          name={item?.name} 
          message={item?.message} 
          image={item?.image} 
          rightIcon={item?.rightIcon}
          messageLeftIcon={item?.messageLeftIcon}
          
        />
         }}
         />
    </View>
  )
}
const styles = StyleSheet.create({
   callIcon:{
      color:"#008069",
      fontSize:moderateScale(21)
   },
   messageRightIcon:{
    fontSize:moderateScale(18)
   }
})
export default Calls