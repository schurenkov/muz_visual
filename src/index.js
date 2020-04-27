import * as p5 from 'p5';
//import 'p5/lib/addons/p5.sound';

const sketch = (s) => {
    let test = 0;

    const callback = (stream) => {
        var ctx = new AudioContext();
        var mic = ctx.createMediaStreamSource(stream);
        var analyser = ctx.createAnalyser();
        var osc = ctx.createOscillator();

        mic.connect(analyser);
        osc.connect(ctx.destination);
       // osc.start(0);

        var data = new Uint8Array(analyser.frequencyBinCount);

        function play() {
            analyser.getByteFrequencyData(data);

            // get fullest bin
            var idx = 0;
            for (var j=0; j < analyser.frequencyBinCount; j++) {
                if (data[j] > data[idx]) {
                    idx = j;
                }
            }

            test = idx * ctx.sampleRate / analyser.fftSize;
            console.log(test)

            requestAnimationFrame(play);
        }

        play();
    }

    s.setup = () => {
        navigator.getUserMedia = navigator.getUserMedia
            || navigator.webkitGetUserMedia
            || navigator.mozGetUserMedia;

        navigator.getUserMedia({ video : false, audio : true }, callback, console.log);



        s.createCanvas(s.windowWidth, s.windowHeight);
        s.background(0);
        s.noStroke();
    }



    s.draw = () => {
        // draw background
        s.fill(0, 30);
        s.rect(0, 0, s.width, s.height);

        // draw line

        s.noFill()

        var red = s.map(s.random(-100, 100), 0, s.random(-100, 100), 0, 255);
        var blue = s.map(s.random(-100, 100), 0, s.random(-100, 100), 0, 255);
        s.stroke(red, 10, blue, 50);

        for (var i = 0; i < 100; i++) {
            var controlPointX1 = s.windowWidth / 2 + s.random(-test, test);
            var controlPointY1 = s.windowHeight / 2 + s.random(-test, test);
            var controlPointX2 = s.windowWidth / 2 + s.random(-test, test);
            var controlPointY2 = s.windowHeight / 2 + s.random(-test, test);

            //s.stroke(255,50);
            //s.strokeWeight(s.random(-10, 5));

            s.bezier(
                s.windowWidth / 2, s.windowHeight / 2,
                controlPointX1, controlPointY1,
                controlPointX2, controlPointY2,
                s.windowWidth / 2 + s.random(0,30), s.windowHeight / 2 + s.random(0, 30));

        }
    }
}

const sketchInstance = new p5(sketch);
