const axios = require("axios");
const xml2js = require("xml2js");

// Sample XML data for creating a sales voucher
const createVoucherXml = `
<ENVELOPE>
  <HEADER>
    <VERSION>1</VERSION>
    <TALLYREQUEST>Import Data</TALLYREQUEST>
    <TYPE>Data</TYPE>
    <ID>Vouchers</ID>
  </HEADER>
  <BODY>
    <DESC>
      <STATICVARIABLES>
        <SVCURRENTCOMPANY>Your Company Name</SVCURRENTCOMPANY>
      </STATICVARIABLES>
      <TALLYMESSAGE>
        <VOUCHER>
          <!-- Voucher details go here -->
          <DATE>20231105</DATE>
          <VOUCHERTYPENAME>Sales</VOUCHERTYPENAME>
          <!-- Add more voucher details as needed -->
        </VOUCHER>
      </TALLYMESSAGE>
    </DESC>
  </BODY>
</ENVELOPE>
`;

// Tally API endpoint
const tallyApiUrl = "http://your-tally-server:3000";

// Send SOAP request to Tally
axios
  .post(`${tallyApiUrl}/api/xml-data`, createVoucherXml, {
    headers: { "Content-Type": "text/xml" },
  })
  .then((response) => {
    // Parse the XML response
    xml2js.parseString(response.data, (err, result) => {
      if (err) {
        console.error("Error parsing XML response:", err);
      } else {
        // Handle the parsed response
        console.log("Tally Response:", result);
      }
    });
  })
  .catch((error) => {
    console.error("Error sending request to Tally:", error);
  });
