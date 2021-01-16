import { Component, OnInit } from '@angular/core';
import { StreamEventService } from '../stream-event.service';

@Component({
  selector: 'app-widget-control',
  templateUrl: './widget-control.component.html',
  styleUrls: ['./widget-control.component.css'],
})
export class WidgetControlComponent implements OnInit {
  constructor(private streamEventService: StreamEventService) {}

  ngOnInit(): void {}

  public onEmulateFollowerEventClick(): void {
    this.streamEventService.emulateFollowerEvent();
  }

  public onEmulateSubscriberEventClick(): void {
    this.streamEventService.emulateSubscriberEvent();
  }

  public onEmulateTipEventClick(): void {
    this.streamEventService.emulateTipEvent();
  }

  public onEmulateCheerEventClick(): void {
    this.streamEventService.emulateCheerEvent();
  }

  public onEmulateHostEventClick(): void {
    this.streamEventService.emulateHostEvent();
  }

  public onEmulateRaidEventClick(): void {
    this.streamEventService.emulateRaidEvent;
  }
}
