import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from './Section';
import { content } from '../data/content';
import { colors, fonts } from '../styles/theme';

export const Experience = () => {
    const { experience } = content;

    return (
        <Section title={experience.title} id="experience" backgroundColor={colors.background.secondary}>
            <View style={styles.list}>
                {experience.items.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.role}>{item.role}</Text>
                            <Text style={styles.period}>{item.period}</Text>
                        </View>
                        <Text style={styles.company}>{item.company}</Text>
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
        backgroundColor: colors.background.primary,
        padding: 30,
        borderRadius: 4, // Sharpish corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        borderLeftWidth: 4,
        borderLeftColor: colors.accent.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        flexWrap: 'wrap',
    },
    role: {
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
        backgroundColor: '#f0f0ff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    company: {
        fontFamily: fonts.body,
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 15,
        fontStyle: 'italic',
    },
    description: {
        fontFamily: fonts.body,
        fontSize: 15,
        color: colors.text.secondary,
        lineHeight: 24,
    }
});
