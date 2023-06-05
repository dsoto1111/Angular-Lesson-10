import { Component, Input } from '@angular/core';

type Person = {
    name: string;
    age: number;
};

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})

export class ChildComponent {
    @Input() get person() {
        return this._person;
    } set person(obj: Person) {    
        obj.name = obj.name.trim() || "There is no name present";
        this._person = obj;
        console.log(obj);        
    }
    private _person!: Person;

    @Input() get name(): string {
        return this._name;
    } set name(value: string) {
        let temp = '';
        for( let i = 0; i < value.length; i++ ) {
            temp = temp + '*';            
        }
        this._name = temp;
    }
    private _name: string = '';

    constructor() { }

}