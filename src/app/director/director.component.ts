import { Component, OnInit } from '@angular/core';
import { drpoService } from '../shared/drpoService.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

	private drpo;
	private characters;
  private sounds;
  private audio = new Audio();

  constructor(private drpoS: drpoService) { 
   	this.drpo = drpoS.drpo;
   	this.characters = drpoS.characters;
    this.sounds = drpoS.sounds;
  }

  ngOnInit() {
  }

  playSound(src: string){
    this.audio.src = '../../assets/' + src;
    this.audio.load();
    this.audio.play();
  }
}
