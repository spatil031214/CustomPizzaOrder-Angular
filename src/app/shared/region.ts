import { Crust } from './crust';
import { Size } from './size';
import { Topping } from './topping';

export class Region {
    lang: String;
    crustsArr: Array<Crust>;
    sizesArr: Array<Size>;
    toppingsArr: Array<Topping>;
}