const checkValue = () => {
 let searchInput =  document.querySelector(".admin__search-data--input");
 let noFoundValue = document.querySelector(".admin__search-data--notfound");
 let tableResult = document.querySelector(".admin__search-data--table");
 let centerAnimation = document.querySelector(".admin__centerAnimation");

 searchInput.addEventListener("input", () => {

  console.log(searchInput.value.length);
  if(searchInput.value.length != 24 ){
    document.querySelector(".admin__search-data--btn").addEventListener("click", function(event){
      event.preventDefault()
    });
  
    console.log("not working")
   } 

   console.log(searchInput.value.length);
    if(searchInput.value.length == 24 ){
      console.log(noFoundValue)
      console.log('working now');

      document.querySelector(".admin__search-data--btn").addEventListener("click", (e) => {
        e.preventDefault()

        let dataError = document.querySelector(".data-error");
        let data1 = document.querySelector(".data1");
        let data2 = document.querySelector(".data2");
        let data3 = document.querySelector(".data3");
        let data4 = document.querySelector(".data4");

        setTimeout(() => {
          centerAnimation.style.opacity="0";
          centerAnimation.style.visibility="hidden";
          fetch(`/search-id?id=${searchInput.value}`).then((response) => {
            response.json().then((data) => {
                if (data.firstname == undefined) {
                  console.log("working error" + data);
                   dataError.textContent = "Data is not found!";
                   tableResult.style.opacity = "0";
                   tableResult.style.visibility="hidden";
                   noFoundValue.style.opacity = "1";
                   noFoundValue.style.visibility="visible";
                } else {
                  data1.textContent = data.firstname;
                  data2.textContent = data.lastname;
                  data3.textContent = data.email;
                  data4.textContent = data.mobile_number;
                    console.log("ito ang tama" + data.firstname);
                    tableResult.style.opacity = "1";
                    tableResult.style.visibility="visible";
                    noFoundValue.style.opacity = "0";
                    noFoundValue.style.visibility="hidden";
                }
            })
        })
        
        },2000)
        centerAnimation.style.opacity="1";
        centerAnimation.style.visibility="visible";
     })
   }
   
 })
}

checkValue();



