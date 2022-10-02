let ball_x = 0;
let ball_y = 0;
let mouse_x = 0;
let mouse_y = 0;
let vel_x = 0;
let vel_y = 0;
const strength = 0.15;
const drag = 0.15;
const docStyle = document.documentElement.style;
document.addEventListener("mousemove", (event) => {
    mouse_x = event.clientX;
    mouse_y = event.clientY;
});

function delayMotion() {
    // ball_x = mouse_x;
    // ball_y = mouse_y;

    let distance_x = mouse_x - ball_x;
    distance_x *= strength;
    vel_x *= drag;
    vel_x += distance_x;
    ball_x += vel_x;
    ball_x += distance_x;
    // console.log("distance_x:",distance_x);
    // console.log("mouse_x:",mouse_x);
    // console.log("ball_x:",ball_x);
    var distance_y = mouse_y - ball_y;
    distance_y *= strength;
    vel_y *= drag;
    vel_y += distance_y;
    ball_y += vel_y;
    ball_y += distance_y;


    docStyle.setProperty("--mouse-x", ball_x);
    docStyle.setProperty("--mouse-y", ball_y);
    docStyle.setProperty("--scale", (vel_x + vel_y) * strength);
    requestAnimationFrame(delayMotion);
}
delayMotion();