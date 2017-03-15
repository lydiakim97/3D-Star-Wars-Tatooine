var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = 300;
c.height = 300;

var x = 61;
var y = 106;
var width = 10;
var height = 10;

function bg(){

	var skyGrd=ctx.createLinearGradient(0,0,0,200);
	skyGrd.addColorStop(0,"#52527B");
	skyGrd.addColorStop(1,"white");
	
	var sunGrd=ctx.createLinearGradient(200,210,500,240);
	sunGrd.addColorStop(1,"#FF0000");
	sunGrd.addColorStop(0,"#FFFF80");
	
	var sandGrd=ctx.createLinearGradient(300,300,0,300);
	sandGrd.addColorStop(1,"#fae199");
	sandGrd.addColorStop(0,"#E3C079");
	
	//sky
	ctx.fillStyle=skyGrd;
	ctx.fillRect(0,0,c.width,c.height);
	
	//red sun
	ctx.beginPath();
	ctx.arc(265,170,24,0,2*Math.PI);
	ctx.fillStyle = sunGrd;
	ctx.fill();
	
	//yellow sun
	ctx.beginPath();
	ctx.arc(220,100,23,0,2*Math.PI);
	ctx.fillStyle = sunGrd;
	ctx.fill();
	ctx.lineWidth=3;
	ctx.strokeStyle="#FFFFCC";
	ctx.stroke();
	
	//ground
	ctx.fillStyle = sandGrd;
	ctx.fillRect(0,180,300,300);
	
	ctx.beginPath();
	ctx.moveTo(0,179);
	ctx.lineTo(300,179);
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#D1AF79";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0,185);
	ctx.lineTo(300,185);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#D8AD89";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0,178);
	ctx.lineTo(300,178);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#B88A00";
	ctx.stroke();  
	
	ctx.beginPath();
	ctx.moveTo(0,300);
	ctx.lineTo(300,270);
	ctx.lineTo(250,300);
	ctx.fillStyle = "#E3C079";
	ctx.fill(); 
	
	ctx.beginPath();
	ctx.moveTo(0,220);
	ctx.lineTo(300,250);
	ctx.lineTo(0,275);
	ctx.fillStyle = "#E3C079";
	ctx.fill(); 
}

bg();

