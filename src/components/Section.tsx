import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, layout } from '../styles/theme';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id: string;
    backgroundColor?: string;
}

export const Section = ({ title, children, id, backgroundColor = colors.background.primary }: SectionProps) => {
    return (
        <View style={[styles.container, { backgroundColor }]} id={id}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        width: '100%',
    },
    content: {
        maxWidth: layout.maxWidth,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: layout.padding.desktop,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text.primary,
        marginBottom: 40,
        textAlign: 'left',
        textTransform: 'uppercase',
        borderBottomWidth: 3,
        borderBottomColor: colors.accent.primary,
        alignSelf: 'flex-start',
        paddingBottom: 10,
    }
});
