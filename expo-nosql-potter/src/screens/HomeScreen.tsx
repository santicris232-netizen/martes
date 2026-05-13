import { useEffect, useState } from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { CharacterItem, getPotterCharacters } from "../services/potterApi";
import { styles } from "../styles";

export default function HomeScreen() {
  const [items, setItems] = useState<CharacterItem[]>([]);
  const [loading, setLoading] = useState(false);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const data = await getPotterCharacters();
      setItems(data);
    } catch (error: any) {
      Alert.alert("Error API", error.message);
    } finally {
      setLoading(false);
    }
  };

  const syncToFirebase = async () => {
    try {
      const ref = collection(db, "potter_characters");

      await Promise.all(
        items.slice(0, 10).map((item) =>
          setDoc(doc(ref, item.id), {
            name: item.name,
            house: item.house || null,
            blood_status: item.blood_status || null,
            updatedAt: new Date().toISOString()
          })
        )
      );

      Alert.alert("OK", "Datos del API sincronizados en Firebase");
    } catch (error: any) {
      Alert.alert("Error Firebase", error.message);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lista del API (PotterDB)</Text>
      <View style={styles.statusRow}>
        <View style={[styles.statusDot, auth.currentUser ? styles.dotOn : styles.dotOff]} />
        <Text style={styles.subtitle}>Estado: {auth.currentUser ? "Login activo" : "Logout"}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Button title={loading ? "Cargando..." : "Recargar API"} onPress={loadCharacters} disabled={loading} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Guardar Datos API en Firebase" onPress={syncToFirebase} disabled={!items.length} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Logout" onPress={() => signOut(auth)} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text style={styles.subtitle}>{item.house || "Sin casa"}</Text>
          </View>
        )}
      />
    </View>
  );
}
