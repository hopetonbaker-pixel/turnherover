/* =========================
   TurnHerOver - app.js
   State -> City -> Pricing -> SMS
   ========================= */

/** IMPORTANT:
 * Put your real text number here (E.164 format).
 * Example: +17025550123
 */
const BOOKING_NUMBER = "+17029608705";

/** Data from your Instawork screenshots (+ Canada),
 * plus a couple “close distance” add-ons like Henderson/North Las Vegas.
 */
const DATA = {
  "Arizona": ["Phoenix", "Scottsdale", "Tempe", "Mesa"],
  "California": ["Los Angeles", "San Diego", "San Francisco Bay Area"],
  "Colorado": ["Denver", "Aurora", "Lakewood"],
  "District of Columbia": ["Washington"],
  "Florida": ["Jacksonville", "Miami", "Orlando", "Tampa"],
  "Georgia": ["Atlanta"],
  "Illinois": ["Chicago"],
  "Indiana": ["Indianapolis"],
  "Kansas / Missouri": ["Kansas City"],
  "Kentucky": ["Louisville"],
  "Louisiana": ["New Orleans", "Metairie"],
  "Maryland": ["Baltimore"],
  "Massachusetts": ["Boston"],
  "Michigan": ["Detroit"],
  "Minnesota": ["Minneapolis", "St. Paul"],
  "Missouri": ["St. Louis"],
  "Nevada": ["Las Vegas", "North Las Vegas", "Henderson", "Paradise"],
  "New Mexico": ["Albuquerque"],
  "New York": ["Buffalo", "New York City", "Rochester"],
  "North Carolina": ["Charlotte", "Raleigh–Durham"],
  "Ohio": ["Cincinnati", "Cleveland", "Columbus"],
  "Oregon": ["Portland"],
  "Pennsylvania": ["Philadelphia", "Pittsburgh"],
  "Rhode Island": ["Providence"],
  "Tennessee": ["Memphis", "Nashville"],
  "Texas": ["Austin", "Dallas", "Houston", "San Antonio"],
  "Utah": ["Salt Lake City"],
  "Virginia": ["Richmond", "Virginia Beach"],
  "Washington": ["Seattle"],
  "Wisconsin": ["Milwaukee"],
  "Canada": ["Vancouver (BC)", "Toronto (ON)"]
};

/** Cost-of-labor multipliers by market (rough tiers).
 * If a city isn't listed here, it uses 1.0
 */
const CITY_MULTIPLIER = {
  "San Francisco Bay Area": 1.35,
  "New York City": 1.30,
  "Boston": 1.20,
  "Washington": 1.20,
  "Seattle": 1.18,
  "Los Angeles": 1.15,
  "San Diego": 1.10,
  "Miami": 1.08,
  "Toronto (ON)": 1.12,
  "Vancouver (BC)": 1.15,
  "Austin": 1.05,
  "Dallas": 1.03,
  "Denver": 1.05,
  "Chicago": 1.05,
  "Las Vegas": 1.00,
  "Phoenix": 0.98
};

/** Base pricing (you can change these anytime) */
const BASE = {
  standard: 170,   // typical 1–3 bed turnover starting point
  laundry: 25,     // per load/bundle
  resupply: 35     // essentials restock
};

/* ===== DOM ===== */
const screenTitle = document.getElementById("screenTitle");
const screenSub = document.getElementById("screenSub");
const backBtn = document.getElementById("backBtn");
const list = document.getElementById("list");
const comingSoonBtn = document.getElementById("comingSoonBtn");

const pricingPanel = document.getElementById("pricingPanel");
const pillLocation = document.getElementById("pillLocation");

const pStandard = document.getElementById("pStandard");
const pLaundry = document.getElementById("pLaundry");
const pResupply = document.getElementById("pResupply");

const nStandard = document.getElementById("nStandard");
const nLaundry = document.getElementById("nLaundry");
const nResupply = document.getElementById("nResupply");

const smsBtn = document.getElementById("smsBtn");

/* ===== State ===== */
let view = "state";   // "state" | "city" | "pricing"
let selectedState = null;
let selectedCity = null;

/* ===== Helpers ===== */
function money(n) {
  return `$${Math.round(n)}`;
}

function getMultiplier(city) {
  return CITY_MULTIPLIER[city] || 1.0;
}

function clearList() {
  list.innerHTML = "";
}

function show(el) {
  el.classList.remove("hidden");
}

function hide(el) {
  el.classList.add("hidden");
}

function setBackVisible(visible) {
  backBtn.style.display = visible ? "inline-flex" : "none";
}

function makeBtn(label, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn";
  btn.textContent = '${label}`;
  btn.addEventListener("click", onClick);
  return btn;
}

/* ===== Renderers ===== */
function renderStates() {
  view = "state";
  selectedState = null;
  selectedCity = null;

  screenTitle.textContent = "Select Your State 💖";
  screenSub.textContent = "Check availability in your area";

  setBackVisible(false);
  hide(pricingPanel);

  clearList();

  // Sort states A-Z (Canada included)
  const states = Object.keys(DATA).sort((a, b) => a.localeCompare(b));
  states.forEach((state) => {
    list.appendChild(makeBtn(state, () => renderCities(state)));
  });

  // Keep “Coming Soon” always visible at bottom
  comingSoonBtn.style.display = "inline-flex";
}

function renderCities(state) {
  view = "city";
  selectedState = state;
  selectedCity = null;

  screenTitle.textContent = `${state} — Select Your City 💖`;
  screenSub.textContent = "Choose your nearest city";

  setBackVisible(true);
  hide(pricingPanel);

  clearList();

  const cities = (DATA[state] || []).slice();
  cities.forEach((city) => {
    list.appendChild(makeBtn(city, () => renderPricing(state, city)));
  });

  comingSoonBtn.style.display = "inline-flex";
}

function renderPricing(state, city) {
  view = "pricing";
  selectedState = state;
  selectedCity = city;

  screenTitle.textContent = `${city} Pricing 💖`;
  screenSub.textContent = "Tap below to text for booking";

  setBackVisible(true);
  clearList();
  comingSoonBtn.style.display = "none";

  const mult = getMultiplier(city);

  const standard = BASE.standard * mult;
  const laundry = BASE.laundry * mult;
  const resupply = BASE.resupply * mult;

  pillLocation.textContent = `${city}, ${state}`;

  pStandard.textContent = money(standard);
  pLaundry.textContent = money(laundry);
  pResupply.textContent = money(resupply);

  nStandard.textContent = "Typical 1–3 bed (starting)";
  nLaundry.textContent = "Per load / bundle (starting)";
  nResupply.textContent = "Essentials restock (starting)";

  // Prefilled SMS body
  const body = encodeURIComponent(
    `Hey! I'm a host in ${city}, ${state}. I need a turnover. ` +
    `My listing is __ beds / __ baths. Check-out time is __ and next check-in is __. ` +
    `Can you confirm availability + pricing?`
  );

  // sms: works on phones; some Androids prefer ?body=, iPhone supports it
  smsBtn.href = `sms:${BOOKING_NUMBER}?body=${body}`;

  show(pricingPanel);
}

/* ===== Events ===== */
backBtn.addEventListener("click", () => {
  if (view === "pricing") return renderCities(selectedState);
  if (view === "city") return renderStates();
});

/* ===== Boot ===== */
renderStates();
