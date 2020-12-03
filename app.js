var ray = [];
var obj;

var box = document.getElementById("otp");

var myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczYmU0MTM2MjNiZGMwOTI1ODA3NjEzNDVmYjkyZGUyOGM5MWIyNDhlNTljMTE2MTA3NjBlZDU5YmRiMTgzNzE1NzRmZmIzN2VlZmQ3YTRkIn0.eyJhdWQiOiIyIiwianRpIjoiNzNiZTQxMzYyM2JkYzA5MjU4MDc2MTM0NWZiOTJkZTI4YzkxYjI0OGU1OWMxMTYxMDc2MGVkNTliZGIxODM3MTU3NGZmYjM3ZWVmZDdhNGQiLCJpYXQiOjE2MDY4MTQxNzAsIm5iZiI6MTYwNjgxNDE3MCwiZXhwIjoxNjM4MzUwMTcwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jTlARvTHHqF_aeLiezwi1U_xuTzdEUcDhkIt0vBQtXmsk8ASVQ53cVUItXo-7I8Ez8F5f4RvjmGbhMIq0osbEQPIC3UsIUmK0WRO48O0GwEhdk9XYlcJ9dSVHhDxXby-mOiOCOFhtsP0gyVc0un9a88Vxi41uOmLbTQ2-cmjCf-CTTHCaXTHhr03SRuDvjISfQRPLqiOjVSFwHnvGhtoF6F6PlT_EJQDPt_NYCIJMEVRSHHjvzsQWUHO3YcOtbQDJGBpg8k_zk-ooyW2qXD1KPbO0TGkJ77LzhIcZ6luBDepel8pq5sYoPOZAimk-e-GAae_RK8L-lMlvusO0gmmwrjHLvGPGcU1Yayd6Oxtyazqz0Ay9BIfWQd-XElMW0JVB0jk15a104zJPl-mCHR4La8c-9TOOSbXcTv9RA0ouPUMYh4_7dFjNQFbCTJCsZVaBeZexLB8XcxIaY19cIdk0b8_t3wey9gdYUL_TrfCPfONDrrnUSeKndWwp99I6XqAS5bldz4PNXZQErCkWpBpTRqN2OhBj63rCFBPq_4SWRiV4exw1u1s80wgpKjGhkaG0fctQfCxwy7W-qPxqc9XFX-dO5La0hhozRODYKAF-jE1Lb6PW1DSKcCP_2a9Ltx7JyxOoOH4t4QhKnPa10ZyIPezsEW0sjwKTdNqn_lexS0")

var requestedOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow'
};

const Url = "https://weareways.com/api/v1/monitors";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

fetch(Url, requestedOptions)
.then(response => {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		box.style.display = "block";
		return response.json();
	}
})

.then(function (data) {
	obj = data;
	console.log(obj.message);
})

.catch(e => {
	console.log('There has been a problem with your fetch operation: ' + e.message);
});




function inputInsideOtpInput(el) {
            if (el.value.length > 1){
                el.value = el.value[el.value.length - 1];
            }
            try {
                if(el.value == null || el.value == ""){
                    this.foucusOnInput(el.previousElementSibling);
                }else {
                    this.foucusOnInput(el.nextElementSibling);
                    ray.push(el.value);
                    console.log(ray);
                    sessionStorage.setItem("ray", JSON.stringify(ray));
                }
                
              }catch (error) {
                console.log(error);
                appendData(obj);
            }
        }

       function foucusOnInput(ele){
           ele.focus();
           let val = ele.value;
           ele.value = "";
           setTimeout(() => {
               ele.value = val;
               console.log(val);
           })
       }
       
       
       function appendData(obj) {
    	   var myArray = obj.records;
    	   var add = ray.join("");
    	   
    	   var done = myArray.find(checkey);
    	   
    	   try{
    		   if(done == add) {
    			   console.log(done);
    		   } else if (done.key !== add){
    			   console.log("Your Id is wrong!");
    		   }
    		   
    	   } catch (error) {
    		   document.getElementById("now").innerHTML = "Your Id is Wrong";
    		   document.getElementById("Btn").disabled = true;
    		   document.getElementById("Btn").innerHTML = "try again";
    	   }
    	   
    	   
    	   function checkey(myArray) {
    		   return myArray.key == add;
    	   }
       }

       
     

       