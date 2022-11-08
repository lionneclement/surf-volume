import {
  NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW,
  NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY,
} from '../constants/AsyncStorageConstant';
import {appReviewIsAvailable, requestAppReview} from '../utils/AppReview';
import {getAsyncStorageItem, setAsyncStorageItem} from '../utils/AsyncStorage';

export const showAppReview = async (): Promise<void> => {
  const numberOfSessions =
    (await getAsyncStorageItem(NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY)) ||
    '0';

  if (
    numberOfSessions === NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW.toString() &&
    appReviewIsAvailable()
  ) {
    await requestAppReview();
  } else {
    setAsyncStorageItem(
      NUMBER_OF_SESSIONS_TO_SHOW_APP_REVIEW_KEY,
      (parseInt(numberOfSessions, 10) + 1).toString(),
    );
  }
};
