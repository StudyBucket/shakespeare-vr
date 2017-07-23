import { Injectable } from "@angular/core";
import { DigitalRepresentedPhysicalObjects } from '../../assets/drpo';
import { Characters } from '../../assets/characters';
import { Sounds } from '../../assets/sounds';

@Injectable()
export class drpoService {
    public drpo = DigitalRepresentedPhysicalObjects; 
    public characters = Characters; 
    public sounds = Sounds; 

    constructor() {}

}