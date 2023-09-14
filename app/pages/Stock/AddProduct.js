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


const AddProduct = (props) => {

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
                   <HeaderStyle1 title={'Add Product/Service'}/>
                    <ScrollView>
                        <View style={{paddingVertical:30}}>
                        <View
                                    style={{
                                        paddingVertical:7,
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Product</Text>
                                    
                                    <ToggleStyle1/>
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Service</Text>
                                </View>
                             
                        <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{marginBottom:15,flexDirection:'row',borderWidth:2,borderColor:'grey'}}>
                                    <CustomInput
                                        inputBorder
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', right: 0,padding:5, }}>
                                    <Text style={{...FONTS.h5,color:colors.title,color:'#87CEEB'}}>Add Unit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>    
                        <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Item Code"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/>}
                                        value={''}  
                                        placeholder="Item Category"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/>}
                                        value={''}  
                                        placeholder="Description"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            
                            
                            </View>


                            
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>

                                <View style={{paddingBottom:15}}>
                                    <TabButtonStyle2 buttons={buttons} onClick={onCLick2} scrollX={scrollX2} />
                                </View>
                                <ScrollView
                                    ref={e => (this.scrollViewHome2 = e)}
                                    horizontal
                                    pagingEnabled
                                    scrollEventThrottle={16}
                                    scrollEnabled={false}
                                    decelerationRate="fast"
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
                                        { useNativeDriver: false },
                                    )}>
                                    {/* tab 1 */}
                                    <View style={[styles.tabBody]} >
                                    <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Selling Retail Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Purchase Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Wholesale Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                        </View>
                                    {/* tab 2 */}
                                    <View style={[styles.tabBody]} >
                                    <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Purchase Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
<View style={{ flexDirection:'row' }}>
                                    <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Purchase Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Wholesale Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                    </View>
                                </View>
                                <View style={{ flexDirection:'row' }}>
                                    <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                       
                                        value={''}  
                                        placeholder="Purchase Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={styles.inputviews}>
                                    <CustomInput
                                        inputBorder
                                      
                                        value={''}  
                                        placeholder="Wholesale Price"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                    </View>
                                </View>



                                        </View>
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                   
                                </ScrollView>


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
                </View>
                <TouchableOpacity style={{ backgroundColor:'white',width:"50%",height:50 }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor:'green',width:"50%",height:50 }}>
                    <Text>Save</Text>
                </TouchableOpacity>
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

export default AddProduct;