import { SubscriberEvent } from './subscriber-event';

export interface GiftedSubscriberEvent extends SubscriberEvent {
  bulkGifted: boolean;
  gifted: boolean;
  sender: string;
  subExtension: boolean;
}
