function equelHeight (set_TargetId){
var id = document.getElementById(set_TargetId);
var classEq = id.querySelectorAll(".equelHeight");
var x="";
for(i=0; i<classEq.length; i++){ x +=classEq[i].offsetHeight + ",";}
var y = x.lastIndexOf(",");
var z = x.substring(0, y);
var xyz =z.split(",");
var getH = Math.max.apply(Math, xyz);
for(i=0; i<classEq.length; i++){ classEq[i].style.height=getH + "px";}
}
equelHeight("eq_height");