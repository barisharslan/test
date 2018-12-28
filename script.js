var keyData = {
    q: {
        color: "#8283c7",
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    w: {
        color: "#d1d83f",
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    e: {
        color: "#81c1d6",
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        })
    },
    r: {
        color: "#547781",
        sound: new Howl({
            src: ['assets/sounds/corona.mp3']
        })
    },
    t: {
        color: "#f654d6",
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
    y: {
        color: "#12db8a",
        sound: new Howl({
            src: ['assets/sounds/flash-1.mp3']
        })
    },
    u: {
        color: "#9d6151",
        sound: new Howl({
            src: ['assets/sounds/flash-2.mp3']
        })
    },
    i: {
        color: "#efef27",
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        })
    },
    o: {
        color: "#6ea659",
        sound: new Howl({
            src: ['assets/sounds/glimmer.mp3']
        })
    },
    p: {
        color: "#951097",
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    },
    a: {
        color: "#888e0c",
        sound: new Howl({
            src: ['assets/sounds/pinwheel.mp3']
        })
    },
    s: {
        color: "#4c8ec6",
        sound: new Howl({
            src: ['assets/sounds/piston-1.mp3']
        })
    },
    d: {
        color: "#115443",
        sound: new Howl({
            src: ['assets/sounds/piston-2.mp3']
        })
    },
    f: {
        color: "#f734b8",
        sound: new Howl({
            src: ['assets/sounds/piston-3.mp3']
        })
    },
    g: {
        color: "#2db333",
        sound: new Howl({
            src: ['assets/sounds/prism-1.mp3']
        })
    },
    h: {
        color: "#279d30",
        sound: new Howl({
            src: ['assets/sounds/prism-2.mp3']
        })
    },
    j: {
        color: "#2dad90",
        sound: new Howl({
            src: ['assets/sounds/prism-3.mp3']
        })
    },
    k: {
        color: "#bd1629",
        sound: new Howl({
            src: ['assets/sounds/splits.mp3']
        })
    },
    l: {
        color: "#25a74b",
        sound: new Howl({
            src: ['assets/sounds/squiggle.mp3']
        })
    },
    z: {
        color: "#cf270b",
        sound: new Howl({
            src: ['assets/sounds/strike.mp3']
        })
    },
    x: {
        color: "#0872e6",
        sound: new Howl({
            src: ['assets/sounds/suspension.mp3']
        })
    },
    c: {
        color: "#edae8e",
        sound: new Howl({
            src: ['assets/sounds/timer.mp3']
        })
    },
    v: {
        color: "#9c4cab",
        sound: new Howl({
            src: ['assets/sounds/ufo.mp3']
        })
    },
    b: {
        color: "#90c048",
        sound: new Howl({
            src: ['assets/sounds/veil.mp3']
        })
    },
    n: {
        color: "#22767c",
        sound: new Howl({
            src: ['assets/sounds/wipe.mp3']
        })
    },
    m: {
        color: "#a316a2",
        sound: new Howl({
            src: ['assets/sounds/zig-zag.mp3']
        })
    }
}

var circles = [];
function onKeyDown(event){
    // if key is A play sound1a
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var circle = new Path.Circle(point, 500);
    circle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(circle);
}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = "red";

function onFrame(event){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
    // animatedCircle.fillColor.hue += 1;
    // animatedCircle.scale(.9);
}
    
