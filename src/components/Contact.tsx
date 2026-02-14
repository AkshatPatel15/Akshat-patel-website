import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Section } from './Section';
import { content } from '../data/content';
import { colors, fonts } from '../styles/theme';

export const Contact = () => {

    return (
        <Section title="Contact Me" id="contact" backgroundColor={colors.background.secondary}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder="Name" />

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} placeholder="Email Address" />

                    <Text style={styles.label}>Message</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Message"
                        multiline
                        numberOfLines={4}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Contact Info</Text>
                    {content.hero.details.map((detail, index) => (
                        <View key={index} style={styles.infoItem}>
                            <Text style={styles.infoLabel}>{detail.label}</Text>
                            <Text style={styles.infoValue}>{detail.value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Section>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 40,
    },
    form: {
        flex: 2,
        minWidth: 300,
    },
    info: {
        flex: 1,
        minWidth: 250,
    },
    label: {
        fontFamily: fonts.bodyBold,
        marginBottom: 8,
        color: colors.text.primary,
    },
    input: {
        backgroundColor: colors.background.primary,
        padding: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: 20,
        fontFamily: fonts.body,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: colors.accent.primary,
        padding: 15,
        borderRadius: 30, // Rounded pill button
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 40,
    },
    buttonText: {
        color: colors.text.button,
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    infoTitle: {
        fontFamily: fonts.heading,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.text.primary,
    },
    infoItem: {
        marginBottom: 20,
    },
    infoLabel: {
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        color: colors.text.secondary,
        textTransform: 'uppercase',
        fontSize: 12,
        marginBottom: 4,
    },
    infoValue: {
        fontFamily: fonts.body,
        fontSize: 16,
        color: colors.text.primary,
    }

});
