import {
  NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW,
  NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY,
} from '../constants/AsyncStorageConstant';
import {appReviewIsAvailable, requestAppReview} from '../utils/AppReview';
import {getAsyncStorageItem, setAsyncStorageItem} from '../utils/AsyncStorage';

export const showAppReview = async (): Promise<void> => {
  let numberOfSessions = await getAsyncStorageItem(
    NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY,
  );

  numberOfSessions = numberOfSessions || '0';

  let nextNumberOfSessions = parseInt(numberOfSessions, 10) + 1;

  if (
    numberOfSessions === NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW.toString() &&
    appReviewIsAvailable()
  ) {
    const hasFlowFinishedSuccessfully = await requestAppReview();
    if (!hasFlowFinishedSuccessfully) nextNumberOfSessions = 0;
  }

  setAsyncStorageItem(
    NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY,
    nextNumberOfSessions.toString(),
  );
};
