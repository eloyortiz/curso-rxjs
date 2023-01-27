import { ajax } from "rxjs/ajax";

const url2 = "https://api.github.com/users?per_page=5";
const url1 = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url1, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe((data) => console.log("data: ", data));
