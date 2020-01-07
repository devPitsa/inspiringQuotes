import React, { Component, useState } from 'react';
import { View, Image,  StyleSheet, Text, TextInput, TouchableOpacity, Linking} from 'react-native';
import image1 from '../assets/image1.png';
import { withNavigation } from 'react-navigation';

class Logo extends Component {
    render() { 
        return (
            <View >
                <Image 
                    source={this.props.name}  
                />
                
            </View>
        )   
    }
}

function Login({ navigation })  {

    const  [email, setEmail] = useState('');
    const  [password, setPass] = useState('');

    function handleNavigate() {
        navigation.navigate('Signup');
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo style={styles.logo}  
                    name={image1} 
                />
            </View>
            <View style={styles.containerCentral}>

                <TextInput
                        style={styles.input}
                        placeholder="email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                />
                <TextInput
                        style={styles.input}
                        placeholder="password"
                        placeholderTextColor="#999"
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPass}
                />
                <Text style={styles.label}>No account? 
                    <Text style={{color: 'green'}} onPress={handleNavigate} > Signup</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    containerLogo: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 40,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    containerCentral: {
        flex: 1,
        alignItems: 'stretch',
        paddingVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: 16,
        color: '#444',
        height: 67,
        borderRadius: 5,
        backgroundColor: '#EEEEEE'
    },
    label: {
        alignSelf: 'flex-end',
        color: '#BCBCBC',
    },
    button: {
        height: 67,
        backgroundColor: '#27b671',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


export default withNavigation(Login);