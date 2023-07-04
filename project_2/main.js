const form = document.querySelector('form')
//this usecase give empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height === '' || height < 0  || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    } 
    else if(weight === '' || weight < 0  || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
       const BMI = (weight/((height*height)/10000)).toFixed(2)

       //show the results   
       if(BMI < 18.6){
        results.innerHTML = `<span>${BMI}</span> --> Dublee Patle Ho ji Khana khao,Exercise Karo !`;
       }
       else if(BMI > 18.6 && BMI < 24.9){
        results.innerHTML = `<span>${BMI}</span> --> Fit Ho Miyan !`;
       }
      else{
        results.innerHTML = `<span>${BMI}</span>, Jada Mota Ho Geya re Tu Jaa re Doudd !`;
      }
       
    }


});