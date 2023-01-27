import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';


const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// const click$ = fromEvent(document, 'click');

// click$.pipe(
//   debounceTime(3000)
// )
// .subscribe(observer);

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
)
.subscribe(observer);