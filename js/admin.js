import {foo} from './foo';
import {bizz} from './bizz';

let {console} = window;

console.log(foo('admin this'));
console.log(bizz('admin bar'));


import {Observable} from 'rxjs/Observable';
// patch Observable with appropriate methods
import 'rxjs/add/observable/of';

Observable.of(1,2,3).subscribe( a => console.log(a) );
