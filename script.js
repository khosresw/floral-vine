const garden = document.getElementById("garden");

const vineCount = 7;
const vineHeight = 650;
const gap = 80;

function createVine(top){

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

  /* Small flower */
    <g class="flower small-flower"
   transform="translate(205 330)"
   fill="black">

    <circle r="14"/>
    <ellipse rx="18" ry="48" transform="rotate(0)"/>
    <ellipse rx="18" ry="48" transform="rotate(72)"/>
    <ellipse rx="18" ry="48" transform="rotate(144)"/>
    <ellipse rx="18" ry="48" transform="rotate(216)"/>
    <ellipse rx="18" ry="48" transform="rotate(288)"/>
    <circle r="8" fill="white"/>
  </g>

  /* Large flower */
    <g class="flower large-flower"
   transform="translate(190 700)"
   fill="black">

    <circle r="20"/>
    <ellipse rx="22" ry="95" transform="rotate(0)"/>
    <ellipse rx="22" ry="95" transform="rotate(30)"/>
    <ellipse rx="22" ry="95" transform="rotate(60)"/>
    <ellipse rx="22" ry="95" transform="rotate(90)"/>
    <ellipse rx="22" ry="95" transform="rotate(120)"/>
    <ellipse rx="22" ry="95" transform="rotate(150)"/>
  </g>

</svg>
`;


    garden.appendChild(wrapper);
}

for(let i=0;i<vineCount;i++){

    createVine(
        i * (vineHeight + gap)
    );
}
const path = svg.querySelector(".vine-path");

const p1 = path.getPointAtLength(
    path.getTotalLength() * 0.35
);

const p2 = path.getPointAtLength(
    path.getTotalLength() * 0.65
);

smallFlower.setAttribute(
    "transform",
    `translate(${p1.x} ${p1.y})`
);

largeFlower.setAttribute(
    "transform",
    `translate(${p2.x} ${p2.y})`
);

garden.style.minHeight =
    (vineCount * (vineHeight + gap)) + "px";
