import { Injectable } from "@angular/core";
import { DigitalRepresentedPhysicalObjects } from '../../assets/drpo';

@Injectable()
export class drpoService {
    public drpo = DigitalRepresentedPhysicalObjects; 

    constructor() {}

}