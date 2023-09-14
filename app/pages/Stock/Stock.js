import React, { useRef, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Animated, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import TabButtonStyle1 from '../../components/Tabs/TabButtonStyle1';
import TabButtonStyle2 from '../../components/Tabs/TabButtonStyle2';
import CustomInput from '../../components/Input/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stock = (props) => {
    
    const {colors} = useTheme();
    const buttons = ['PRODUCTS', 'CATEGORIES', 'UNITS'];
    const scrollX = useRef(new Animated.Value(0)).current;
    const onCLick = i => this.scrollViewHome.scrollTo({ x: i * SIZES.width - 30 });
    const scrollX2 = useRef(new Animated.Value(0)).current;
    const onCLick2 = i => this.scrollViewHome2.scrollTo({ x: i * SIZES.width - 30 });

    return (
        <>
            <SafeAreaView
                style={{
                    flex:1,
                    backgroundColor:colors.card,
                    width:"100%"
                }}
            >
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Stock'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={[GlobalStyleSheet.container,{width:"100%"}]}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                        
                                <View style={{paddingBottom:15}}>
                                    <TabButtonStyle1 buttons={buttons} onClick={onCLick} scrollX={scrollX} />
                                </View>
                                <ScrollView
                                    ref={e => (this.scrollViewHome = e)}
                                    horizontal
                                    pagingEnabled
                                    scrollEventThrottle={16}
                                    scrollEnabled={false}
                                    decelerationRate="fast"
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                        { useNativeDriver: false },
                                    )}>
                                    {/* tab 1 */}
                                    <View style={[styles.tabBody]} >
                                 
                                    <CustomInput
                                        inputRounded
                                        icon={<FontAwesome name={'search'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Name, Code, Location"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                             <Text style={[styles.navText,{color:colors.text}]}>sdfjhsjhdfjhsfhjsfhsjhfsjhjhsdfjhsdfjhsfjhsdfjhsdfhjsfhhsj
                             dfjhsdfsjhfjhsfjhsjhdfjhssjhfjhsdfsjhdjhsdfjhsfsjh</Text>
                             <TouchableOpacity style={styles.addbtn} onPress={()=>props.navigation.navigate('AddProduct')}>
                                <FontAwesome  name={'plus'} size={20} color={colors.textLight}/>
                                <Text style={[styles.navText,{color:colors.text}]}>Add Product</Text>
                                </TouchableOpacity> 
                                    </View>


                                    {/* tab 2 */}
                                    <View style={[styles.tabBody]} >
                                        <View>
                                  
                                    <CustomInput
                                        inputRounded
                                        icon={<FontAwesome name={'search'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Name, Code, Location"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                               
                                <TouchableOpacity style={styles.addbtn}>
                                <FontAwesome  name={'plus'} size={20} color={colors.textLight}/>
                                <Text style={[styles.navText,{color:colors.text}]}>Add Product</Text>
                                </TouchableOpacity> 
                               </View>
                                    </View>


                                    {/* tab 3 */}
                                    <View style={[styles.tabBody]} >
                                   
                                    <CustomInput
                                        inputRounded
                                        icon={<FontAwesome name={'search'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Name, Code, Location"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                              
                                    </View>
                                </ScrollView>


                            </View>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </> 
    );
};



const styles = StyleSheet.create({
    card : {
        borderRadius:SIZES.radius,
        marginBottom:15,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        
    },
    tabBody: {
        width: SIZES.width - 30,
    },
    addbtn:{
        backgroundColor:"#00FF00",
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:170,
        borderRadius:25,
        height:40,
        flex:1,
       position:'absolute'
    },
    navText:{
        ...FONTS.font,
        color:COLORS.title,
        flex:1,
        marginLeft:10,
        ...FONTS.fontPoppins
    },
})

export default Stock;