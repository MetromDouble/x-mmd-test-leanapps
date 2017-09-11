import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
    constructor() {}
    toggleSideMenu(event) {
        event.preventDefault();

        const sidemenu = document.getElementById('app-sidemenu');
        const header = document.getElementById('app-header');

        if (sidemenu.style.marginLeft) {
            sidemenu.style.marginLeft = '';
            header.style.width = '';
        } else {
            sidemenu.style.marginLeft = `${String(-sidemenu.offsetWidth)}px`;
            header.style.width = '100%';
        }

    }
}
