import InAppReview from 'react-native-in-app-review';
import {logError} from './LogError';

export const appReviewIsAvailable = (): boolean => InAppReview.isAvailable();

export const requestAppReview = async (): Promise<void> => {
  try {
    await InAppReview.RequestInAppReview();
  } catch (error: any) {
    logError(error);
  }
};
