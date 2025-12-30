// ====== CONFIG YOU EDIT ONCE ======
const BUSINESS_NAME = "TurnHerOver";
const SMS_NUMBER = "18000000000"; // <-- put your real number like 17025551234 (no dashes)

const ICON_HEART = "assets/heart.png";

// Pricing model: base by city, with simple add-ons.
// You can adjust these numbers anytime.
const DATA = {
  "Arizona": {
    "Phoenix":       { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Scottsdale":    { standard: 179, laundry: 39, resupply: 29, note: "Higher-demand area" },
    "Mesa":          { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Tempe":         { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Glendale":      { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "California": {
    "Los Angeles":   { standard: 219, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Long Beach":    { standard: 209, laundry: 45, resupply: 35, note: "Near LA" },
    "Santa Monica":  { standard: 239, laundry: 49, resupply: 39, note: "Premium area" },
    "Pasadena":      { standard: 219, laundry: 45, resupply: 35, note: "Near LA" },

    "San Diego":     { standard: 209, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Chula Vista":   { standard: 199, laundry: 45, resupply: 35, note: "Near San Diego" },

    "San Francisco Bay Area": { standard: 249, laundry: 55, resupply: 45, note: "Very high labor market" },
    "Oakland":       { standard: 239, laundry: 55, resupply: 45, note: "Bay Area" },
    "San Jose":      { standard: 239, laundry: 55, resupply: 45, note: "Bay Area" },
  },

  "Colorado": {
    "Denver":        { standard: 189, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Aurora":        { standard: 179, laundry: 39, resupply: 29, note: "Near Denver" },
  },

  "District of Columbia": {
    "Washington":    { standard: 199, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Arlington":     { standard: 199, laundry: 45, resupply: 35, note: "Near DC" },
  },

  "Florida": {
    "Jacksonville":  { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Miami":         { standard: 189, laundry: 39, resupply: 29, note: "Higher demand" },
    "Fort Lauderdale":{standard: 189, laundry: 39, resupply: 29, note: "Near Miami" },
    "Orlando":       { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Kissimmee":     { standard: 159, laundry: 35, resupply: 25, note: "Near Orlando" },
    "Tampa":         { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "St. Petersburg":{ standard: 169, laundry: 35, resupply: 25, note: "Near Tampa" },
  },

  "Georgia": {
    "Atlanta":       { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Marietta":      { standard: 169, laundry: 39, resupply: 29, note: "Near Atlanta" },
  },

  "Illinois": {
    "Chicago":       { standard: 189, laundry: 39, resupply: 29, note: "Higher labor market" },
  },

  "Indiana": {
    "Indianapolis":  { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Kansas / Missouri": {
    "Kansas City":   { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Kentucky": {
    "Louisville":    { standard: 149, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Louisiana": {
    "New Orleans":   { standard: 169, laundry: 35, resupply: 25, note: "Tourism market" },
    "Metairie":      { standard: 159, laundry: 35, resupply: 25, note: "Near New Orleans" },
  },

  "Maryland": {
    "Baltimore":     { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Massachusetts": {
    "Boston":        { standard: 199, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Cambridge":     { standard: 209, laundry: 45, resupply: 35, note: "Near Boston" },
  },

  "Michigan": {
    "Detroit":       { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Minnesota": {
    "Minneapolis":   { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "St. Paul":      { standard: 179, laundry: 39, resupply: 29, note: "Near Minneapolis" },
  },

  "Missouri": {
    "St. Louis":     { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Nevada": {
    "Las Vegas":     { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Henderson":     { standard: 159, laundry: 35, resupply: 25, note: "Near Las Vegas" },
    "North Las Vegas":{standard: 149, laundry: 35, resupply: 25, note: "Near Las Vegas" },
    "Summerlin":     { standard: 169, laundry: 39, resupply: 29, note: "Premium area" },
  },

  "New Mexico": {
    "Albuquerque":   { standard: 149, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "New York": {
    "Buffalo":       { standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "New York City": { standard: 249, laundry: 59, resupply: 49, note: "Very high labor market" },
    "Brooklyn":      { standard: 249, laundry: 59, resupply: 49, note: "NYC" },
    "Queens":        { standard: 239, laundry: 59, resupply: 49, note: "NYC" },
    "Rochester":     { standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
  },

  "North Carolina": {
    "Charlotte":     { standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Raleigh-Durham":{ standard: 169, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Ohio": {
    "Cincinnati":    { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Cleveland":     { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Columbus":      { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Oregon": {
    "Portland":      { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Beaverton":     { standard: 169, laundry: 39, resupply: 29, note: "Near Portland" },
  },

  "Pennsylvania": {
    "Philadelphia":  { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Pittsburgh":    { standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
  },

  "Rhode Island": {
    "Providence":    { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
  },

  "Tennessee": {
    "Memphis":       { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Nashville":     { standard: 179, laundry: 39, resupply: 29, note: "Higher demand" },
  },

  "Texas": {
    "Austin":        { standard: 179, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Dallas":        { standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "Houston":       { standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
    "San Antonio":   { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Utah": {
    "Salt Lake City":{ standard: 169, laundry: 39, resupply: 29, note: "Typical 1–3 bed" },
  },

  "Virginia": {
    "Richmond":      { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
    "Virginia Beach":{ standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  "Washington": {
    "Seattle":       { standard: 209, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Bellevue":      { standard: 219, laundry: 45, resupply: 35, note: "Near Seattle" },
  },

  "Wisconsin": {
    "Milwaukee":     { standard: 159, laundry: 35, resupply: 25, note: "Typical 1–3 bed" },
  },

  // Canada (optional)
  "Canada": {
    "Vancouver":     { standard: 209, laundry: 45, resupply: 35, note: "Higher labor market" },
    "Toronto":       { standard: 209, laundry: 45, resupply: 35, note: "Higher labor market" },
  }
};

// ====== APP STATE ======
let currentScreen = "state"; // "state" | "city" | "pricing"
let selectedState = null;
let selectedCity = null;

// ====== ELEMENTS ======
const screenTitle = document.getElementById("screenTitle");
const screenSub = document.getElementById("screenSub");
const list = document.getElementById("list");
const backBtn = document.getElementById("backBtn");

const pricingPanel = document.getElementById("pricingPanel");
const pillLocation = document.getElementById("pillLocation");

const pStandard = document.getElementById("pStandard");
const pLaundry = document.getElementById("pLaundry");
const pResupply = document.getElementById("pResupply");

const nStandard = document.getElementById("nStandard");
const nLaundry = document.getElementById("nLaundry");
const nResupply = document.getElementById("nResupply");

const smsBtn = document.getElementById("smsBtn");

// ====== HELPERS ======
function money(n){
  return `$${Number(n).toFixed(0)}`;
}

function isIOS(){
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// iOS likes: sms:1800...&body=
// Android likes: sms:1800...?body=
function smsLink(number, body){
  const enc = encodeURIComponent(body);
  if (isIOS()) return `sms:${number}&body=${enc}`;
  return `sms:${number}?body=${enc}`;
}

function makeBtn(label, onClick){
  const a = document.createElement("a");
  a.className = "btn";
  a.href = "#";
  a.innerHTML = `<img class="icon" src="${ICON_HEART}" alt="" /> ${label}`;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    onClick();
  });
  return a;
}

function clear(node){
  while(node.firstChild) node.removeChild(node.firstChild);
}

// ====== RENDER ======
function render(){
  clear(list);

  // Back logic
  backBtn.style.display = (currentScreen === "state") ? "none" : "block";

  // Hide pricing unless on pricing screen
  pricingPanel.classList.toggle("hidden", currentScreen !== "pricing");

  if (currentScreen === "state"){
    screenTitle.textContent = "Select Your State 💖";
    screenSub.textContent = "Check availability in your area";

    Object.keys(DATA).sort().forEach(state => {
      list.appendChild(makeBtn(state, () => {
        selectedState = state;
        selectedCity = null;
        currentScreen = "city";
        render();
      }));
    });

    return;
  }

  if (currentScreen === "city"){
    screenTitle.textContent = `${selectedState} — Select Your City 💖`;
    screenSub.textContent = "Tap your area to see pricing & text to book";

    const cities = Object.keys(DATA[selectedState] || {}).sort();
    cities.forEach(city => {
      list.appendChild(makeBtn(city, () => {
        selectedCity = city;
        currentScreen = "pricing";
        render();
      }));
    });

    return;
  }

  if (currentScreen === "pricing"){
    screenTitle.textContent = "Pricing 💖";
    screenSub.textContent = "Tap “Text to Book” and we’ll confirm availability";

    const pack = DATA[selectedState][selectedCity];
    pillLocation.textContent = `${selectedCity}, ${selectedState}`;

    pStandard.textContent = money(pack.standard);
    pLaundry.textContent = `+ ${money(pack.laundry)}`;
    pResupply.textContent = `+ ${money(pack.resupply)}`;

    nStandard.textContent = pack.note || "Typical 1–3 bed";
    nLaundry.textContent = "Laundry bundle / load (as needed)";
    nResupply.textContent = "Restock essentials (host-approved list)";

    const smsBody =
`Hey ${BUSINESS_NAME} 💖
I'm a host in ${selectedCity}, ${selectedState}.
Property size (beds/baths): ___
Next checkout date/time: ___
Next check-in time: ___
Any pets / heavy mess / same-day?: ___

Can you confirm availability and the exact quote?`;

    smsBtn.href = smsLink(SMS_NUMBER, smsBody);

    return;
  }
}

// ====== EVENTS ======
backBtn.addEventListener("click", () => {
  if (currentScreen === "pricing"){
    currentScreen = "city";
    render();
    return;
  }
  if (currentScreen === "city"){
    currentScreen = "state";
    selectedState = null;
    selectedCity = null;
    render();
    return;
  }
});

// Boot
render();
