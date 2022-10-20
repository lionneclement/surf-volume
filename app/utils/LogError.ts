import crashlytics from '@react-native-firebase/crashlytics';

export const logError: (error: Error | string) => void = (
  error: Error | string,
): void => {
  if (__DEV__) return console.error(error);
  if (typeof error === 'string') return crashlytics().log(error);
  crashlytics().recordError(error);
};
