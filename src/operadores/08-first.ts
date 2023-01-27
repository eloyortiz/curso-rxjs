import { first, firstValueFrom, fromEvent, map, of, take, takeLast, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

numeros$.pipe(
  tap( t => console.log('tap', t)),
  // first()
  first( x => x > 3)
)
.subscribe( observer);



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  tap<MouseEvent>(console.info),
  // map( event => ({
  //   clientX: event.clientX,
  //   clientY: event.clientY,
  // })),
  map( ({clientX, clientY}) => ({clientX, clientY}) ),
  // first()
  first( event => event.clientY >= 150)
)
.subscribe(observer);