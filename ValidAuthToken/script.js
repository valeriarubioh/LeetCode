let valid_auth_tokens = ["ah37j2ha483u", "safh34ywb0p5", "ba34wyi8t902"];

let request = [
  ["GET", "https://example.com/?token=347sd6yk8iu2&name=alex"],
  ["GET", "https://example.com/?token=safh34ywb0p5&name=sam"],
  ["POST", "https://example.com/?token=safh34ywb0p5&name=alex"],
  ["POST", "https://example.com/?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris"],
];

function getResponses(valid_auth_tokens, request) {
  let petitions = [];

  let responses = [];

  for (let i = 0; i < request.length; i++) {
    let arrInt = request[i];
    let petitionRequest = arrInt[0];
    let url = arrInt[1];

    let queryString = new URL(url).search.substring(1);
    let queries = new URLSearchParams(queryString);
    //console.log(`URL: ${url}`);
    //console.log(`QueryString: ${queries.toString()}`);

    //let token = queries.get("token");
    let object = Array.from(queries.keys()).reduce(
      (acc, key) => ({ ...acc, [key]: queries.get(key) }),
      {}
    );

    petitions.push({ petitionRequest, object });
  }

  for (let i = 0; i < petitions.length; i++) {
    let tokenRequest = petitions[i].object.token;

    if (valid_auth_tokens.includes(tokenRequest)) {
      if (petitions[i].petitionRequest === "GET") {
        responses.push(
          `VALID,${Object.entries(petitions[i].object)
            .filter(([key]) => key !== "token")
            .map(([key, value]) => `${key},${value}`)
            .join(",")}`
        );
      } else if (petitions[i].petitionRequest === "POST") {
        if (petitions[i].object.csrf) {
          if (validarCSRF(petitions[i].object.csrf)) {
            responses.push(
              `VALID,${Object.entries(petitions[i].object)
                .filter(([key]) => key !== "token" && key !== "csrf")
                .map(([key, value]) => `${key},${value}`)
                .join(",")}`
            );
          } else {
            responses.push("INVALID");
          }
        } else {
          responses.push("INVALID");
        }
      }
    } else {
      responses.push("INVALID");
    }
  }
  return responses;
}

function validarCSRF(csrf) {
  if (csrf.length < 8) {
    return false;
  }

  if (/^[a-z0-9]+$/.test(csrf)) {
    return true;
  } else {
    return false;
  }
}

console.log(getResponses(valid_auth_tokens, request));

//let url = window.location.search;
//let queries = new URLSearchParams(url);

//let url = 'https://example.com/?token=347sd6yk8iu2&name=alex'
//let queryString = url.split('?')[1];
