// Remplace databaseC.ts — mêmes signatures, appels HTTP au lieu de SQLite

import { getDeviceId } from './deviceId';

const BASE_URL = 'https://sandybrown-giraffe-796579.hostingersite.com/api';

async function get<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T[]> {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))
  ).toString();
  const url = query ? `${BASE_URL}/${endpoint}?${query}` : `${BASE_URL}/${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function put(endpoint: string, body: object): Promise<void> {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface PathologyType {
  ID: number;
  LibelleFR: string;
  LibelleAR?: string;
  PathTypeID: number;
}

interface Agent {
  ID: number;
  LibelleFR: string;
  LibelleAR: string;
  NTAB: string;
}

interface Path {
  ID: number;
  LibelleFR: string;
  LibelleAR?: string;
  PathTypeID: number;
}

// ─── PathType ─────────────────────────────────────────────────────────────────

export const fetchPathTypes = async () => {
  try {
    return await get('pathtype.php');
  } catch (error) {
    console.error('❌ Erreur lors de la récupération', error);
    return [];
  }
};

// ─── Path ─────────────────────────────────────────────────────────────────────

export const fetchPathologyTypes = async (pathTypeID: number): Promise<PathologyType[]> => {
  try {
    return await get<PathologyType>('paths.php', { pathTypeID });
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des types de pathologie:', error.message);
    return [];
  }
};

export const fetchPathologies = async (NTAB: string) => {
  try {
    return await get('paths.php', { ntab: NTAB });
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des pathologies:', error.message);
    return [];
  }
};

export const fetchPath = async (NTAB: string): Promise<Path[]> => {
  try {
    const results = await get<Path>('paths.php', { ntab: NTAB });
    return results;
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des Path:', error.message);
    return [];
  }
};

export const fetchPathHistory = async () => {
  try {
    const device_id = await getDeviceId();
    return await get('history.php', { device_id, type: 'path' });
  } catch (error: any) {
    console.error("❌ Erreur lors de la récupération de l'historique path:", error.message);
    return [];
  }
};

// ─── Agents ───────────────────────────────────────────────────────────────────

export const fetchAgents = async (pathologyType: number): Promise<Agent[]> => {
  try {
    return await get<Agent>('agents.php', { pathID: pathologyType });
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
};

export const fetchNTABAgents = async (NTAB: string): Promise<Agent[]> => {
  try {
    return await get<Agent>('agents.php', { ntab: NTAB });
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
};

export const fetchDistAgents = async (): Promise<Agent[]> => {
  try {
    const query = new URLSearchParams({ distinctNtab: '1' }).toString();
    const res = await fetch(`${BASE_URL}/agents.php?${query}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: unknown = await res.json();
    if (Array.isArray(data) && typeof data[0] === 'string') {
      return (data as string[]).map(ntab => ({ ID: 0, LibelleFR: '', LibelleAR: '', NTAB: ntab }));
    }
    return data as Agent[];
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents Distinct:', error.message);
    return [];
  }
};

export const fetchAllAgents = async (): Promise<Agent[]> => {
  try {
    return await get<Agent>('agents.php');
  } catch (error: any) {
    console.error('❌ Erreur lors de la récupération des agents:', error.message);
    return [];
  }
};

export const fetchAgentsHistory = async () => {
  try {
    const device_id = await getDeviceId();
    return await get('history.php', { device_id, type: 'agent' });
  } catch (error: any) {
    console.error("❌ Erreur lors de la récupération de l'historique Agents:", error.message);
    return [];
  }
};

// ─── Historique ───────────────────────────────────────────────────────────────

export const updatePathologyHistory = async (pathologyID: number): Promise<void> => {
  try {
    const device_id = await getDeviceId();
    await put('history.php', { device_id, type: 'path', item_id: pathologyID });
    console.log(`✅ Pathology ID ${pathologyID} history mis à jour.`);
  } catch (error) {
    console.error("❌ Erreur lors de la mise à jour de l'historique:", error);
  }
};

export const updateAgentsHistory = async (AgentID: number): Promise<void> => {
  try {
    const device_id = await getDeviceId();
    await put('history.php', { device_id, type: 'agent', item_id: AgentID });
    console.log(`✅ Agent ID ${AgentID} history mis à jour.`);
  } catch (error) {
    console.error("❌ Erreur lors de la mise à jour de l'historique Agent:", error);
  }
};

export default {};
