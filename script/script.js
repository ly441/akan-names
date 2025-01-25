function getDayOfWeek(date) {
  let CC = Math.floor(date.getFullYear() / 100);
  let YY = date.getFullYear() % 100;
  let MM = date.getMonth() + 1;

  let DD = date.getDate();

  let day = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  );
  return day;
}

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName(dayOfWeek, gender) {
  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else if (gender === "female") {
    return femaleNames[dayOfWeek];
  } else {
    return "Please select a gender.";
  }
}

function displayAkanName() {
  const dobInput = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
console.log("birthday",birthday);
console.log("gender",gender);
  document
    .getElementById("form-container")
    .addEventListener("submit", function (event) {
      // Process your form here
    });

  eventpreventDefault();


  // Validate date input
  if (!birthdayInput) {
    alert("Please enter a valid birthdate.");
    return;
  }

  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  const date = new Date(birthdayInput);
  const dayOfWeek = getDayOfWeek(date);
  const akanName = getAkanName(dayOfWeek, gender.value);
  


  
  document.getElementById(
    "result"
  ).textContent = `Your Akan name is ${akanName}`;
}

