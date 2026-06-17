const garden = document.getElementById("garden");

const vineCount = 7;
const vineHeight = 650;
const gap = 80;

function createVine(top) {

    const wrapper = document.createElement("div");
    wrapper.className = "vine";
    wrapper.style.top = top + "px";

    wrapper.innerHTML = `
    <svg viewBox="0 0 400 1200">

      <path
        class="vine-path"
        d="
          M200 1120
          C140 980 150 860 190 740
          C240 590 240 460 190 330
          C150 220 170 100 280 20"
        fill="none"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"/>

      <!-- Small flower -->
      <g class="small-flower flower" opacity="0">

        <circle r="10" fill="black"/>

        <ellipse rx="12" ry="32" fill="black" transform="rotate(0)"/>
        <ellipse rx="12" ry="32" fill="black" transform="rotate(72)"/>
        <ellipse rx="12" ry="32" fill="black" transform="rotate(144)"/>
        <ellipse rx="12" ry="32" fill="black" transform="rotate(216)"/>
        <ellipse rx="12" ry="32" fill="black" transform="rotate(288)"/>

        <circle r="5" fill="white"/>

      </g>

      <!-- Large flower -->
      <g class="large-flower flower" opacity="0">

        <circle r="18" fill="black"/>

        <ellipse rx="35" ry="85" fill="black" transform="rotate(0)"/>
        <ellipse rx="35" ry="85" fill="black" transform="rotate(30)"/>
        <ellipse rx="35" ry="85" fill="black" transform="rotate(60)"/>
        <ellipse rx="35" ry="85" fill="black" transform="rotate(90)"/>
        <ellipse rx="35" ry="85" fill="black" transform="rotate(120)"/>
        <ellipse rx="35" ry="85" fill="black" transform="rotate(150)"/>

      </g>

    </svg>
    `;

    garden.appendChild(wrapper);

    const svg = wrapper.querySelector("svg");
    const path = svg.querySelector(".vine-path");

    const totalLength = path.getTotalLength();

    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;

    const smallFlower = svg.querySelector(".small-flower");
    const largeFlower = svg.querySelector(".large-flower");

    const smallPoint =
        path.getPointAtLength(totalLength * 0.35);

    const largePoint =
        path.getPointAtLength(totalLength * 0.70);

    smallFlower.setAttribute(
        "transform",
        `translate(${smallPoint.x} ${smallPoint.y})`
    );

    largeFlower.setAttribute(
        "transform",
        `translate(${largePoint.x} ${largePoint.y})`
    );

    let progress = 0;

    function grow() {

        progress += 4;

        const current =
            totalLength - progress;

        path.style.strokeDashoffset =
            Math.max(current, 0);

        const drawn =
            totalLength - current;

        if (
            drawn > totalLength * 0.35 &&
            !smallFlower.classList.contains("shown")
        ) {

            smallFlower.classList.add("shown");
            bloom(smallFlower);
        }

        if (
            drawn > totalLength * 0.70 &&
            !largeFlower.classList.contains("shown")
        ) {

            largeFlower.classList.add("shown");
            bloom(largeFlower);
        }

        if (current > 0) {
            requestAnimationFrame(grow);
        }
    }

    requestAnimationFrame(grow);
}

function bloom(flower) {

    flower.setAttribute("opacity", "1");

    let scale = 0;

    function animate() {

        scale += 0.08;

        const x =
            flower.transform.baseVal.getItem(0).matrix.e;

        const y =
            flower.transform.baseVal.getItem(0).matrix.f;

        flower.setAttribute(
            "transform",
            `translate(${x} ${y}) scale(${Math.min(scale,1)})`
        );

        if (scale < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

for (let i = 0; i < vineCount; i++) {

    setTimeout(() => {

        createVine(
            i * (vineHeight + gap)
        );

    }, i * 1500);
}

garden.style.minHeight =
    (vineCount * (vineHeight + gap)) + "px";
