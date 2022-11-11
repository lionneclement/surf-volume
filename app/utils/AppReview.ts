import InAppReview from 'react-native-in-app-review';
import {logError} from './LogError';

export const appReviewIsAvailable = (): boolean => InAppReview.isAvailable();

export const requestAppReview = async (): Promise<boolean> => {
  let hasFlowFinishedSuccessfully = false;
  try {
    hasFlowFinishedSuccessfully = await InAppReview.RequestInAppReview();
  } catch (error: any) {
    logError(error);
  }

  return hasFlowFinishedSuccessfully;
};
