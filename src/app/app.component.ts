import { Component } from '@angular/core';

type Person = {
    name: string;
    age: number;
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    person: Person = { name: '', age: 30 };
    name: string = '';

    changeName() {
        this.person.name = this.name; 
        this.person = JSON.parse(JSON.stringify(this.person));       
    }
}
