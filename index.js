for (let i=1; i<101; i++) {
    if (i % 3 == 0) {
       process.stdout.write('fizz');
    }
    if (i % 5 == 0) {
        process.stdout.write('buzz');
    }
    if (i % 5 != 0 && i % 3 != 0) {
        process.stdout.write(i.toString());
    }
    process.stdout.write('\n');
}