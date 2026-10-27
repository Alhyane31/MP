import * as FileSystem from 'expo-file-system/legacy';

const DEVICE_ID_PATH = FileSystem.documentDirectory + 'device_id.txt';
let cached: string | null = null;

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function getDeviceId(): Promise<string> {
  if (cached) return cached;

  try {
    const info = await FileSystem.getInfoAsync(DEVICE_ID_PATH);
    if (info.exists) {
      cached = await FileSystem.readAsStringAsync(DEVICE_ID_PATH);
      return cached;
    }
  } catch {}

  const id = generateUUID();
  await FileSystem.writeAsStringAsync(DEVICE_ID_PATH, id);
  cached = id;
  return id;
}
