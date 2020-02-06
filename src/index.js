import * as io from './io';

export function main() {

    const name = io.prompt('What is your name?');
    const greeting = io.helloName(name);
    return greeting;
}