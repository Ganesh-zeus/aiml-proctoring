import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-proctoring',
  templateUrl: './proctoring.component.html',
  styleUrls: ['./proctoring.component.css']
})

export class ProctoringComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  //   // 1. add js script for webcam js
  //   // 2. on successfully loading script => call js method
  // }

  constructor(private renderer: Renderer2) { }

ngOnInit() {
  const script = this.renderer.createElement('script');
  script.src = `http://localhost:4200/assets/ai-library/webcam.js`;
  script.type = 'module';
  this.renderer.appendChild(document.head, script);
}

}


