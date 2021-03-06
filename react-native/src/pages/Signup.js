import React, { Component, useState } from 'react';
import { View, Image,  StyleSheet, Text, TextInput, TouchableOpacity, Linking} from 'react-native';
import image2 from '../assets/image2.png';
import { withNavigation } from 'react-navigation';

import api from '../services/api';




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

function Signup({ navigation })  {

    const  [name, setName] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPass] = useState('');
    
    

    async function handleNavigate() {
        let createUser = `
            mutation {
                createUser (
                    name: ${name},
                    email: ${email},
                    password: ${password}
                ) {
                    name
                    email
                    password
                }
            }
        `
        await api.post("/", graphqlOperation(createUser));




        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo style={styles.logo}  
                    name={image2} 
                />
            </View>
            <View style={styles.containerCentral}>

                <TextInput
                        style={styles.input}
                        placeholder="name"
                        placeholderTextColor="#999"
                        keyboardType="default"
                        autoCorrect={false}
                        value={name}
                        onChangeText={setName}
                />
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
                <Text style={styles.label}>Already have an account? 
                    <Text style={{color: 'green'}} onPress={handleNavigate} > Login</Text>
                </Text>
            </View>

            <TouchableOpacity onPress={handleNavigate} style={styles.button} >
                <Text style={styles.buttonText}>Signup</Text>
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

export default withNavigation(Signup);