function house(){
	var domeGrd=ctx.createLinearGradient(84,147,93,135);
	domeGrd.addColorStop(1,"#ffffff");
	domeGrd.addColorStop(0,"#FFC266");
	
	//big moisture vaporator
	ctx.beginPath();
	ctx.moveTo(137,130);
	ctx.lineTo(140,125);
	ctx.lineTo(144,130);
	ctx.lineTo(144,170);
	ctx.lineTo(137,170);
	ctx.closePath();
	ctx.fillStyle = "#777";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(140,130);
	ctx.lineTo(140,100);
	ctx.closePath();
	ctx.lineWidth=1.2;
	ctx.strokeStyle="#555";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(150,199);
	ctx.lineTo(150,157);
	ctx.closePath();
	ctx.lineWidth=4;
	ctx.stroke();  
	
	ctx.beginPath();
	ctx.moveTo(130,199);
	ctx.lineTo(130,157);
	ctx.closePath();
	ctx.lineWidth=4;
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(134,106);
	ctx.lineTo(146,106);
	ctx.lineTo(146,102);
	ctx.lineTo(134,102);
	ctx.closePath();
	ctx.fill();
	
	//jar on right of house
	ctx.beginPath();
	ctx.ellipse(152, 200, 4, 7, 0, 0, 2 * Math.PI);
	ctx.fillStyle = "#777";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(150,192);
	ctx.lineTo(155,192);
	ctx.lineTo(155,195);
	ctx.lineTo(150,195);
	ctx.closePath();
	ctx.fillStyle = "#444";
	ctx.fill(); 
	
	//chimney
	ctx.strokeStyle = "#CC7A00";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.rect(60, 125, 10, 30);
    ctx.fillStyle = domeGrd;
    ctx.fill(); 
	ctx.stroke();
	
	//house
	ctx.strokeStyle = "#CC7A00";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(90, 190, 50, 1 * Math.PI, 2 * Math.PI, false);
	ctx.fillStyle = domeGrd;
	ctx.fill();
	ctx.stroke();
	
	//house border
	ctx.beginPath();
	ctx.arc(90,-150,350,.55*Math.PI,.45*Math.PI,true);
	ctx.lineWidth = 22;
	ctx.strokeStyle = "#CC7A00";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(90,-148,350,.55*Math.PI,.45*Math.PI,true);
	ctx.lineWidth = 22;
	ctx.strokeStyle = "#F3AD4E";
	ctx.stroke();
	
	//sides upper
	ctx.beginPath();
	ctx.moveTo(31,171);
	ctx.lineTo(44,171);
	ctx.lineTo(41,186);
	ctx.lineTo(31,186);
	ctx.closePath();
	ctx.fillStyle = "#FFC367";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#CC7A00";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(136,171);
	ctx.lineTo(149,171);
	ctx.lineTo(149,186);
	ctx.lineTo(139,186);
	ctx.closePath();
	ctx.fillStyle = "#FFE1B2";
	ctx.fill();
	ctx.stroke();
	
	//sides lower
	ctx.beginPath();
	ctx.moveTo(30,187);
	ctx.lineTo(40,187);
	ctx.lineTo(40,209);
	ctx.lineTo(30,210);
	ctx.closePath();
	ctx.fillStyle = "#FFAD4E";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(140,187);
	ctx.lineTo(150,187);
	ctx.lineTo(150,210);
	ctx.lineTo(140,209);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(55.5,195);
	ctx.lineTo(60,189);
	ctx.lineTo(120,189);
	ctx.lineTo(124.5,195);
	ctx.closePath();
	ctx.fillStyle = "#FFAD4E";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#CC7A00";
	ctx.stroke();
	
	//door border
	ctx.beginPath();
	ctx.moveTo(55,215);
	ctx.lineTo(55,195);
	ctx.lineTo(68,195);
	ctx.arc(90, 195, 22, 1 * Math.PI, 2 * Math.PI, false);
	ctx.lineTo(125,195);
	ctx.lineTo(125,215);
	ctx.closePath();
	ctx.fillStyle = domeGrd;
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#CC7A00";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(112.5,198);
	ctx.lineTo(122,198);
	ctx.lineTo(122,204);
	ctx.lineTo(112.5,204);
	ctx.closePath();
	ctx.fillStyle = "#444";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#888";
	ctx.stroke();
	
	//door
	ctx.beginPath();
	ctx.moveTo(78,216);
	ctx.arc(90, 195, 12, 1 * Math.PI, 2 * Math.PI, false);
	ctx.lineTo(102,216);
	ctx.closePath();
	ctx.fillStyle = "#111";
	ctx.fill();
}

house();

