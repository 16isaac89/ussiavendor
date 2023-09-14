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
import BilledItem from '../components/BilledItem';
import { IMAGES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';


const AddSale = (props) => {

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
                   <HeaderStyle1 title={'Add Sale'}/>
                    <ScrollView>
                        <View style={{paddingVertical:30}}>
                        <View
                                    style={{
                                        marginBottom:10,
                                        
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>Cash</Text>
                                    <ToggleStyle1/>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold,margin:5}}>Credit</Text>
                                </View>
                             
                        <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{marginBottom:15,flexDirection:'row',borderWidth:2,borderColor:'grey'}}>
                                    <CustomInput
                                        inputBorder
                                        value={''}  
                                        placeholder="Enter Customer"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View> 


                            
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                width:'100%'
                            }]}>


   
            <ScrollView contentContainerStyle={{paddingBottom:80,paddingTop:10,width:'100%'}}>
                <View
                    style={GlobalStyleSheet.container}
                >   
                    {AdsData.map((data,index) => {
                        return(
                            <BilledItem
                                key={index}
                                image={data.image}
                                title={data.title}
                                price={data.price}
                                dateFrom={data.dateFrom}
                                dateTo={data.dateTo}
                                views={data.views}
                                likes={data.likes}
                                status={data.status}
                                
                            />
                        )
                    })}
                </View>
            </ScrollView>
       
                                 <TouchableOpacity onPress={()=>props.navigation.navigate('AddItemSale')} style={{marginBottom:15,flexDirection:'row',borderWidth:1,borderColor:'grey',justifyContent:'center'}}>
                                 <FeatherIcon style={{marginRight:6}} size={28} color={'blue'} name='plus'/>
                                    <View style={{ justifyContent:'center' }}>
                                    <Text style={{...FONTS.h5,color:colors.title,color:'#87CEEB'}}>Add Item</Text>
                                    </View>
                                </TouchableOpacity>



                            </View>
{/* receipt details */}

{/* tax and discount */}
<View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                width:'100%'
                            }]}>
 <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:10,
                    }}>Tax & Discount</Text>
<View style={{ flexDirection:'row',justifyContent:'space-between' }}>

    <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Discount</Text>
   
                                    <View style={styles.inputviews2}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Quantity"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                </View>


                                <View style={{ flexDirection:'row',alignContent:'center',alignContent:'center',justifyContent:'space-between' }}>

    <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Tax</Text>
   
                                    <View style={styles.inputviews2}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Tax"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews2}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Shs"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                </View>





                                
            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
            <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Total</Text>
                     <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>UGX:100000</Text>
                </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
            <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Received</Text>
            <View style={styles.inputviews3}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Shs"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
            <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Received</Text>
                       <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>UGX20000</Text>
            </View>

   


 </View>

 {/* Payment methods */}
 <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                width:'100%'
                            }]}>
                                <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
 <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:10,
                    }}>Payment Method</Text>
                     <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:10,
                    }}>Payment Method</Text>
                    </View>
                    </View>
{/* Add note to sale */}
<View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                width:'100%'
                            }]}>
                                  <View style={styles.inputviews4}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Add a note to the order"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                </View>

                        </View>
                    </ScrollView>

                    <View
                    style={{
                        paddingHorizontal:15,
                        paddingVertical:10,
                        backgroundColor:colors.cardBg,
                        flexDirection:'row',
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
                    >
                       
                        <Text style={{...FONTS.h6,color:COLORS.white,lineHeight:24}}>Save & New</Text>
                    </TouchableOpacity>
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
                            marginLeft:5,
                        }}
                    >
                        
                        <Text style={{...FONTS.h6,color:COLORS.white,lineHeight:24}}>Save</Text>
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
        width:'100%',
        marginLeft:0,marginRight:0
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

export default AddSale;