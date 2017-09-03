import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    @HostBinding('class') classes = 'app-component';

    constructor() {}

    ngOnInit() {
    }
}


