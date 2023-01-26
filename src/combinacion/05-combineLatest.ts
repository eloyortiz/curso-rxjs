import { combineLatest, fromEvent, pluck } from "rxjs";

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@nomail.com';

input2.placeholder = "*********";
input2.type = 'password;'

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck('target', 'value'));


combineLatest(
    getInputStream(input1),
    getInputStream(input2),
)
    .subscribe(console.log);

