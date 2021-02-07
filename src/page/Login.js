import React from 'react'
import { View, Text ,Button } from 'react-native'

const Login =(props)=> {
    return (
        <View>
            <Text>Login</Text>
            <Button onPress={()=> props.navigation.navigate("Home")} title="GOTOHOME" />

        </View>
    )
}
export default Login;
