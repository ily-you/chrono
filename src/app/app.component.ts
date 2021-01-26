import { Component, ReflectiveInjector } from '@angular/core';
import { TimeItem } from './time-item';

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
 
  private idInterval: number|null = null;
  public arrayTime : Array<TimeItem> = [];
 
  public retenir(): void { 
   this.arrayTime.push({
    time: this.time,
    note: ''
   });
   
  }
  public removeItem(index: number): void {
    if (index >= 0 && index < this.arrayTime.length) { // supprimer un index existant dans mon tableau
      this.arrayTime.splice(index, 1);
    }
  }
  public start(): void{
    this.isStarted = true;
    this.isPaused= false;
  this.startTimer();
  }

  public stop(): void{
    this.isStarted = false;
  this.stopTimer();
  this.time = 0;
  this.arrayTime = [];
  }

  public pause(): void{
    this.isPaused = true;
  this.stopTimer();
  this.retenir();
   
  }
  
  public continue(): void{
    this.isPaused = false;
  this.startTimer();
  }

private startTimer(): void{
  this.stopTimer();
  this.idInterval = setInterval(() => {
    this.time++;
  }, 1);
}
private stopTimer(): void{
  if(this.idInterval !== null){
    clearInterval(this.idInterval);
  }
}
}
