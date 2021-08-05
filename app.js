import { GlowParticle } from "./glowPartcle.js";

const COLORS = [
    { r: 242, g: 4, b: 226 },//blue
    { r: 242, g: 4, b: 226 },//yellow
    { r: 60, g: 2, b: 140 },//purple
    { r: 80, g: 4, b: 242 },//skyblue
    { r: 60, g: 2, b: 140 },//green
]


/* Color Theme Swatches in RGBA */
// .Beauty-woman-in-neon-light,-portrait-of-beautiful-model-with-fluorescent-makeup-1-rgba { color: rgba(89, 1, 65, 1); }
// .Beauty-woman-in-neon-light,-portrait-of-beautiful-model-with-fluorescent-makeup-2-rgba { color: rgba(242, 4, 226, 1); }
// .Beauty-woman-in-neon-light,-portrait-of-beautiful-model-with-fluorescent-makeup-3-rgba { color: rgba(60, 2, 140, 1); }
// .Beauty-woman-in-neon-light,-portrait-of-beautiful-model-with-fluorescent-makeup-4-rgba { color: rgba(80, 4, 242, 1); }
// .Beauty-woman-in-neon-light,-portrait-of-beautiful-model-with-fluorescent-makeup-5-rgba { color: rgba(242, 68, 4, 1); }



class App {
    constructor() {

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.canvas.style.width = "100vw";
        this.canvas.style.height = "300vh";
        this.canvas.style.backgroundColor = "black";
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 500;


        window.addEventListener(' resize', this.resize.bind(this), false);
        this.resize();


        window.requestAnimationFrame(this.animate.bind(this));

    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;


        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation = 'saturation'


        this.createParticles();
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if (++curColor >= COLORS.length) {
                curColor = 0
            }

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}


window.onload = () => {
    new App();
}