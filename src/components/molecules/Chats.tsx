import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, View } from 'react-native'
import MessageCard from './MessageCard'

const Chats = () => {
  const onPressFunction =() =>{
    router.push('/chat')
  }
  const data = [
    {
      image:imagePath.elon,
      name:'Elon Musk',
      message:"How are you",
      time:"5:27 am",
      messageCount:1
    },
    {
      image:imagePath.virat,
      name:'Virat Kholi ',
      message:"where are you ?",
      time:"6:27 am",
      messageCount:1
    },
    {
      image:imagePath.rohit,
      name:'Rohit sharma',
      message:"helo",
      time:"7:27 am",
      
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
          time={item.time} 
          count={item?.messageCount} 
          onPress={onPressFunction}
          />
         }}
         />
    </View>
  )
}

export default Chats



