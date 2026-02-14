import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from './Section';
import { content } from '../data/content';
import { colors, fonts } from '../styles/theme';

export const Education = () => {
    const { education } = content;

    return (
        <Section title={education.title} id="education">
            <View style={styles.list}>
                {education.items.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.degree}>{item.degree}</Text>
                            <Text style={styles.period}>{item.period}</Text>
                        </View>
                        <Text style={styles.institution}>{item.institution}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))}
            </View>
        </Section>
    );
};

const styles = StyleSheet.create({
    list: {
        gap: 30,
    },
    card: {
        backgroundColor: colors.background.secondary,
        padding: 30,
        borderRadius: 4,
        borderLeftWidth: 4,
        borderLeftColor: colors.accent.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        flexWrap: 'wrap',
    },
    degree: {
        fontFamily: fonts.heading,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text.primary,
    },
    period: {
        fontFamily: fonts.heading,
        fontSize: 14,
        color: colors.accent.primary,
        fontWeight: 'bold',
    },
    institution: {
        fontFamily: fonts.body,
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 15,
    },
    description: {
        fontFamily: fonts.body,
        fontSize: 15,
        color: colors.text.secondary,
        lineHeight: 24,
    }
});
