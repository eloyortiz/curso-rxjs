import { fromEvent, map, sampleTime } from 'rxjs';


const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  sampleTime(2000),
  map( ({x,y}) => ({x,y})),
)
.subscribe(observer);
