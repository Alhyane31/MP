import * as SQLite from 'expo-sqlite';

// Ouvrir ou créer la base de données
const db = SQLite.openDatabaseSync('MP.db');



// Récupérer les pathologies
export const fetchPathTypes = async () => {
  try {
    const result = await db.getAllAsync('SELECT * FROM PathType;');
    return result;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération', error);
    return [];
  }
};
interface PathologyType {
  ID: number;
  LibelleFR: string;
  LibelleAR?: string; // Optionnel si tu as l'arabe aussi
  PathTypeID: number;
}

// Mise à jour de la fonction avec le type
export const fetchPathologyTypes = async (pathTypeID: number): Promise<PathologyType[]> => {
  try {
    const results: PathologyType[] = await db.getAllAsync(
      'SELECT * FROM Path WHERE PathTypeID = ?',
      [pathTypeID]
    );

    return results;
  } catch (error:any) {
    console.error('❌ Erreur lors de la récupération des types de pathologie:', error.message);
    return [];
  }
};
export default db;
