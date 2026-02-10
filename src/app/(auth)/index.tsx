import imagePath from '@/src/constants/imagePath'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Auth = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
            <Image source={imagePath.logo} 
             style={styles.logo_style}
             resizeMode='contain'
             />
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
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:50
       
},
    header:{},
    body:{},
    footer:{
        alignItems:'center'
    },
    from_text:{
        fontSize:12,
        color:"#867373"

    },
    facebook_text:{
        fontSize:15,
        color:"#000"
    },
    logo_style:{
         width:70,
         height:70,
         borderRadius:10
    }
})
export default Auth