function props(){
	//middle moisture vaporator
	ctx.beginPath();
	ctx.moveTo(160,147);
	ctx.lineTo(162.5,142);
	ctx.lineTo(165,147);
	ctx.lineTo(165,187);
	ctx.lineTo(170,189);
	ctx.lineTo(155,189);
	ctx.lineTo(160,187);
	ctx.closePath();
	ctx.fillStyle = "#777";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(162.5,144);
	ctx.lineTo(162.5,126);
	ctx.closePath();
	ctx.lineWidth=1;
	ctx.strokeStyle = "#555";
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(168,164);
	ctx.lineTo(168,189);
	ctx.closePath();
	ctx.lineWidth=1;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(157,164);
	ctx.lineTo(157,189);
	ctx.closePath();
	ctx.lineWidth=1;
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(158,132);
	ctx.lineTo(167,132);
	ctx.lineTo(167,129);
	ctx.lineTo(158,129);
	ctx.closePath();
	ctx.fill();
	
	//smallest moisture vaporator
	ctx.beginPath();
	ctx.moveTo(205,152);
	ctx.lineTo(206,147);
	ctx.lineTo(207,152);
	ctx.lineTo(207,184);
	ctx.lineTo(211,186);
	ctx.lineTo(201,186);
	ctx.lineTo(205,184);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(206,147);
	ctx.lineTo(206,139);
	ctx.closePath();
	ctx.lineWidth=.1;
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(209,184);
	ctx.lineTo(209,165);
	ctx.closePath();
	ctx.lineWidth=.4;
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(203,184);
	ctx.lineTo(203,165);
	ctx.closePath();
	ctx.lineWidth=.4;
	ctx.stroke(); 
	
	ctx.beginPath();
	ctx.moveTo(204,141);
	ctx.lineTo(208.5,141);
	ctx.lineTo(208.5,143);
	ctx.lineTo(203.5,143);
	ctx.closePath();
	ctx.fill();
	
	//small plant
	ctx.beginPath();
	ctx.moveTo(206,206);
	ctx.lineTo(197,196);
	ctx.lineTo(206,199);
	ctx.lineTo(200,188);
	ctx.lineTo(208,195);
	ctx.lineTo(206,181);
	ctx.lineTo(212,193);
	ctx.lineTo(215,181);
	ctx.lineTo(217,194);
	ctx.lineTo(223,184);
	ctx.lineTo(220,206);
	ctx.closePath();
	ctx.fillStyle="#C4C48A";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="#888845";
	ctx.stroke();
	
	//dirt piles
	ctx.beginPath();
	ctx.moveTo(220,189);
	ctx.lineTo(270,193);
	ctx.lineTo(270,200);
	ctx.lineTo(196,208);
	ctx.closePath();
	ctx.fillStyle="#BB6B38";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="#E3C079";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(242,184);
	ctx.lineTo(270,188);
	ctx.lineTo(270,207);
	ctx.lineTo(215,211);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(271,176);
	ctx.lineTo(303,184);
	ctx.lineTo(303,208);
	ctx.lineTo(233,215);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(283,188);
	ctx.lineTo(303,193);
	ctx.lineTo(303,220);
	ctx.lineTo(248,222);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	//big plant
	ctx.beginPath();
	ctx.moveTo(260,225);
	ctx.lineTo(250,210);
	ctx.lineTo(260,217);
	ctx.lineTo(255,200);
	ctx.lineTo(265,215);
	ctx.lineTo(267,198);
	ctx.lineTo(271,215);
	ctx.lineTo(277,198);
	ctx.lineTo(277,217);
	ctx.lineTo(287,206);
	ctx.lineTo(279,225);
	ctx.lineTo(270,227);
	ctx.closePath();
	ctx.fillStyle="#999966";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="#888845";
	ctx.stroke();
	
	//random containers
	//red box on floor
	ctx.beginPath();
	ctx.moveTo(134,208);
	ctx.lineTo(136.5,203.5);
	ctx.lineTo(139,206);
	ctx.lineTo(138,210);
	ctx.lineTo(135,211.5);
	ctx.closePath();
	ctx.fillStyle = "#990000";
	ctx.fill();
	ctx.lineWidth = .5;
	ctx.strokeStyle = "#ff0000";
	ctx.stroke();
	
	//top grey box
	ctx.beginPath();
	ctx.moveTo(127,201);
	ctx.lineTo(134,202);
	ctx.lineTo(134,208);
	ctx.lineTo(127,215);
	ctx.closePath();
	ctx.fillStyle = "#999";
	ctx.fill();
	ctx.lineWidth = .8;
	ctx.strokeStyle = "#777";
	ctx.stroke();
	
	//bottom grey box
	ctx.beginPath();
	ctx.moveTo(128,208);
	ctx.lineTo(135,206);
	ctx.lineTo(135,213);
	ctx.lineTo(128,215);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	//boxes on left
	//mini boxes on big grey box
	//left mini box
	ctx.beginPath();
	ctx.moveTo(16,191);
	ctx.lineTo(19,191);
	ctx.lineTo(19,195);
	ctx.lineTo(16,195);
	ctx.closePath();
	ctx.fillStyle = "#000";
	ctx.fill();
	ctx.lineWidth = .5;
	ctx.strokeStyle = "#fff";
	ctx.stroke();
	
	//right mini box
	ctx.beginPath();
	ctx.moveTo(23,190);
	ctx.lineTo(26.5,189);
	ctx.lineTo(26,195);
	ctx.lineTo(23,195);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	//most right small grey box
	ctx.beginPath();
	ctx.moveTo(12,204);
	ctx.lineTo(15,204);
	ctx.lineTo(15,209);
	ctx.lineTo(11,207.5);
	ctx.closePath();
	ctx.fillStyle = "#FFF";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#111";
	ctx.stroke();
	
	//big grey box
	ctx.beginPath();
	ctx.moveTo(15.5,195);
	ctx.lineTo(27,195);
	ctx.lineTo(27,208.5);
	ctx.lineTo(15.5,208.5);
	ctx.closePath();
	ctx.fillStyle = "#444";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#333";
	ctx.stroke();
	
	//light grey boxes
	//left grey vertical box
	ctx.beginPath();
	ctx.moveTo(16,204);
	ctx.lineTo(17,202.5);
	ctx.lineTo(18,204);
	ctx.lineTo(18,210);
	ctx.lineTo(17,211.5);
	ctx.lineTo(16,210);
	ctx.closePath();
	ctx.fillStyle = "#000";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#BBB";
	ctx.stroke();
	
	//right grey vertical box
	ctx.beginPath();
	ctx.moveTo(26,204);
	ctx.lineTo(27,202.5);
	ctx.lineTo(28,204);
	ctx.lineTo(28,210);
	ctx.lineTo(27,211.5);
	ctx.lineTo(26,210);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	//tall orange box
	ctx.beginPath();
	ctx.moveTo(46,203);
	ctx.lineTo(48.5,201);
	ctx.lineTo(51,203);
	ctx.lineTo(51,214);
	ctx.lineTo(46,214);
	ctx.closePath();
	ctx.fillStyle = "#E67300";
	ctx.fill();
	
	//shading tall orange box
	ctx.beginPath();
	ctx.moveTo(49,203);
	ctx.lineTo(48,201);
	ctx.lineTo(51,203);
	ctx.lineTo(51,214);
	ctx.lineTo(49,214);
	ctx.closePath();
	ctx.fillStyle = "#B35900";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(64,185);
	ctx.lineTo(67,185);
	ctx.lineTo(66,192);
	ctx.lineTo(63.5,192);
	ctx.closePath();
	ctx.fillStyle = "#F66";
	ctx.fill();
	ctx.lineWidth=.5;
	ctx.strokeStyle = "#4D1111";
	ctx.stroke();
}

props();

function smoke() {
	//clear
	ctx.clearRect(0,0,300,300);
	bg();
	house();
	props();
	
    // draw	the smoke
    ctx.beginPath();
  
    ctx.arc(x, y, width, height, 0,2*Math.PI);
	ctx.arc(x+4, y+10, width, height, 0,2*Math.PI);
	ctx.arc(x+10, y-4, width, height, 0,2*Math.PI);


	// create gradient
    grd = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
	  
    // add colours
    grd.addColorStop(0.5, '#0d0d0d');
    grd.addColorStop(1.0, 'rgba(0, 0, 0, 0)');  
    
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
	y--;
}

function smokeAnimate(){
	smoke();
	if(y < 10) {
	   x = 61;
       y = 106;
	}
}

    // repeat the animation every 30 milliseconds
    setInterval(smokeAnimate, 30);

