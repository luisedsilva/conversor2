     document.getElementById('convert').onclick = tempConvert;
     document.getElementById('clear').onclick = clearForm;

     //Fahrenheit para Celsius
     function fahrenheitToCelsius(fahrenheit) {
       return (parseFloat(fahrenheit) - 32) * (5 / 9);
     }
     
     //Fahrenheit para Kelvin
     function fahrenheitToKelvin(fahrenheit) {
       return (parseFloat(fahrenheit) - 32) * (5 / 9) + 273.15;
     }
     
     //Fahrenheit para Rankine
     function fahrenheitToRankine(fahrenheit) {
       return parseFloat(fahrenheit) + 459.67;
     }
     
     //Celsius para Fahrenheit
     function celsiusToFahrenheit(celsius) {
       return parseFloat(celsius) * (9 / 5) + 32;
     }
     
     //Celsius para Kelvin
     function celsiusToKelvin(celsius) {
       return parseFloat(celsius) + 273.15;
     }
     
     //Celsius para Rankine
     function celsiusToRankine(celsius) {
       return (parseFloat(celsius) + 273.15) * (9 / 5);
     }
     
     //Kelvin para Fahrenheit
     function kelvinToFahrenheit(kelvin) {
       return (parseFloat(kelvin) - 273.15) * (9 / 5) + 32;
     }
     
     //Kelvin para Celsius
     function kelvinToCelsius(kelvin) {
       return parseFloat(kelvin) - 273.15;
     }
     
     //Kelvin para Rankine
     function kelvinToRankine(kelvin) {
       return parseFloat(kelvin) * (9 / 5);
     }
     
     //Rankine para Fahrenheit
     function rankineToFahrenheit(rankine) {
       return parseFloat(rankine) - 459.67;
     }
     
     //Rankine para Celsius
     function rankineToCelsius(rankine) {
       return (parseFloat(rankine) - 491.67) * (5 / 9);
     }
     
     //Rankine para Kelvin
     function rankineToKelvin(rankine) {
       return parseFloat(rankine) * (5 / 9);
     }
     
     function tempConvert() {
       let fahrenheit = document.getElementById("fahrenheit").value;
       let celsius = document.getElementById("celsius").value;
       let kelvin = document.getElementById("kelvin").value;
       let rankine = document.getElementById("rankine").value;
     
       if (isNaN(fahrenheit) || isNaN(celsius) || isNaN(kelvin) || isNaN(rankine)) {
         alert("Digite um valor válido");
         return;
       }
     
       if (fahrenheit !== '') {
         celsius = fahrenheitToCelsius(fahrenheit);
         kelvin = fahrenheitToKelvin(fahrenheit);
         rankine = fahrenheitToRankine(fahrenheit);
       } else if (celsius !== '') {
         fahrenheit = celsiusToFahrenheit(celsius);
         kelvin = celsiusToKelvin(celsius);
         rankine = celsiusToRankine(celsius);
       } else if (kelvin !== '') {
         fahrenheit = kelvinToFahrenheit(kelvin);
         celsius = kelvinToCelsius(kelvin);
         rankine = kelvinToRankine(kelvin);
       } else if (rankine !== '') {
         fahrenheit = rankineToFahrenheit(rankine);
         celsius = rankineToCelsius(rankine);
         kelvin = rankineToKelvin(rankine);
       }
     
       document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(2);
       document.getElementById("celsius").value = parseFloat(celsius).toFixed(2);
       document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(2);
       document.getElementById("rankine").value = parseFloat(rankine).toFixed(2);
     }
     
     function clearForm() {
       document.getElementById("fahrenheit").value = "";
       document.getElementById("celsius").value = "";
       document.getElementById("kelvin").value = "";
       document.getElementById("rankine").value = "";
     }
      