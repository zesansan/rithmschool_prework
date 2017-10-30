##Events Exercise

**Part I**

1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.


		window.onload = function(){
		}
		
		or
		
		document.addEventListener("DOMContentLoaded", function(){
		}); 

2. Replace the text "Change me" with "Hello World!".

		window.onload = function(){
			var change = document.getElementById("change_heading");
			change.innerText = "Hello World!";
		}	

3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

		window.onload = function(){
			var change = document.getElementById("change_heading");
			change.innerText = "Hello World!";
			var boxes = document.querySelector("section")
			section.addEventListener("mouseover", function(event){
			var color = document.querySelector(".selected");
			color.innerText = event.target.className;
		})
		}		
	
4. Create a new div element.
	
			window.onload = function(){
			var change = document.getElementById("change_heading");
			change.innerText = "Hello World!";
			var boxes = document.querySelector("section")
			section.addEventListener("mouseover", function(event){
			var color = document.querySelector(".selected");
			color.innerText = event.target.className;
		})
		  var newDiv = document.createElement("div");
		}	

5. Give your new div a class of purple and style it so that it has a background color of purple.

		window.onload = function(){
			var change = document.getElementById("change_heading");
			change.innerText = "Hello World!";
			var boxes = document.querySelector("section")
			section.addEventListener("mouseover", function(event){
			var color = document.querySelector(".selected");
			color.innerText = event.target.className;
		})
		  var newDiv = document.createElement("div");
		  newDiv.className = "purple";
		}

6. Append your new div to the page to the section tag.		

		window.onload = function(){
			var change = document.getElementById("change_heading");
			change.innerText = "Hello World!";
			var boxes = document.querySelector("section")
			section.addEventListener("mouseover", function(event){
			var color = document.querySelector(".selected");
			color.innerText = event.target.className;
		})
		  var newDiv = document.createElement("div");
		  newDiv.className = "purple";
		  section.appendChild(newDiv);
		}
		
**Part II**

    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;


    button.addEventListener("click", function(event){
        button.disabled = true;
        var car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*100 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },100)

        var car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*100 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },100)

	function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }
    })
}
		
				