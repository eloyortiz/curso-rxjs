import { fromEvent, map, of, takeWhile, tap } from "rxjs";

const numeros$ = of(1,2,3,4,0,5);

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

numeros$.pipe(
  tap( t => console.info('tap', t)),
  // first()
  takeWhile( x => x+1 <4)
)
.subscribe( observer);



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map( ({x, y}) => ({x, y}) ),
  // takeWhile( ({ y }) => y <= 150)
  takeWhile( ({ y }) => y <= 150, true)
)
.subscribe(observer);