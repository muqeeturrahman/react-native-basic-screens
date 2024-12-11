import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            
            {/* Add an Image */}
            <Image
                source={{ uri: 'https://placekitten.com/400/300' }} // Replace with your image URL
                style={styles.image}
            />
            
            {/* Add some description */}
            <Text style={styles.description}>
                This is a detailed screen where you can provide comprehensive information about a topic. 
                Add engaging content such as images, text, and links to enhance user interaction. You can 
                also include features like related items or actions to keep users engaged.
            </Text>
            
            {/* Add a button */}
            <Button
                title="Go Back to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer Information or Links</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#888',
    },
});
