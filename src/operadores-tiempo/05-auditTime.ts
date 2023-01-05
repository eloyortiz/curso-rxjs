import { auditTime, fromEvent, map, tap } from 'rxjs';


const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map( ({x}) => x),
  tap(console.info),
  auditTime(2000)
)
.subscribe( observer);