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
    this.streamEventService.EmulateFollowerEvent();
  }

  public onEmulateSubscriberEventClick(): void {
    this.streamEventService.EmulateSubscriberEvent();
  }

  public onEmulateTipEventClick(): void {
    this.streamEventService.EmulateTipEvent();
  }

  public onEmulateCheerEventClick(): void {
    this.streamEventService.EmulateCheerEvent();
  }

  public onEmulateHostEventClick(): void {
    this.streamEventService.EmulateHostEvent();
  }

  public onEmulateRaidEventClick(): void {
    this.streamEventService.EmulateRaidEvent();
  }
}
