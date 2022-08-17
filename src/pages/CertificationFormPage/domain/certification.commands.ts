import { Certification } from './certification.model';
import { Module } from './certification.model';

export class BaseCertificationCommand {
    public id: string;
    public title: string;
    public imageUrl: string;
    public modules: Array<Module> = [];

    constructor(certification: Certification){
        this.id = certification.id;
        this.title = certification.title;
        this.imageUrl = certification.imageUrl;
        this.modules = certification.modules;
    }
}

export class CreateCertificationCommand extends BaseCertificationCommand {}

export class UpdateCertificationCommand extends BaseCertificationCommand {}