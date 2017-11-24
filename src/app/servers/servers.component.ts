import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // default
  selector: '[app-servers]', // como um atributo HTML
  // selector: '.app-servers', //como valor do atributo "class" de HTML
/*   template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Luciano';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
