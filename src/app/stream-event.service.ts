import { Injectable } from '@angular/core';
import { StreamEvent } from './models';

@Injectable({
  providedIn: 'root',
})
export class StreamEventService {
  public emulateFollowerEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateSubscriberEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateGiftedSubscriberEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateBulkGiftedSubscriberEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateTipEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateCheerEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateHostEvent(): void {
    throw new Error('Not implemented');
  }

  public emulateRaidEvent(): void {
    throw new Error('Not implemented');
  }

  private dispatchStreamEvent(event: StreamEvent, listener: string): void {
    const eventData = {
      detail: {
        event,
        listener,
      },
    };

    window.dispatchEvent(new CustomEvent('onEventReceived', eventData));
  }
}
