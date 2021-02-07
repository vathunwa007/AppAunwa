import React from 'react'
import Header from '../components/Header'


export const setOptions=(props)=>{
    props.navigation.setOptions({
        //title: "THUNWA",
        // headerShown:false,
        header: props =><Header />,


    });
}