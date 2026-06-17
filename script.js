const garden = document.getElementById("garden");

const vineCount = 7;
const vineHeight = 100;
const vineDistance = 200;
const gap = 0;

function createVine(top,left){

    const wrapper = document.createElement("div");
    
    wrapper.className = "vine";
    wrapper.style.top = top + "px";
	wrapper.style.left = left + "px";

wrapper.innerHTML = `
<svg viewBox="0 0 400 1200">


  <path
    class="vine-path"
    d="
      M200 1120
      C140 980 150 860 190 740
      C240 590 240 460 190 330
      C150 220 170 100 190 20"
    fill="none"
    stroke="black"
    stroke-width="8"
    stroke-linecap="round"/>


   <g class="flower small-flower" fill="black">
    ...
   </g>

    <circle r="14"/>
    <ellipse rx="18" ry="48" transform="rotate(0)"/>
    <ellipse rx="18" ry="48" transform="rotate(72)"/>
    <ellipse rx="18" ry="48" transform="rotate(144)"/>
    <ellipse rx="18" ry="48" transform="rotate(216)"/>
    <ellipse rx="18" ry="48" transform="rotate(288)"/>
    <circle r="8" fill="white"/>
  </g>

  


</svg>
`;



    garden.appendChild(wrapper);
	
    
}



for(let vineCount = 0; vineCount < 3; vineCount++) {
    for(let vineDistance = 0; vineDistance < 7; vineDistance++) {

        createVine(
            vineCount * 120,
            vineDistance * 200
        );
    }
}


garden.style.minHeight =
    (vineCount * (vineHeight + gap)) + "px";



