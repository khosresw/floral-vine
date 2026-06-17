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

      <!-- Curved Vine -->
      <path d="
        M200 1120
        C140 980 150 860 190 740
        C240 590 240 460 190 330
        C150 220 170 100 280 20"
        fill="none"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"/>

      <!-- Small Flower -->
      <g transform="translate(195 420)" fill="black">

        <circle r="14"/>

        <ellipse rx="18" ry="48" transform="rotate(0)"/>
        <ellipse rx="18" ry="48" transform="rotate(72)"/>
        <ellipse rx="18" ry="48" transform="rotate(144)"/>
        <ellipse rx="18" ry="48" transform="rotate(216)"/>
        <ellipse rx="18" ry="48" transform="rotate(288)"/>

        <circle r="8" fill="white"/>

      </g>

      <!-- Large Flower -->
      <g transform="translate(200 760)" fill="black">

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

garden.style.minHeight =
    (vineCount * (vineHeight + gap)) + "px";
