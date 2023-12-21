import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

function Footer3(props) {
  return (
    <div class="footer-panel3">
      <div class="logo"></div>
      <div class="lang">
        <LanguageIcon />
      </div>

      <select class="cars">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Punjabi">Punjabi</option>
        <option value="Marathi">Marathi</option>
        <option value="Telgu">Telgu</option>
        <option value="Kannad">Kannad</option>
      </select>

      {/* <div class="state">
        <ul>
        <p>Australia</p>
        
        <a>Brazil</a>

        <a>China </a>
        <a>canad</a>
        <a>India</a>
        <a>Australia</a>
        <a>France</a>
        <a>Germany</a>
        <a>Italy</a>
        <a>Japan</a>
        <a>Mexico</a>
        <a>Poland</a>
        <a>Singapore</a>
        <a>Spain</a>
        <a>Turkey</a>
        <a>United Kingdom</a>
        <a>United States</a>
        </ul>
      </div> */}
    </div>
  );
}

export default Footer3;
