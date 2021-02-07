import React, { useEffect } from 'react'
import { View, Text,LogBox } from 'react-native'
import Header from '../components/Header'
import { useRoute } from '@react-navigation/native';


export default Setoptions => props => {
    const route = useRoute();
    LogBox.ignoreLogs([
        'Require cycle:'
    ])
    const setHeader = () => {
        if (route.name == "Iot") {
            return <Header title="IOT" {...props} />
        }else{
            return <Header {...props}/>
        }
    }
    return (
        <>
            {
                setHeader()
            }
            <Setoptions {...props} />
        </>
    )
}
