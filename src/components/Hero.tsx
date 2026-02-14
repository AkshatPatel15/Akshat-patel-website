import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Platform } from 'react-native';
import { colors, fonts, layout } from '../styles/theme';
import { content } from '../data/content';
import { FontAwesome } from '@expo/vector-icons';

export const Hero = () => {
    const { hero } = content;

    const handleDownloadResume = () => {
        // This requires the file to be correctly bundled. 
        // For standard Expo web, requiring the asset works.
        const resumeUri = require('../assets/Akshat_Patel_Resume.pdf');

        if (Platform.OS === 'web') {
            const link = document.createElement('a');
            link.href = resumeUri;
            link.download = 'Akshat_Patel_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            Linking.openURL(resumeUri);
        }
    };

    return (
        <View style={styles.container} id="home">
            <View style={styles.content}>
                <View style={styles.textContent}>
                    <View style={styles.greetingBadge}>
                        <Text style={styles.greetingText}>{hero.greeting}</Text>
                    </View>
                    <Text style={styles.name}>{hero.name}</Text>
                    <Text style={styles.title}>{hero.title}</Text>

                    <View style={styles.contactInfo}>
                        {hero.details.map((detail, index) => (
                            <View key={index} style={styles.detailItem}>
                                <Text style={styles.detailLabel}>{detail.label}:</Text>
                                <Text style={styles.detailValue}>{detail.value}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.socials}>
                        {hero.socials.map((social) => (
                            <TouchableOpacity key={social.name} onPress={() => Linking.openURL(social.url)} style={styles.socialIcon}>
                                <FontAwesome name={social.name as any} size={24} color={colors.text.primary} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.resumeButton} onPress={handleDownloadResume}>
                        <Text style={styles.resumeButtonText}>Download Resume</Text>
                        <FontAwesome name="download" size={16} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.bioContent}>
                    <Text style={styles.bioTitle}>About Me</Text>
                    <Text style={styles.bioText}>{hero.bio}</Text>
                    <View style={styles.signature}>
                        <Text style={styles.signatureText}>Akshat Patel</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        backgroundColor: colors.background.primary,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: layout.maxWidth,
        alignSelf: 'center',
        paddingHorizontal: layout.padding.desktop,
        justifyContent: 'space-between',
    },
    textContent: {
        flex: 1,
        minWidth: 300,
        marginRight: 40,
    },
    greetingBadge: {
        backgroundColor: colors.accent.primary,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12, // Pill shape
        alignSelf: 'flex-start',
        marginBottom: 20,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 12,
        // Approximate shape
    },
    greetingText: {
        color: 'white',
        fontFamily: fonts.heading,
        fontSize: 12,
        fontWeight: 'bold',
    },
    name: {
        fontFamily: fonts.heading, // Should be heavier
        fontSize: 48,
        color: colors.text.primary,
        marginBottom: 10,
        fontWeight: '900',
    },
    title: {
        fontFamily: fonts.body,
        fontSize: 18,
        color: colors.text.secondary,
        marginBottom: 30,
    },
    contactInfo: {
        marginBottom: 30,
    },
    detailItem: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    detailLabel: {
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        width: 80,
        color: colors.text.primary,
    },
    detailValue: {
        fontFamily: fonts.body,
        color: colors.text.secondary,
    },
    socials: {
        flexDirection: 'row',
        gap: 15,
    },
    socialIcon: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
    },
    bioContent: {
        flex: 1,
        minWidth: 300,
        marginTop: 20, // Mobile mostly
    },
    bioTitle: {
        fontFamily: fonts.heading,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    bioText: {
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 24,
        color: colors.text.secondary,
        marginBottom: 30,
    },
    signature: {
        // Placeholder for signature
    },
    signatureText: {
        fontFamily: 'cursive', // Not standard in RN, but good for web fallback
        fontSize: 32,
    },
    resumeButton: {
        marginTop: 30,
        backgroundColor: colors.accent.primary,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'flex-start',
    },
    resumeButtonText: {
        color: 'white',
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        fontSize: 14,
    },
});
