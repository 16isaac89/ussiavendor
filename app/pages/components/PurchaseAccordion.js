import React, { useState } from 'react';
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS, FONTS } from '../../constants/theme';

const PurchaseAccordion = (props) => {

    const {colors} = useTheme();
    const [activeSections, setActiveSections] = useState([10]);
    const setSections = (sections) => {
        setActiveSections(
        sections.includes(undefined) ? [] : sections
        );
    };
    
    const SECTIONS = [
        {
            color : '#808080',
            icon : 'cart-arrow-down',
            title: 'Purchase',
            content: <Text>sdfgsdfgsdfg</Text>
        },
        
    ];

    const AccordionHeader = (item, _, isActive) => {
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:12,
            }}>
                <View
                    style={{
                        height:30,
                        width:30,
                        backgroundColor:item.color,
                        borderRadius:25,
                        marginRight:10,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <FontAwesome name={item.icon} size={18} color={COLORS.white}/>
                </View>
                <Text style={[FONTS.font,FONTS.fontPoppins,{color:colors.title,flex:1}]}>{item.title}</Text>
                <FontAwesome name={isActive ? 'angle-up' : 'angle-down'} size={20} color={colors.title}/>
            </View>
        )
    }
    const AccordionBody = (item, _, isActive) => {
        return(
            <View style={{marginBottom:15,alignContent:'center',justifyContent:'center',marginLeft:'7%'}}>
            {/* <Text style={[FONTS.fontSm,{color:colors.text}]}>{item.content}</Text> */}
           
            <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('AddPurchase')}>
            <FontAwesome5 name={'file-invoice-dollar'} size={18} color={'grey'}/>
            <Text style={[FONTS.fontSm,{color:colors.text,marginLeft:15}]}>Purchase Bills</Text>
            <Feather name={'plus-circle'} style={styles.icon} size={18} color={'grey'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
            <Feather name={'download'} size={18} color={'grey'}/>
            <Text style={[FONTS.fontSm,{color:colors.text,marginLeft:15}]}>Payment Out</Text>
            <Feather name={'plus-circle'} style={styles.icon} size={18} color={'grey'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
            <Feather name={'upload'} size={18} color={'grey'}/>
            <Text style={[FONTS.fontSm,{color:colors.text,marginLeft:15}]}>Purchase Return(Debit Note)</Text>
            <Feather name={'plus-circle'} style={styles.icon} size={18} color={'grey'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('AddPurchase')}>
            <MaterialIcon name={'request-quote'} size={18} color={'grey'}/>
            <Text style={[FONTS.fontSm,{color:colors.text,marginLeft:15}]}>Purchase Order</Text>
            <Feather name={'plus-circle'} style={styles.icon} size={18} color={'grey'}/>
            </TouchableOpacity>
           
        </View>
        )
    }

    return (
        <>
            <Accordion
                sections={SECTIONS}
                sectionContainerStyle={{
                    borderBottomWidth:1,
                    borderColor:colors.borderColor,
                }}
                duration={300}
                activeSections={activeSections}
                onChange={setSections}
                touchableComponent={TouchableOpacity}
                renderHeader={AccordionHeader}
                renderContent={AccordionBody}
            />
        </>
    );
};

const styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        margin:8
    },
    icon:{
        alignSelf:'flex-end',
        position: 'absolute', right: 0
    }
})
export default PurchaseAccordion;