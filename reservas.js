let TotalSeatsFirstClass = 0;
let TotalSeatsEconomicClass = 0;

let FirstClassSeats = new Array(4).fill(false); // Array para la Primera Clase (4 asientos)
let EconomicClassSeats = new Array(6).fill(false); // Array para Clase Económica (6 asientos)

let reserve = function () {
  let btn = document.getElementById('btn');
  let btn1 = document.getElementById('btn1');
  btn.addEventListener('click', chooseZone);
  btn1.addEventListener('click', chooseZone);
};

let chooseZone = function () {
  let choise = prompt('En qué zona quieres reservar tus asientos? \n 1.Primera Clase \n 2.Clase Económica \n \n Por favor ingresa el Numero de tu preferencia');

  if (choise == 1) {
    checkFirstClassZone();
  } else if (choise == 2) {
    checkEconomicZone();
  } else {
    alert("Por favor ingrese un número válido");
  }
};

let checkFirstClassZone = function () {
    let zone = "Primera Clase";
    while (TotalSeatsFirstClass < FirstClassSeats.length) {
      if (!FirstClassSeats[TotalSeatsFirstClass]) {
        let otherReserve = prompt("¿Quieres reservar un asiento en primera clase? Ingrese SI/NO").toLowerCase();
        if (otherReserve === "no") {
          alert("Su TICKET DE ABORDO es de: \n" + TotalSeatsFirstClass + " Asientos en PRIMERA CLASE \n y \n" + TotalSeatsEconomicClass + " Asientos en CLASE ECONOMICA");
          resetSeats();
          break;
        } else if (otherReserve === "si") {
          alert("Usted reservó el asiento " + (TotalSeatsFirstClass + 1) + " en Primera clase");
          FirstClassSeats[TotalSeatsFirstClass] = true;
          TotalSeatsFirstClass++;
          alert("¿Está seguro?");
        } else {
          alert("Respuesta no válida. Por favor, ingresa 'SI' o 'NO'.");
        }
      } else {
        alert("Este asiento ya está reservado. Por favor, elija otro asiento.");
      }
    }
  
    if (TotalSeatsFirstClass === FirstClassSeats.length) {
      reasignEconomicZone(zone);
    }
  };
  
  let checkEconomicZone = function () {
    let zone = "Economica";
    while (TotalSeatsEconomicClass < EconomicClassSeats.length) {
      if (!EconomicClassSeats[TotalSeatsEconomicClass]) {
        let otherReserve = prompt("¿Quieres reservar un asiento en Clase Economica? Ingrese SI/NO").toLowerCase();
        if (otherReserve === "no") {
          alert("Su TICKET DE ABORDO es de: \n" + TotalSeatsEconomicClass + " Asientos en CLASE ECONOMICA \n y \n" + TotalSeatsFirstClass + " Asientos en PRIMERA CLASE");
          resetSeats();
          break;
        } else if (otherReserve === "si") {
          alert("Usted reservó el asiento " + (TotalSeatsEconomicClass + 1) + " en Clase Economica");
          EconomicClassSeats[TotalSeatsEconomicClass] = true;
          TotalSeatsEconomicClass++;
          alert("¿Está seguro?");
        } else {
          alert("Respuesta no válida. Por favor, ingresa 'SI' o 'NO'.");
        }
      } else {
        alert("Este asiento ya está reservado. Por favor, elija otro asiento.");
      }
    }
  
    if (TotalSeatsEconomicClass === EconomicClassSeats.length) {
      reasignFirstClassZone(zone);
    }
  };

  let reasignEconomicZone = function (zone) {
    if (TotalSeatsFirstClass === FirstClassSeats.length && TotalSeatsEconomicClass === EconomicClassSeats.length) {
      alert("¡Lo siento, ya no quedan asientos disponibles en el avión!");
    }
    let reasign = confirm("NO QUEDAN MÁS ASIENTOS EN " + zone + "\n ¿Quieres reservar en Clase Económica?");
    if (reasign == true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  };
  
  let reasignFirstClassZone = function (zone) {
    if (TotalSeatsFirstClass === FirstClassSeats.length && TotalSeatsEconomicClass === EconomicClassSeats.length) {
      alert("¡Lo siento, ya no quedan asientos disponibles en el avión!");
    }
    let reasign = confirm("NO QUEDAN MÁS ASIENTOS EN " + zone + "\n ¿Quieres reservar en Primera clase?");
    if (reasign == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  };
  
  let resetSeats = function () {
    TotalSeatsFirstClass = 0;
    TotalSeatsEconomicClass = 0;
    FirstClassSeats = new Array(4).fill(false);
    EconomicClassSeats = new Array(6).fill(false);
  };
  
  let nextFlight = function () {
    if (TotalSeatsFirstClass === FirstClassSeats.length && TotalSeatsEconomicClass === EconomicClassSeats.length) {
      alert("¡Lo siento, ya no quedan asientos disponibles en el avión!");
    }
    alert("Su TICKET DE ABORDO es de: \n" + TotalSeatsFirstClass + " Asientos en PRIMERA CLASE y " + TotalSeatsEconomicClass + " Asientos en CLASE ECONOMICA");
    resetSeats();
  };
  
  reserve();