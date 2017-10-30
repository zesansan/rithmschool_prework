document.addEventListener("DOMContentLoaded", function(){
    var heading = document.getElementById("change_heading");
    heading.innerText = "Hello World!";

    var section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
    	var selectedColors = document.querySelector(".selected");
    	selectedColors.innerText = event.target.className;
    })

    var newDiv = document.createElement("div");
    newDiv.classList.add("purple");
    section.appendChild(newDiv);

    var carButton = document.querySelector("button");
    var car1 = document.querySelector(".car1");
    var car2 = document.querySelector(".car2");
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    carButton.addEventListener("click", function(event){
    	var car1Timer = setInterval(function(){
    		car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*100 + "px";
    		if(parseInt(car1.style.marginLeft) > window.innerWidth){
    			alert("Car 1 wins!");
    			clearTimeout(car1Timer);
    			clearTimeout(car2Timer);
    			car1.style.marginLeft = 0;
    			car2.style.marginLeft = 0;
    		}
    	}, 100)	
    	
    	var car2Timer = setInterval(function(){
    		car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*100 + "px";
    		if(parseInt(car2.style.marginLeft) > window.innerWidth){
    			alert("Car 2 wins!");
    			clearTimeout(car1Timer);
    			clearTimeout(car2Timer);
    			car1.style.marginLeft = 0;
    			car2.style.marginLeft = 0;
    		}
    	}, 100)

    })
})