import { interval, reduce, take } from "rxjs";
import { tap } from 'rxjs/operators';


const numbers = [1,1,2,3,5,8,13,21];
const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
}
const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);


interval(500)
.pipe(
  take(6),
  tap( console.log  ), 
  reduce( totalReducer, 0)
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
})
