function calculateAge(){

    const today=new Date();
    const birthdateInput=document.getElementById("birthdate").value;
    const birthdateParts=birthdateInput.split("-");
    const birthDay=birthdateParts[0];
    const birthMouth=birthdateParts[1]-1;
    const birthYear= birthdateParts[2];
    const birthDate=new Date(birthYear,birthMouth,birthDay);
    
    console.log(birthdateInput);
    console.log(birthdateParts);
    console.log(birthDay);
    console.log(birthMouth);
    console.log(birthYear);
    

    const isValidDate=(date)=>{
            return(
                Object.prototype.toString.call(date)==="[object Date]" && !isNaN(date)
            );
        };

    if(!isValidDate(birthDate)){
        alert("Invalid Data Format: pl");
        return;
    }

    const ageInMilliseconds=today-birthDate;
    const ageInseconds=Math.floor(ageInMilliseconds/1000);
    const ageInMinutes=Math.floor(ageInseconds/60);
    const ageInHours=Math.floor(ageInMinutes/60);
    const ageInDays=Math.floor(ageInHours/24);
    const ageInWeeks=Math.floor(ageInDays/7);
    const ageInMouths=Math.floor(ageInDays/30.436875);
    const ageInYears=Math.floor(ageInDays/365.25);  
    
    const resultContainer=document.getElementById("resultcontainer");
    const result=document.getElementById("result");

    result.innerHTML=`
      <div class="result-item">
      <h3>Age:</h3>
      <p>${ageInYears}years ${ageInMouths%12} Months ${ageInDays%30} Days</p>
      </div>
      <div class="result-item">
      <h3>Mouths passed:</h3>
      <p>${ageInMouths}</p>
      </div>
      <div class="result-item">
      <h3>Weeks passed:</h3>
      <p>${ageInWeeks}</p>
      </div>
      <div class="result-item">
      <h3>Days passed:</h3>
      <p>${ageInDays}</p>
      </div>
      <div class="result-item">
      <h3>Hours passed:</h3>
      <p>${ageInHours}</p>
      </div>
      <div class="result-item">
      <h3>Minutes passed:</h3>
      <p>${ageInMinutes}</p>
      </div>
      <div class="result-item">
      <h3>Seconds passed:</h3>
      <p>${ageInseconds}</p>
      </div>
    `;
    resultContainer.style.display="block";
};




const ageCalculatorForm = document.getElementById("agecalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
    
});
