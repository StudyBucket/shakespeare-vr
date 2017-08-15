import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AFRAME } from 'aframe';
import { drpoService } from '../shared/drpoService.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

	@ViewChild('preloader') preloader:ElementRef;
	public intensity: number = 1;
	private drpo;
	private characters; 

  constructor(private http: Http, private elementRef: ElementRef, private drpoS: drpoService) {
   	this.drpo = drpoS.drpo;
   	this.characters = drpoS.characters;
  }

  ngAfterViewInit() {

    var el = this.preloader;
    setTimeout(function(){
      el.nativeElement.remove();
    }, 5000);
  }
 
}
