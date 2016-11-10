import {foo} from './foo';
import {bizz} from './bizz';

let {console} = window;

console.log(foo('this'));
console.log(bizz('bar'));


import {Observable} from 'rxjs/Observable';
// patch Observable with appropriate methods
import 'rxjs/add/observable/of';

Observable.of(1,2,3).subscribe( a => console.log(a) );
