var app =
    document.getElementById(
        'app');

var typewriter =
    new Typewriter(app, {

        loop:
            true
    });

typewriter.typeString(
    'Desarroladora Frontend Jr.| Est.Ing. En Sistemas Computacionaless')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si  puedes imaginarlo, puedes programarlo!')
    .pauseFor(2500)
    .deleteChars(6)
    .pauseFor(2500)
    .start();