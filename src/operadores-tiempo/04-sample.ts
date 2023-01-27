import { fromEvent, interval, sample } from 'rxjs';


const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$)
)
.subscribe( observer);