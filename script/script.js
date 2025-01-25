document.getElementById("akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!year || !month || !day || !gender) {
    alert("Please fill out all fields correctly.");
    return;
  }

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    alert("Invalid date. Please check your inputs.");
    return;
  }

  let adjustedMonth = month;
  let adjustedYear = year;
  if (month === 1 || month === 2) {
    adjustedMonth += 12;
    adjustedYear -= 1;
  }

  const K = adjustedYear % 100;
  const J = Math.floor(adjustedYear / 100);
  const h =
    (day +
      Math.floor((13 * (adjustedMonth + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) -
      2 * J) %
    7;
  const dayOfWeek = (h + 7) % 7;

  const maleNames = [
    "Kwame",
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
  ];
  const femaleNames = [
    "Ama",
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
  ];
  const akanName =
    gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  document.getElementById(
    "result"
  );resultDiv.textContent = `Your Akan name is ${akanName}`;
   resultDiv.style.display = "block";
   console.log("Result Div Display Style Set to Block");

});
