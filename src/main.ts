import englishJson from "./i18n/en.json";
import frenchJson from "./i18n/fr.json";

import { flatten } from "./flatten";

const englishKeys = Object.keys(flatten(englishJson));
const frenchKeys = Object.keys(flatten(frenchJson));
const keyDifference = englishKeys.filter((k) => !frenchKeys.includes(k));

const data = `<ol>${keyDifference.map((k) => `<li>${k}</li>`).join("")}</ol>`;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = data;
