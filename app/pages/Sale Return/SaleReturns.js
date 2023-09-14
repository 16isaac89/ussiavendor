import React,{useRef} from 'react';
import { useTheme } from '@react-navigation/native';
import HeaderStyle1 from '../../components/Headers/HeaderStyle1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/Input/CustomInput';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import TabButtonStyle2 from '../../components/Tabs/TabButtonStyle2';
import ToggleStyle1 from '../../components/Toggles/ToggleStyle1';
import FeatherIcon from 'react-native-vector-icons/Feather'
import BilledItem from '../components/BilledItem';
import { IMAGES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';


const SaleReturns = (props) => {

    const {colors} = useTheme();
    const buttons = ['Price', 'Stock','Online Store'];
    const scrollX = useRef(new Animated.Value(0)).current;
    const onCLick = i => this.scrollViewHome.scrollTo({ x: i * SIZES.width - 30 });
    const scrollX2 = useRef(new Animated.Value(0)).current;
    const onCLick2 = i => this.scrollViewHome2.scrollTo({ x: i * SIZES.width - 30 });

    const AdsData = [
        {
            image : IMAGES.cfItem1,
            title : "Sony play station 4 Pro gaming",
            price : "Shs45.90",
            views : "470",
            likes : "81",
            dateFrom : "18 Feb 2020",
            dateTo : "21 May 2022",
            status : "Active",
        },
        
    ]


    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                   <HeaderStyle1 title={'Sale Return'}/>
                    <ScrollView>
                        <View style={{paddingVertical:5}}>
                        <View style={[styles.card2,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                 <TouchableOpacity style={{ flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center' }}>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>Custom</Text>
                                    <MaterialIcons style={{marginRight:6}} size={15} color={'blue'} name='keyboard-arrow-down'/>
                                    </TouchableOpacity>
                                    <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                        height:'100%',
                                        borderWidth:0.5
                                    }}
                                    />
                                    <View style={{ flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center' }}>
                                    <FeatherIcon style={{marginRight:6}} size={15} color={'blue'} name='calendar'/>
                                   <TouchableOpacity style={{ flexDirection:'column' }}>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>14/09/2023</Text>
                                    </TouchableOpacity>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>To</Text>
                                    <TouchableOpacity style={{ flexDirection:'column' }}>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>14/09/2023</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                             
                       

                            
                         
{/* receipt details */}

{/* tax and discount */}
<View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                width:'100%'
                            }]}>




   


 </View>



                        </View>
                    </ScrollView>

                    
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate('AddSaleReturn')}
                        style={{
                            backgroundColor:COLORS.primary5,
                            paddingHorizontal:15,
                            paddingVertical:12,
                            borderRadius:10,
                            bottom:10,
                            marginLeft:10,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:10,
                        }}
                    >
                        
                        <Text style={{...FONTS.h6,color:COLORS.white,lineHeight:24}}>Add SalesReturn</Text>
                    </TouchableOpacity>
                
                </View>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    card : {
        padding:5,
        borderRadius:SIZES.radius,
        marginBottom:5,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        width:'100%',
        marginLeft:0,marginRight:0
    },
    card2 : {
        padding:5,
        borderRadius:SIZES.radius,
        marginBottom:5,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        width:'100%',
        marginLeft:0,marginRight:0,flexDirection:'row',
        justifyContent:'space-between'
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
    },
    inputviews2:{
        borderWidth:0.8,
        margin:5,
        borderRadius:8,   
        width:'45%'
      },
      inputviews3:{
        borderWidth:0.8,
        margin:5,
        borderRadius:8,   
        width:'60%'
      },
      inputviews3:{
        borderWidth:0.8,
        margin:5,
        borderRadius:8,   
        width:'100%'
      },
      title1:{
        ...FONTS.font,
        fontSize:11,
        ...FONTS.fontBold,
        color:"black",
        marginBottom:3,
    }
})

export default SaleReturns;