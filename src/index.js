import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = (s) => {

    s.setup = () => {
        s.createCanvas(710, 256);
        s.fill(255, 40, 255);
       // const filter = new s.p5.LowPass();
    }

    s.draw = () => {
        s.background(0);
        s.circle(10, 10, 10);
    }
}

const sketchInstance = new p5(sketch);

// let soundFile;
// let fft;
//
// let filter, filterFreq, filterRes;
//
// function preload() {
//     soundFormats('mp3', 'ogg');
//     soundFile = loadSound('assets/beat');
// }
//
// function setup() {
//     createCanvas(710, 256);
//     fill(255, 40, 255);
//
//     // loop the sound file
//     soundFile.loop();
//
//     filter = new p5.LowPass();
//
//     // Disconnect soundfile from master output.
//     // Then, connect it to the filter, so that we only hear the filtered sound
//     soundFile.disconnect();
//     soundFile.connect(filter);
//
//     fft = new p5.FFT();
// }
//
// function draw() {
//     background(30);
//
//     // Map mouseX to a the cutoff frequency from the lowest
//     // frequency (10Hz) to the highest (22050Hz) that humans can hear
//     filterFreq = map(mouseX, 0, width, 10, 22050);
//
//     // Map mouseY to resonance (volume boost) at the cutoff frequency
//     filterRes = map(mouseY, 0, height, 15, 5);
//
//     // set filter parameters
//     filter.set(filterFreq, filterRes);
//
//     // Draw every value in the FFT spectrum analysis where
//     // x = lowest (10Hz) to highest (22050Hz) frequencies,
//     // h = energy (amplitude / volume) at that frequency
//     let spectrum = fft.analyze();
//     noStroke();
//     for (let i = 0; i < spectrum.length; i++) {
//         let x = map(i, 0, spectrum.length, 0, width);
//         let h = -height + map(spectrum[i], 0, 255, height, 0);
//         rect(x, height, width / spectrum.length, h);
//     }
// }
