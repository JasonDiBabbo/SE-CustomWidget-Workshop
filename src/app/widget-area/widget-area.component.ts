import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-area',
  templateUrl: './widget-area.component.html',
  styleUrls: ['./widget-area.component.css'],
})
export class WidgetAreaComponent implements OnInit {
  public ngOnInit(): void {
    // The window event listener for stream events
    // Don't delete this if you want to design a component to respond
    // to stream events like new followers, subs, etc.

    window.addEventListener(
      'onEventReceived',
      (obj: { [key: string]: any }) => {
        console.log(obj);
      }
    );
  }
}
