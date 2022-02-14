import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  projects = [
    {
      name: 'Project X',
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
  ];

  getItems() {
    this.projects = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ];
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }
}
