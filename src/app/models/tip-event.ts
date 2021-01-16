import { StreamEvent } from './stream-event';

export interface TipEvent extends StreamEvent {
  message: string;
}
