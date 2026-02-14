import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform } from 'react-native';
import { colors, fonts, layout } from '../styles/theme';
import { content } from '../data/content';

export const NavBar = ({ onNavigate }: { onNavigate: (sectionId: string) => void }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.logo}>Akshat Patel<Text style={styles.dot}>.</Text></Text>
                <View style={styles.links}>
                    {content.navLinks.map((link) => (
                        <TouchableOpacity key={link.target} onPress={() => onNavigate(link.target)}>
                            <Text style={styles.linkText}>{link.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: layout.navHeight,
        backgroundColor: colors.background.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        justifyContent: 'center',
        position: 'sticky' as any, // Web support
        top: 0,
        zIndex: 100,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: layout.maxWidth,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: layout.padding.desktop,
    },
    logo: {
        fontFamily: fonts.logo,
        fontSize: 24,
        color: colors.text.primary,
    },
    dot: {
        color: colors.accent.primary,
    },
    links: {
        flexDirection: 'row',
        gap: 20,
        display: Platform.OS === 'web' ? 'flex' : 'none', // Simple hiding for mobile for now
    },
    linkText: {
        fontFamily: fonts.heading,
        color: colors.text.primary, // Default color
        fontSize: 14,
        fontWeight: 'bold',
    },
});
