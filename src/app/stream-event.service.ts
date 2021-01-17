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
    if (!window) {
      throw new Error(
        `'window' object is not available. The application is likely being run in the incorrect context. Open the application in a web-standard compliant browser.`
      );
    }

    const eventData = {
      detail: {
        event,
        listener,
      },
    };

    window.dispatchEvent(new CustomEvent('onEventReceived', eventData));
  }
}
