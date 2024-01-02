import { DataService } from './dataService';
import useAnalyticsEventTracker from './GoogleAnalyticsService';

const gaClickSubscribeTracker = useAnalyticsEventTracker('Subscribe', `Click on Subscribe`, 'Landed');

async function createSubscribeEmail(dataToSend) {
  gaClickSubscribeTracker();
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await DataService.post(`/subscribeEmail`, dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getSubscribeEmail(dataToSend) {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await DataService.get(`/subscribeEmail`, dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const subscribeEmailServices = {
  createSubscribeEmail,
  getSubscribeEmail,
};
