

// "use client";

// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

// const CountryPhoneInput = () => {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="" style={{ maxWidth: "400px" }}>
//       <PhoneInput
//         country={"in"} // default country
//         value={phone}
//         onChange={(phone) => setPhone(phone)}
//         inputClass="form-input w-100"
//         inputStyle={{
//           width: "100%",
//           height: "50px",
//           fontSize: "16px",
//           borderRadius: "8px",
//           border:"none"
//         }}
//         dropdownStyle={{
//           zIndex: 9999,
//         }}
//       />
//     </div>
//   );
// };

// export default CountryPhoneInput;


"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const CountryPhoneInput = ({ value, onChange }) => {
  return (
    <div style={{ maxWidth: "400px" }}>
      <PhoneInput
        country={"in"} 
        value={value}
        onChange={onChange} 
        inputClass="form-input w-100"
        inputStyle={{
          width: "100%",
          height: "50px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
        }}
        dropdownStyle={{
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default CountryPhoneInput;
