   function calculateBill() {
      const units = parseFloat(document.getElementById("units").value);
      let bill = 0;

      if (isNaN(units) || units < 0) {
        document.getElementById("billResult").textContent = "Please enter valid units.";
        return;
      }

      if (units <= 100) {
        bill = units * 5;
      } else if (units <= 200) {
        bill = (100 * 5) + ((units - 100) * 7);
      } else {
        bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
      }

      document.getElementById("billResult").textContent = `Your total bill is ₹${bill.toFixed(2)}`;
    }