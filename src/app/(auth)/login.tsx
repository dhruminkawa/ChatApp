// import ButtomComp from '@/src/components/atoms/ButtomComp';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { router } from 'expo-router';
// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters';



// const Login = () => {
//   const [visible,setVisible] = useState(true)
//   const onNextButtonClick =()=>{
//     router.push("/(auth)/verify_otp")
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.heading_container}>
//             <Text style={styles.heading}>Enter your phone number</Text>
//             <Text style={styles.description}>
//               Whatsapp will need to verify your phone number.
//               <Text style={styles.link}> What's my number ?</Text>
//             </Text>
//         </View>
//         <View style={styles.input_maincontainer}>
//           <View style={styles.dropdown}>
//             <View />
//             <Text style={styles.dropdown_title}>India</Text>
//             <AntDesign name="caret-down" size={moderateScale(14)} color="black" />
//           </View>
//             <View style={styles.horizontal_line} /> 
//             <View style={styles.input_container}>
//               <View style={styles.countrycode}>
//                 <Text style={styles.countrycode_text}>+91</Text>
//                 <View style={styles.horizontal_line} />
//               </View>
//               <View style={{gap:verticalScale(10), flex:1}}>
//               <TextInput style={styles.input} placeholder='Enter Your Number'/>
//               <View style={styles.horizontal_line} />
//               </View>
//             </View>
//         </View>
//       </View>
//       <View style={styles.footer}>
//         <ButtomComp title="Next" style={{paddingHorizontal:scale(29)}} onPress={onNextButtonClick}/>


//       </View>
//       {/* <CountryPicker visible={visible} /> */}
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//    container:{
//     flex:1,
//     justifyContent:"space-between",
//     paddingVertical: verticalScale(70),
//     alignItems:'center',
//     paddingHorizontal:scale(40)
//    },
//    header:{
//     gap:verticalScale(50)
//    },
//    footer:{},
//    heading_container:{
//     gap:verticalScale(20)
//    },
//    input_maincontainer:{


//    },
//    input_container:{
    
//     paddingVertical:verticalScale(5),
//     flexDirection:'row',
//     alignItems:'center',
//     gap:scale(20)

//    },
//    heading:{
//     fontSize:moderateScale(20),
//     color:'#000',
//     fontWeight:'bold',
//     textAlign:'center'
//    },
//    description:{
//     textAlign:'center',  
//     fontSize:moderateScale(13),
//     fontWeight:"400"
//    },
//    link:{
//     color:"#002AC0"
//    },
//    horizontal_line:{
//     width:'100%',
//     height:verticalScale(1),
//     backgroundColor:"#05aa82"
//    },
//    dropdown:{
//     flexDirection:"row",
//     alignItems:"center",
//     justifyContent:'space-between',
//     paddingVertical:verticalScale(10),
//     paddingHorizontal:scale(20)

//    },
//    dropdown_title:{
//     fontSize:moderateScale(14),
//     fontWeight:'500'

//    },
//    input:{
//     fontSize:moderateScale(15)
//    },
//    countrycode:{
//     gap:verticalScale(16),
//      fontSize:moderateScale(16),
//         fontWeight:'500',
//         color:"black",

//    },
//    countrycode_text:{
//         fontSize:moderateScale(18),
//         fontWeight:'500',
//         color:"black",
//         marginTop:11
//    }
 
// })
// export default Login





import ButtonComp from "@/src/components/atoms/ButtomComp";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";

import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";


const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+ 91");

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}> What’s my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity
            style={styles.dropDown_container}
            onPress={() => setVisible(true)}
          >
            <View />
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign name="caret-down" size={moderateScale(14)} color="black" />
           
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
              />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          style={{ paddingHorizontal: scale(29) }}
          onPress={onNextButtonClick}
        />
      </View>
      {visible && (
        <CountryPicker
          visible={true}
          onClose={() => setVisible(false)}
          withFilter
          onSelect={(e: any) => {
            setCountryCode(`+${e.callingCode[0]} `);
            setCountryName(e.name);
          }}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
    alignItems: "center",
    paddingHorizontal: scale(40),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {},
  input_container: {
    paddingVertical: verticalScale(5),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
  },
  link_description: {
    color: "#002AC0",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },
  dropDown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropdown_title: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  input: {
    fontSize: moderateScale(16),
  },
  country_code: {
    gap: verticalScale(16),
    fontSize:moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  country_code_text: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: "black",
    marginTop:11
  },
});
export default Login;