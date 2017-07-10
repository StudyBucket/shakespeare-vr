import { ThreeD, ThreeDSettings } from './ThreeD.model';

interface ABoxSettings extends ThreeDSettings {
	height: 				number,
	depth: 					number,
	width: 					number
}

export class ABox extends ThreeD {
	constructor(settings: ABoxSettings){ super(settings); }
}