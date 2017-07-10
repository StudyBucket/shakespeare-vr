import { Coordinates } from './coordinates.model';

export interface ThreeDSettings {
  id: 						string,	
  title:					string,
  comment: 				string,
	position: 			Coordinates
	scale: 					Coordinates,
	rotaion?: 			Coordinates,
	materialPath?: 	string,
	color?: 				string,
	toggle:					boolean
}

export class ThreeD {
	constructor( settings: ThreeDSettings ){}
}