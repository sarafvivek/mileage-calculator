function calculateMileage() {
    var distance = parseFloat(document.getElementById("distance").value);
    var totalAmount = parseFloat(document.getElementById("totalAmount").value);
    var todayPrice = parseFloat(document.getElementById("todayPrice").value);
    var vehicle = document.getElementById("vehicle").value;
  
    if (isNaN(distance) || isNaN(totalAmount) || isNaN(todayPrice)) {
      document.getElementById("result").innerHTML =
        "<h2>Please enter valid numbers for distance, total amount, and today's price.</h2>";
      return;
    }
  
    var liters = totalAmount / todayPrice;
    var fuelConsumption = distance / liters;
  
    var expectedMileage;
    switch (vehicle) {
      case "truck1":
        expectedMileage = 8;
        break;
      case "truck2":
        expectedMileage = 4;
        break;
      case "truck3":
        expectedMileage = 5.5;
        break;
      case "truck4":
        expectedMileage = 4;
        break;
      case "truck5":
        expectedMileage = 4;
        break;
      case "truck6":
        expectedMileage = 7;
        break;
      default:
        expectedMileage = 0;
    }
  
    var mileageDifference = fuelConsumption - expectedMileage;
  
    var resultHead = "";
    var resultMessage = "";
    if (mileageDifference === 0) {
      resultHead = `The calculated mileage is equal to the expected mileage.`;
      document.getElementById("rHead").style.color = "green";
    } else if (mileageDifference > 0) {
      resultHead = `The calculated mileage is greater than the expected mileage.`;
      document.getElementById("rHead").style.color = "green";
    } else {
      resultHead = `The calculated mileage is less than the expected mileage.`;
      document.getElementById("rHead").style.color = "red";
    }
    resultMessage += `<p>Total Liters: ${liters.toFixed(2)}</p>`;
    resultMessage += `<p>Expected Mileage: ${expectedMileage} km/liter <p>`;
    resultMessage += `<p>Calculated Mileage: ${fuelConsumption.toFixed(
      2
    )} km/liter</p>`;
  
    if (mileageDifference < 0) {
      resultMessage += `<p>Mileage difference: ${Math.abs(
        mileageDifference
      ).toFixed(2)} km/liter.</p>`;
    }
  
    document.getElementById("rHead").innerHTML = resultHead;
    document.getElementById("rMessage").innerHTML = resultMessage;
  }
  