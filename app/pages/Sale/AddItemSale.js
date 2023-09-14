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
import ToggleStyle2 from '../../components/Toggles/ToggleStyle2';
import ToggleStyle3 from '../../components/Toggles/ToggleStyle3';
import ToggleStyle4 from '../../components/Toggles/ToggleStyle4';


const AddItemSale = (props) => {

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
                   <HeaderStyle1 title={'Add Items to Cart'}/>
                    <ScrollView>
                        <View style={{paddingVertical:30}}>
                  
                             
                       
                        <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>





<View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Item Name"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
<View style={{ flexDirection:'row' }}>
                                    <View style={styles.inputviews2}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Quantity"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews2}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Unit"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                    </View>
                                </View>
                               
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Price/Unit"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Description"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                              
                            
                            </View>


                            
                           



                        </View>
                    </ScrollView>

                    <View style={{
                height:50,
                backgroundColor: colors.card,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:5,
                shadowColor: "rgba(0,0,0,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}>
                
                <TouchableOpacity style={{ backgroundColor:'white',width:"50%",height:50,alignItems:'center',justifyContent:'center',alignContent:'center' }}>
                    <Text style={{...FONTS.h5,color:colors.title,color:'black'}}>Save & New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor:'#228B22',width:"50%",height:50,alignItems:'center',justifyContent:'center',alignContent:'center' }}>
                    <Text style={{...FONTS.h5,color:colors.title,color:'black'}}>Save</Text>
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
    },
    inputviews2:{
        borderWidth:0.8,
        margin:5,
        borderRadius:8,   
        width:'45%'
      }
})

export default AddItemSale;