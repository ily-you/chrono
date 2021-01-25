import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chrono';
  public isStarted = false;
  public isPaused = false;
  public time = 0;

  public start(): void{
    this.isStarted = true;
  }

  public pause(): void{
    this.isPaused = true;
  }

  public continue(): void{
    this.isPaused = false;
  }

}
