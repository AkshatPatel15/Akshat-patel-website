import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from './Section';
import { content } from '../data/content';
import { colors, fonts } from '../styles/theme';

export const Skills = () => {
    const { skills } = content;

    return (
        <Section title={skills.title} id="skills">
            <View style={styles.grid}>
                {skills.items.map((skill, index) => (
                    <View key={index} style={styles.skillItem}>
                        <View style={styles.textRow}>
                            <Text style={styles.skillName}>{skill.name}</Text>
                            <Text style={styles.skillPercent}>{skill.percentage}%</Text>
                        </View>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: `${skill.percentage}%` }]} />
                        </View>
                    </View>
                ))}
            </View>
        </Section>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'column',
        gap: 20,
    },
    skillItem: {
        marginBottom: 15,
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    skillName: {
        fontFamily: fonts.body,
        fontSize: 16,
        color: colors.text.primary,
        textTransform: 'uppercase',
    },
    skillPercent: {
        fontFamily: fonts.body,
        fontSize: 16,
        color: colors.text.secondary,
    },
    progressBarBg: {
        height: 6,
        backgroundColor: '#E0E0E0',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: colors.accent.primary,
    }
});
