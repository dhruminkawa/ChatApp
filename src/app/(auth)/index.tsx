import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);
     
    let navigate_to_welcome =() => {
        router.push("/(auth)/terms_agree")
    };

    let loading_timeout = () =>{
        setIsLoading(true);
        setTimeout(navigate_to_welcome,3000)
    }
      
    useEffect(() => {
       const timeout =  setTimeout(loading_timeout,2000) 
         return () => {
            clearTimeout(timeout)
         }
            
    },[]);

  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
            <Image source={imagePath.logo} 
             style={styles.logo_style}
             resizeMode='contain'
             />
             <Text style={styles.whatsapp_text}>Whatsapp</Text>
        </View>
        <View style={styles.footer}>
            {isLoading ? (
                <>
                 <ActivityIndicator  size={moderateScale(40)}  color={"#0ccc83"}/>
                 <Text style={styles.loading_text}>Loading...</Text>
                </>
            ) : (
                <>
                <Text style={styles.from_text}>From</Text>
                <Text style={styles.facebook_text}>Facebook</Text>
                </>
            )}
            
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:verticalScale(70)
       
},
    header:{},
    body:{
        alignItems:'center',
        gap:  verticalScale(5)
    },
    footer:{
        alignItems:'center',
        height:verticalScale(80),
        backgroundColor:"red ",
        justifyContent:'flex-end'
    },
    from_text:{
        fontSize:moderateScale(12),
        color:"#867373"

    },
    facebook_text:{
        fontSize:moderateScale(15),
        color:"#000"
    },
    logo_style:{
         width: moderateScale(70),
         height: moderateScale(70),
         borderRadius:moderateScale(10)
    },
    whatsapp_text:{
        fontSize:moderateScale(30),
        color:"#000",
        fontWeight:'bold'
    },
    loading_text:{
        fontSize:moderateScale(20),
        color:"#00a884",
        fontWeight:'bold',
        marginTop:verticalScale(10)
    }
})
export default Auth