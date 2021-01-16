import { StreamEvent } from './stream-event';

export interface SubscriberEvent extends StreamEvent {
  message: string;
}
