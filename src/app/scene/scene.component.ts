import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ABox } from '../shared/abox.model';
import { AEntity } from '../shared/aentity.model';
import { Http } from '@angular/http';
import { AFRAME } from 'aframe';
import { boxData } from '../../assets/box-data';
import { drpoService } from '../shared/drpoService.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

	@ViewChild('one') d1:ElementRef;
	//d2: ElementRef;
	boxData = boxData;
	public intensity: number = 1;
	private drpo;

  constructor(private http: Http, private elementRef: ElementRef, private drpoS: drpoService) {
    /*this.http.get('./assets/box-data.json')
            .subscribe(res => boxData = res.json());*/
   	console.log(boxData); 
   	this.drpo = drpoS.drpo;
  }

  ngAfterViewInit() { 

    setTimeout(() => {
			console.log(boxData);
			//alert(boxData[1].box.height);
			this.intensity = .9;
			

			//alert(boxData[0].height);

/*
			for(var i=0; i < boxData.length; i++){
	  		var strg = '<a-box 	id="' + boxData[i].id + '"' 
	  												+'height="' + boxData[i].height + '"' 
	  												+'depth="' + boxData[i].depth + '"' 
	  												+'width="' + boxData[i].width + '"'  
	  												+'material="src: #curtain"' 
	  												+'position="-12 7 -10" #' + boxData[i].id + '></a-box>';
	  		this.d1.nativeElement.insertAdjacentHTML('beforeend', strg);

				// @ViewChild('curtain-left') this.d2;
	  	// 	this.d2.nativeElement.setAttribute("disabled", "true");
	  	}

	  	*/
		}, 5000);



		//var d1 = this.elementRef.nativeElement.querySelector('#scene');
 
  	
  }
 
}
