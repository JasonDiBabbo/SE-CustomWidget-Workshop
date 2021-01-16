import { Merchandise } from './merchandise';
import { Month } from './month';

export interface StreamEvent {
  amount: number | 'gift';
  count: number;
  isTest: boolean;
  items: Merchandise[];
  month: Month;
  name: string;
  sessionTop: boolean;
  tier: string;
  type: string;
}
