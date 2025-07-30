// "use client";
// import React, { useState } from "react";
// import Select from "react-select";
// import countries from "world-countries";

// // Helper to generate emoji flag from ISO country code
// function getFlagEmoji(countryCode) {
//   return countryCode
//     .toUpperCase()
//     .split('')
//     .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
//     .join('');
// }

// // Format countries: use country.idd.root + first suffix for dial code
// const formattedCountries = countries
//   .filter((c) => c.idd && c.idd.root && c.idd.suffixes && c.idd.suffixes.length > 0)
//   .map((country) => {
//     const dialCode = country.idd.root + country.idd.suffixes[0];
//     return {
//       label: (
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <span>{getFlagEmoji(country.cca2)}</span>
//           <span>{country.name.common}</span>
//           <span style={{ color: "#888" }}>{dialCode}</span>
//         </div>
//       ),
//       value: dialCode,
//       code: country.cca2,
//     };
//   });

// const CountryPhoneInput = () => {
//   // Set default country to India (+91) or fallback to first entry
//   const defaultCountry = formattedCountries.find((c) => c.value === "+91") || formattedCountries[0];
//   const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="d-flex gap-2 align-items-center mb-4">
//       <div style={{ minWidth: "220px" }}>
//         <Select
//           options={formattedCountries}
//           value={selectedCountry}
//           onChange={(option) => setSelectedCountry(option)}
//           placeholder="Select"
//           styles={{
//             control: (base) => ({
//               ...base,
//               padding: "4px",
//               borderRadius: "8px",
//               fontSize: "14px",
//             }),
//           }}
//         />
//       </div>
//       <input
//         className="form-input py-3 px-3 w-100"
//         type="tel"
//         placeholder="Mobile Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//     </div>
//   );
// };

// export default CountryPhoneInput;


"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const CountryPhoneInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="" style={{ maxWidth: "400px" }}>
      <PhoneInput
        country={"in"} // default country
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputClass="form-input w-100"
        inputStyle={{
          width: "100%",
          height: "50px",
          fontSize: "16px",
          borderRadius: "8px",
          border:"none"
        }}
        dropdownStyle={{
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default CountryPhoneInput;
