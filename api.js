ray = JSON.parse(sessionStorage.getItem("ray"));

var add;
add = ray.join("");
console.log(add);


var myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczYmU0MTM2MjNiZGMwOTI1ODA3NjEzNDVmYjkyZGUyOGM5MWIyNDhlNTljMTE2MTA3NjBlZDU5YmRiMTgzNzE1NzRmZmIzN2VlZmQ3YTRkIn0.eyJhdWQiOiIyIiwianRpIjoiNzNiZTQxMzYyM2JkYzA5MjU4MDc2MTM0NWZiOTJkZTI4YzkxYjI0OGU1OWMxMTYxMDc2MGVkNTliZGIxODM3MTU3NGZmYjM3ZWVmZDdhNGQiLCJpYXQiOjE2MDY4MTQxNzAsIm5iZiI6MTYwNjgxNDE3MCwiZXhwIjoxNjM4MzUwMTcwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jTlARvTHHqF_aeLiezwi1U_xuTzdEUcDhkIt0vBQtXmsk8ASVQ53cVUItXo-7I8Ez8F5f4RvjmGbhMIq0osbEQPIC3UsIUmK0WRO48O0GwEhdk9XYlcJ9dSVHhDxXby-mOiOCOFhtsP0gyVc0un9a88Vxi41uOmLbTQ2-cmjCf-CTTHCaXTHhr03SRuDvjISfQRPLqiOjVSFwHnvGhtoF6F6PlT_EJQDPt_NYCIJMEVRSHHjvzsQWUHO3YcOtbQDJGBpg8k_zk-ooyW2qXD1KPbO0TGkJ77LzhIcZ6luBDepel8pq5sYoPOZAimk-e-GAae_RK8L-lMlvusO0gmmwrjHLvGPGcU1Yayd6Oxtyazqz0Ay9BIfWQd-XElMW0JVB0jk15a104zJPl-mCHR4La8c-9TOOSbXcTv9RA0ouPUMYh4_7dFjNQFbCTJCsZVaBeZexLB8XcxIaY19cIdk0b8_t3wey9gdYUL_TrfCPfONDrrnUSeKndWwp99I6XqAS5bldz4PNXZQErCkWpBpTRqN2OhBj63rCFBPq_4SWRiV4exw1u1s80wgpKjGhkaG0fctQfCxwy7W-qPxqc9XFX-dO5La0hhozRODYKAF-jE1Lb6PW1DSKcCP_2a9Ltx7JyxOoOH4t4QhKnPa10ZyIPezsEW0sjwKTdNqn_lexS0")

var requestedOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow'
};

var loader = document.getElementById("forWait");

const url = "https://weareways.com/api/v1/monitors/key?key=" + add;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

fetch(url, requestedOptions)
.then(response => {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		loader.remove();
		return response.json();
	}
})

.then(function (data) {
	appendData(data);
})

.catch(e => {
	console.log('There has been a problem with your fetch operation: ' + e.message);
});


function appendData(data) {
	var mainContainer = document.getElementById("myData");
	var myArray = data.records.monitor.sequence.contents;
	
	for (var i = 0; i < myArray.length; i++){
		var cont = "http://weareways.com/storage/screen/" + myArray[i].file;
		   var le = cont.length;
		   var poin = cont.lastIndexOf(".");
		   var accu1 = cont.substring(poin,le);
		   var accu = accu1.toLowerCase();
		   console.log(accu);
		   
		   if((accu == '.png') || (accu == '.jpg')) {
			   var b = document.createElement("div");
			   b.className = "carousel-item";
			   
			   var g = document.createElement("div");
			   g.className = "view";
			   
			   var img = document.createElement("img");
			   img.src = cont;
			   img.style = "width: 100%; height: 100%;";
			   img.className = "video-fluid";
			   
			   g.appendChild(img);
			   b.appendChild(g);
			   mainContainer.appendChild(b);
			   
		   } else if (accu == '.mp4') {
			   var b = document.createElement("div");
			   b.className = "carousel-item";
			   
			   var g = document.createElement("div");
			   g.className = "view";
			   
			   var y = document.createElement("source");
			   y.setAttribute("src", cont);
			   y.setAttribute("type", "video/mp4");
			   
			   var x = document.createElement("VIDEO");
			   x.setAttribute("style", "width: 100%; height: 100%;");
			   x.setAttribute("class", "video-fluid");
			   x.autoplay = true;
			   x.loop = true;
			   x.muted = true;
			   
			   x.appendChild(y);
			   g.appendChild(x);
			   b.appendChild(g);
			   mainContainer.appendChild(b);
		   }
	}
}






