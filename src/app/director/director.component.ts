import { Component, OnInit } from '@angular/core';
import { drpoService } from '../shared/drpoService.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

	private drpo;

  constructor(private drpoS: drpoService) { 
   	this.drpo = drpoS.drpo;
  }

  ngOnInit() {
  }

}
