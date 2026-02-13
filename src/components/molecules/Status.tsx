import imagePath from '@/src/constants/imagePath'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MessageCard from './MessageCard'

const Status = () => {
  const data = [
    {
      image:imagePath.logo,
      name:'Elon Musk',
      message:"10 minutes ago",
  
    },
    {
      image:imagePath.logo,
      name:'Virat Kholi ',
      message:"Today, 7:29am",

    },
    {
      image:imagePath.logo,
      name:'Rohit sharma',
      message:"Today, 3:40am"
     
      
    }
  ]
  return (
    <View style={{flex:1, backgroundColor:"white", gap:10}}>
      <MessageCard 
           name={"Dhrumin"} 
           message={"Tap to add status update"} 
           image={imagePath.logo} 
           logoComponent={<View style={styles.logoComponentContainer}>
            <Entypo name="plus" size={moderateScale(21)} color="black" />
           </View>}
           />
           <Text style={{fontSize:17, left:20}}>Recents updates</Text>
      <FlatList 
         data={data}
         renderItem={({item}) =>{
          return(
          <MessageCard 
           name={item?.name} 
           message={item?.message} 
           image={item?.image} 
           />
          )
         }}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    logoComponentContainer:{
      width:moderateScale(25),
      height:moderateScale(25),
      borderRadius:moderateScale(50),
      backgroundColor:"#008069",
      position:'absolute',
      bottom:verticalScale(-5),
      right:scale(-5),
      borderWidth:2,
      borderColor:"black"
    },
  
})
export default Status