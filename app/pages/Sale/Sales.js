import React,{useRef} from 'react';
import { useTheme } from '@react-navigation/native';
import HeaderStyle1 from '../../components/Headers/HeaderStyle1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/Input/CustomInput';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import TabButtonStyle2 from '../../components/Tabs/TabButtonStyle2';
import ToggleStyle1 from '../../components/Toggles/ToggleStyle1';
import FeatherIcon from 'react-native-vector-icons/Feather'
import AllSales from './AllSales';


const Sales = (props) => {

    const {colors} = useTheme();
    const buttons = ['Price', 'Stock','Online Store'];
    const scrollX = useRef(new Animated.Value(0)).current;
    const onCLick = i => this.scrollViewHome.scrollTo({ x: i * SIZES.width - 30 });
    const scrollX2 = useRef(new Animated.Value(0)).current;
    const onCLick2 = i => this.scrollViewHome2.scrollTo({ x: i * SIZES.width - 30 });

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                   <HeaderStyle1 title={'Sales List'}/>
                   <View style={{paddingVertical:30,margin:10}}>
                   <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Total Sales(2023-10-11)</Text>
                        <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Shs:100000</Text>
                            </View> 
                    <ScrollView>
                        


                            
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>

<AllSales/>

                        </View>
                    </ScrollView>

                    <View
                    style={{
                        paddingHorizontal:15,
                        paddingVertical:10,
                        backgroundColor: 'rgba(52, 52, 52, 0)',
                        flexDirection:'row',
                        opacity: 0.9,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.primary5,
                            paddingHorizontal:15,
                            paddingVertical:12,
                            borderRadius:10,
                            flex:1,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:5,
                            
                        }}
                        onPress={()=>props.navigation.navigate('AddSale')}
                    >
                        <FeatherIcon style={{marginRight:6}} size={20} color={COLORS.white} name='plus'/>
                        <Text style={{...FONTS.h6,color:COLORS.white,lineHeight:24}}>Add Sale</Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    card : {
        padding:15,
        borderRadius:SIZES.radius,
        marginBottom:15,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    inputStyle:{
        ...FONTS.fontLg,
        height:50,
        paddingLeft:60,
        borderWidth : 1,
        borderRadius: SIZES.radius,
    },
    inputIcon:{
        backgroundColor:COLORS.yellow,
        height:40,
        width:40,
        borderRadius:10,
        position : 'absolute',
        left:5,
        top : 5,
        alignItems:'center',
        justifyContent:'center',
    },
    eyeIcon:{
        position:'absolute',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        right:0,
        zIndex:1,
        top:0,
    },
    tabBody: {
        width: SIZES.width - 30,
    },
    inputviews:{
      borderWidth:0.8,
      margin:5,
      borderRadius:8,   
    }
})

export default Sales;