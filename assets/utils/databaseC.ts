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
interface Agent {
  LibelleFR: string;
   ID: number;
  NTAB: string;
  LibelleAR: string;
}
export const fetchPathologies = async (NTAB:string) => {
  try {
    const results = await db.getAllAsync(
      'SELECT * FROM path WHERE id IN (SELECT IDPath FROM PathTab WHERE NTAB = ?)',
      [NTAB]
    );
    return results;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des pathologies:', error.message);
    return [];
  }
};

export const fetchNTABAgents = async (NTAB:string) : Promise<Agent[]> => {
  try {
    const results: Agent[]  = await db.getAllAsync(
      'SELECT * FROM Agents WHERE NTAB = ?',
      [NTAB]
    );
    return results;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
};
// Fonction pour récupérer les agents
export const fetchAgents = async (pathologyType: number): Promise<Agent[]> => {
  try {
    const results: Agent[] = await db.getAllAsync(
      'SELECT * FROM agents WHERE NTAB IN (SELECT PathTab.NTAB FROM PathTab WHERE IDPath = ?)',
      [pathologyType]
    );

    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
  
};

// Fonction pour récupérer les agents
export const fetchDistAgents = async (): Promise<Agent[]> => {
  try {
    const results: Agent[] = await db.getAllAsync(
      'Select distinct NTAB  from agents',
    );

    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents Distinct:', error.message);
    return [];
  }
  
};


export const fetchAllAgents = async (): Promise<Agent[]> => {
  try {
    const results: Agent[] = await db.getAllAsync(
      'SELECT * FROM agents '
    );

    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
  
};

interface Path {
  ID: number;
  LibelleFR: string;
  LibelleAR?: string; // Optionnel si tu as l'arabe aussi
  PathTypeID: number;
}
export const fetchPath = async (NTAB: string): Promise<Path[]> => {
  try {
    const results: Path[] = await db.getAllAsync(
      'Select *  from path where id in(select IDPath FROM PathTab where NTAB = ? ) ',
      [NTAB]
    );
    console.log(results);
    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des Path:', error.message);
    return [];
  }
  
};
export default db;
