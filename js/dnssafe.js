//Intial function
"Use strict";

var auth = localStorage.getItem("auth");

  window.document.getElementById("createlongname").addEventListener("click", function() {
      createlongname();
  });
  window.document.getElementById("createservice").addEventListener("click", function() {
      addservice();
  });
  window.document.getElementById("listlongnames").addEventListener("click", function() {
      listlongnames();
  });
  window.document.getElementById("listservices").addEventListener("click", function() {
      listservices();
  });


  //createlongname
  function createlongname() {
      if (typeof auth === 'undefined') {
          alert("Please authorise first.");
          console.log("log: You are not authorised");
          return;
      }
      window.safeDNS.createLongName(auth, document.getElementById("longname").value)
          .then((createLongNameRes) => {
                  console.log(createLongNameRes);
              },
              (err) => {
                  console.log(err);
              });
  }

  //addService
  function addservice() {
      if (typeof auth === 'undefined') {
          alert("Please authorise first.");
          console.log("log: You are not authorised");
          return;
      }
      window.safeDNS.addService(auth, document.getElementById("longname").value, document.getElementById("servicename").value, document.getElementById("homedir").value, true)
          .then((addServiceRes) => {
                  console.log(addServiceRes);
              },
              (err) => {
                  console.log(err);
              });
  }

  //listLongNames
  function listlongnames() {
      if (typeof auth === 'undefined') {
          alert("Please authorise first.");
          console.log("log: You are not authorised");
          return;
      }
      window.safeDNS.listLongNames(auth)
          .then((listLongNamesRes) => {
                  console.log(listLongNamesRes);
              },
              (err) => {
                  console.log(err);
              });
  }

  // listServices
  function listservices() {
      if (typeof auth === 'undefined') {
          alert("Please authorise first.");
          console.log("log: You are not authorised");
          return;
      }
      window.safeDNS.listServices(auth, document.getElementById("longname").value)
          .then((listServicesRes) => {
                  console.log(listServicesRes);
              },
              (err) => {
                  console.log(err);
              });
  }
