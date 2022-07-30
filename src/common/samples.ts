import { nanoid } from 'nanoid';
import { MovieType } from '.';

export const moviesSamplesList: MovieType[] = [
  {
    id: nanoid(),
    title: 'Koneser',
    director: 'Giuseppe Tornatore',
    premiereDate: 2013
  },
  {
    id: nanoid(),
    title: 'Między słowami',
    director: 'Sofia Coppola',
    premiereDate: 2003
  },
  {
    id: nanoid(),
    title: 'Annie Hall',
    director: 'Woody Allen',
    premiereDate: 1977
  },
  {
    id: nanoid(),
    title: 'Zrywa się wiatr',
    director: 'Hayao Miyazaki',
    premiereDate: 2013
  },
  {
    id: nanoid(),
    title: 'Samotny mężczyzna',
    director: 'Tom Ford',
    premiereDate: 2009
  },
  {
    id: nanoid(),
    title: 'Manchester by the Sea',
    director: 'Kenneth Lonergan',
    premiereDate: 2016
  },
  {
    id: nanoid(),
    title: 'Na noże',
    director: 'Rian Johnson',
    premiereDate: 2019
  },
  {
    id: nanoid(),
    title: 'Wielkie piękno',
    director: 'Paolo Sorrentino',
    premiereDate: 2013
  },
  {
    id: nanoid(),
    title: 'Ostatnia rodzina',
    director: 'Jan P. Matuszyński',
    premiereDate: 2016
  },
  {
    id: nanoid(),
    title: 'Jesienna sonata',
    director: 'Ingmar Bergman',
    premiereDate: 1978
  },
  {
    id: nanoid(),
    title: 'Sny',
    director: 'Akira Kurosawa',
    premiereDate: 1990
  }
];
