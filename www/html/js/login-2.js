var placeholder = "Telenet login, e-mailadres of gebruikersnaam";

function customerUpdate() {
  var x = document.getElementById("operator").selectedIndex;
  var y = document.getElementById("operator").options;

  if (y[x].value == "TLN") {
    // enable/disabel keepMeSignedIn checkbox
    if ("true" == "false") {
      document.getElementById("keepMeSignedInLabel").className = "greyed";
      document.getElementById("keepMeSignedIn").disabled = true;
      document.getElementById("keepMeSignedIn").checked = false;
    } else {
      if ("true" == "true") {
        document.getElementById("keepMeSignedInLabel").className = "";
        document.getElementById("keepMeSignedIn").disabled = false;
      }
    }
    // set the usernameText
    document.getElementById("userName").value = "Telenet login, e-mailadres of gebruikersnaam a";
    placeholder = "Telenet login, e-mailadres of gebruikersnaam";
  }
  if (y[x].value == "VOO") {
    // enable/disabel keepMeSignedIn checkbox
    if ("false" == "false") {
      document.getElementById("keepMeSignedInLabel").className = "greyed";
      document.getElementById("keepMeSignedIn").disabled = true;
      document.getElementById("keepMeSignedIn").checked = false;
    } else {
      if ("true" == "true") {
        document.getElementById("keepMeSignedInLabel").className = "";
        document.getElementById("keepMeSignedIn").disabled = false;
      }
    }
    // set redirect to partner site
    /*window.location = 'https://wifree.voo.be/?target=&from=telenet&fromURI=https%3A%2F%2Fwifiportal.telenet.be%2Fhomespot&authURI=https%3A%2F%2Fwifiportal.telenet.be%2Fhomespot%2Fauthenticate.do';*/
  }
}