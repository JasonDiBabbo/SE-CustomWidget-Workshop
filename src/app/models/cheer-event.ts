import { StreamEvent } from './stream-event';

export interface CheerEvent extends StreamEvent {
  message: string;
  tts: boolean;
}
