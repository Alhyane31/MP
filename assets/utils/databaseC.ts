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
  }};
  //Historyyyy ================================================================================================
  export const updatePathologyHistory = async (pathologyID: number): Promise<void> => {
    try {
      console.log(new Date().toISOString());

        // Mettre `history` à la date actuelle pour le pathologyID donné
        await db.runAsync(
            'UPDATE Path SET history = ? WHERE ID = ?',
            [new Date().toISOString(), pathologyID]
        );

        console.log(`✅ Pathology ID ${pathologyID} history set to current timestamp.`);
    } catch (error) {
        console.error('❌ Erreur lors de la mise à jour de l\'historique:', error);
    }
};

export const updateAgentsHistory = async (AgentID: number): Promise<void> => {
  try {
    console.log(new Date().toISOString());

      // Mettre `history` à la date actuelle pour le pathologyID donné
      await db.runAsync(
          'UPDATE Agents SET history = ? WHERE ID = ?',
          [new Date().toISOString(), AgentID]
      );

      console.log(`✅ Agent ID ${AgentID} history set to current timestamp.`);
  } catch (error) {
      console.error('❌ Erreur lors de la mise à jour de l\'historique Agent:', error);
  }
};

  // Fonction pour récupérer l'history path
  export const fetchPathHistory = async () => {
    try {
      const results: Agent[] = await db.getAllAsync(
        'SELECT * FROM Path WHERE history IS NOT NULL ORDER BY history DESC LIMIT 3'
      );
  
      console.log(results);
      return results;
    } catch (error: any) {
      console.error('❌ Erreur lors de la récupération de l\'historique path:', error.message);
      return [];
    }
  };
 // Fonction pour récupérer l'history path
 export const fetchAgentsHistory = async () => {
  try {
    const results: Agent[] = await db.getAllAsync(
      'SELECT * FROM Agents WHERE history IS NOT NULL ORDER BY history DESC LIMIT 3'
    );

    console.log(results);
    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération de l\'historique Agrnts:', error.message);
    return [];
  }
};
  //Historyyyy ================================================================================================

export default db;
