import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 0, name: 'John Wick' },
    { id: 1, name: 'Sherlock Holmes' },
    { id: 2, name: 'Ethan Hunt' },
    { id: 3, name: 'Bruce Wayne' },
    { id: 4, name: 'Peter Parker' },
    { id: 5, name: 'Logan' },
    { id: 6, name: 'Tony Stark' },
    { id: 7, name: 'Barry Allen' },
    { id: 8, name: 'Wade Wilson' },
    { id: 9, name: 'Dean Winchester' },
    { id: 10, name: 'Jack Reacher' }
    ];
    return {heroes};
  }
}
