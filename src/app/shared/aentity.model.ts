import { ThreeD, ThreeDSettings } from './ThreeD.model';

interface AEntitySettings extends ThreeDSettings {
	height: 	number,
	depth: 		number,
	width: 		number
}

export class AEntity extends ThreeD {
	constructor(settings: AEntitySettings){ super(settings); }
}