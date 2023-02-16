import { Region } from './region';
import { Crust } from './crust';

export const REGIONS: Region[] = [
  { lang: 'English', 
    crustsArr: [ 
      { id: 0, name: 'Normal', price: 0.0 },
      { id: 1, name: 'Thin'  , price: 2.0 },
      { id: 2, name: 'Thick'  , price: 2.5 }
    ], 
    sizesArr: [
      { id: 0, name: 'Medium' , price: 20.0 },
      { id: 1, name: 'Small'  , price: 15.0 },
      { id: 2, name: 'Large'  , price: 25.0 }
    ], 
    toppingsArr: [
      { id: 0, name: 'Sausage'  , price: 2.6 },
      { id: 1, name: 'Bacon'  , price: 1.8 },
      { id: 2, name: 'Ham'  , price: 1.5 },
      { id: 3, name: 'Pineapple'  , price: 2.4 },
      { id: 4, name: 'Green Pepper'  , price: 2.5 },
      { id: 5, name: 'Basil'  , price: 1.3 }
    ]
  }
];