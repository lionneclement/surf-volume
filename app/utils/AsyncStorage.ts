import AsyncStorage from '@react-native-async-storage/async-storage';
import {logError} from './LogError';

export const getAsyncStorageItem = async (
  key: string,
): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error: any) {
    return null;
  }
};

export const setAsyncStorageItem = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error: any) {
    logError(error);
  }
};
