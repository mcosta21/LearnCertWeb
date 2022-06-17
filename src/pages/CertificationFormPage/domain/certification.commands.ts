import { Certification } from './certification.model';
import { Module } from './certification.model';

export class CreateCertification {
    public id: string;
    public title: string;
    public modules: Array<Module> = [];

    constructor(certification: Certification){
        this.id = certification.id;
        this.title = certification.title;
        this.modules = certification.modules;
    }
}