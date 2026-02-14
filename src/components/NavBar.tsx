import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, useWindowDimensions, Modal, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, fonts, layout } from '../styles/theme';
import { content } from '../data/content';

export const NavBar = ({ onNavigate }: { onNavigate: (sectionId: string) => void }) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMobileNavigate = (target: string) => {
        setIsMenuOpen(false);
        onNavigate(target);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.logo}>Akshat Patel<Text style={styles.dot}>.</Text></Text>

                {!isMobile ? (
                    <View style={styles.desktopLinks}>
                        {content.navLinks.map((link) => (
                            <TouchableOpacity key={link.target} onPress={() => onNavigate(link.target)}>
                                <Text style={styles.linkText}>{link.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                        <FontAwesome name="bars" size={24} color={colors.text.primary} />
                    </TouchableOpacity>
                )}
            </View>

            {/* Mobile Menu Overlay */}
            {isMobile && isMenuOpen && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isMenuOpen}
                    onRequestClose={() => setIsMenuOpen(false)}
                >
                    <SafeAreaView style={styles.mobileMenuContainer}>
                        <View style={styles.mobileMenuHeader}>
                            <Text style={styles.logo}>Akshat Patel<Text style={styles.dot}>.</Text></Text>
                            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                                <FontAwesome name="times" size={24} color={colors.text.primary} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.mobileLinks}>
                            {content.navLinks.map((link) => (
                                <TouchableOpacity
                                    key={link.target}
                                    onPress={() => handleMobileNavigate(link.target)}
                                    style={styles.mobileLinkHook}
                                >
                                    <Text style={styles.mobileLinkText}>{link.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </SafeAreaView>
                </Modal>
            )}
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
        // Default hidden, controlled by JSX
    },
    desktopLinks: {
        flexDirection: 'row',
        gap: 20,
    },
    menuButton: {
        padding: 5,
    },
    linkText: {
        fontFamily: fonts.heading,
        color: colors.text.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    mobileMenuContainer: {
        flex: 1,
        backgroundColor: colors.background.primary,
        padding: 20,
    },
    mobileMenuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    closeButton: {
        padding: 5,
    },
    mobileLinks: {
        gap: 20,
    },
    mobileLinkHook: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    mobileLinkText: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.text.primary,
        fontWeight: 'bold',
    },
});
