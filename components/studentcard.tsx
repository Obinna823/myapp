import { View, Text, StyleSheet } from 'react-native';
export const StudentCard = ({ name, grade, isEnrolled}: {
    name: string;
    grade: number;
    isEnrolled: boolean;
}) => {
    return (
        <View style ={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text>Grade: {grade}</Text>
            {isEnrolled && <View style={styles.greendot} />}
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        margin: 10,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    greendot: {
        width: 10,
        height: 10,
        borderRadius:5,
        backgroundColor: 'green',
        marginTop: 5,
    },
});