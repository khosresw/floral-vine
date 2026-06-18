const garden = document.getElementById("garden");
const vineCount = 7;
const vineHeight = 100;
const vineDistance = 200;
const gap = 0;

function createVine(top,left){

    const vineWrapper = document.createElement("div");
    
    vineWrapper.className = "vine";
    vineWrapper.style.top = top + "px";
	vineWrapper.style.left = left + "px";

vineWrapper.innerHTML = `
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
`
;


	
	 // Butterfly wrapper
    const butterflyWrapper = document.createElement("div");
    butterflyWrapper.className = "butterfly";
    butterflyWrapper.style.top = (top + 250) + "px";
    butterflyWrapper.style.left = (left + 80) + "px";

    butterflyWrapper.innerHTML = `
	<svg  viewBox="0 0 300 400">

	  <g fill="none"
		stroke="#000"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round">

		<!-- antennae -->
		<path d="M62 210 C42 190 40 165 48 145"/>
		<path d="M68 205 C55 180 58 155 70 138"/>

		<circle cx="48" cy="145" r="4"/>
		<circle cx="70" cy="138" r="4"/>


		<!-- body -->
		<path
		d="
		M82 215
		C92 198 100 185 108 175
		C118 160 122 150 122 140
		C120 125 108 120 96 128
		C82 138 72 165 70 190
		C69 205 73 220 82 215 Z"
		fill="black"
		/>

		<!-- upper wing outer -->
		<path d="
		M90 205
		C110 120 150 60 230 20
		C215 45 205 65 190 90
		C175 118 180 145 210 180
		C235 208 230 250 185 255
		C165 257 135 245 105 225
		C95 218 92 212 90 205 Z"/>

		<!-- upper wing veins -->
		<path d="M92 205 C125 170 160 130 195 75"/>
		<path d="M92 205 C122 185 150 165 175 135"/>
		<path d="M92 205 C118 205 150 205 180 195"/>

		<!-- lower wing outer -->
		<path d="
		M92 215
		C135 225 175 245 205 275
		C228 298 230 330 210 345
		C175 370 120 340 105 300
		C98 280 95 250 92 215 Z"/>

		<!-- lower wing veins -->
		<path d="M92 215 C130 235 170 250 205 280"/>
		<path d="M92 215 C125 260 160 295 205 315"/>

		<!-- small lower petal -->
		<path d="
		M88 218
		C95 245 110 265 125 280
		C112 280 98 265 85 245
		C78 235 78 225 88 218 Z"/>

	  </g>
	</svg>
`
;

		garden.appendChild(vineWrapper);
    
	    vineWrapper.appendChild(butterflyWrapper);

		
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



