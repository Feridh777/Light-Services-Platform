const translations = {
  fr: {
    nav_home: "Accueil",
    nav_services: "Nos services",
    nav_contact: "Contact",
    hero_title: "Le bon professionnel, au bon endroit, au bon moment",
    hero_lead: "Des interventions rapides et fiables pour maisons, bureaux, restaurants et commerces.",
    btn_request: "Demander un service",
    btn_services: "Voir nos services",
    section_services: "Nos services",
    // services (8)
    s1_title: "Plomberie",
    s1_text: "Fuites, débouchage, installation et réparations.",
    s2_title: "Électricité",
    s2_text: "Pannes, installations, mise aux normes et maintenance.",
    s3_title: "Serrurerie",
    s3_text: "Ouverture, changement de serrures, sécurisation.",
    s4_title: "Équipements Thermiques (Chaud & Froid)",
    s4_text: "Climatiseurs, chauffages, réfrigérateurs, congélateurs, gazinières et équipements thermiques.",
    s5_title: "Menuiserie",
    s5_text: "Réparations, ajustements, petites installations.",
    s6_title: "Maçonnerie",
    s6_text: "Petits travaux, réparations, finitions.",
    s7_title: "Urgences 24/7",
    s7_text: "Interventions rapides pour pannes critiques.",
    s8_title: "Maintenance préventive",
    s8_text: "Inspections et entretien pour éviter les pannes.",
    // contact labels
    contact_title: "Demande de dépannage",
    contact_name: "Nom complet",
    contact_email: "Email",
    contact_phone: "Téléphone",
    contact_whatsapp: "WhatsApp",
    contact_location: "Lien Google Maps",
    contact_location_help: "Copiez-collez votre position (lien Google Maps)",
    loc_use_gps: "📍 Utiliser ma position actuelle",
    loc_clear: "Effacer",
    loc_fetching: "Récupération de la position…",
    loc_denied: "Autorisation refusée. Active la localisation dans ton navigateur.",
    loc_unavailable: "Position indisponible. Réessaie ou colle un lien Google Maps.",
    loc_not_supported: "La géolocalisation n’est pas supportée par ce navigateur.",
    loc_type_hint: "Commence à taper un lieu (ex: Ouagadougou, 1200 Logements…)",
    loc_suggestion_prefix: "Suggestion",
    contact_service: "Type de service",
    contact_message: "Description",
    contact_submit: "Envoyer la demande",
    back_home: "Retour à l'accueil",
    services_page_title: "Nos services"
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "The right professional, at the right place, at the right time",
    hero_lead: "Fast, reliable interventions for homes, offices, restaurants and businesses.",
    btn_request: "Request a service",
    btn_services: "See services",
    section_services: "Our services",
    // services (8)
    s1_title: "Plumbing",
    s1_text: "Leaks, unblocking, installation and repairs.",
    s2_title: "Electricity",
    s2_text: "Outages, installations, compliance and maintenance.",
    s3_title: "Locksmith",
    s3_text: "Door opening, lock changes, securing.",
    s4_title: "Thermal Equipment (Hot & Cold)",
    s4_text: "Air conditioners, heaters, refrigerators, freezers, cookers and thermal systems.",
    s5_title: "Carpentry",
    s5_text: "Repairs, adjustments, small installations.",
    s6_title: "Masonry",
    s6_text: "Small works, repairs, finishing.",
    s7_title: "24/7 Emergencies",
    s7_text: "Fast response for critical issues.",
    s8_title: "Preventive maintenance",
    s8_text: "Inspections and upkeep to avoid breakdowns.",
    // contact labels
    contact_title: "Service request",
    contact_name: "Full name",
    contact_email: "Email",
    contact_phone: "Phone number",
    contact_whatsapp: "WhatsApp",
    contact_location: "Google Maps link",
    contact_location_help: "Paste your location (Google Maps link)",
    loc_use_gps: "📍 Use my current location",
    loc_clear: "Clear",
    loc_fetching: "Fetching location…",
    loc_denied: "Permission denied. Enable location in your browser.",
    loc_unavailable: "Location unavailable. Try again or paste a Google Maps link.",
    loc_not_supported: "Geolocation is not supported by this browser.",
    loc_type_hint: "Start typing a place (e.g., Ouagadougou, 1200 Logements…)",
    loc_suggestion_prefix: "Suggestion",
    contact_service: "Service type",
    contact_message: "Description",
    contact_submit: "Send request",
    back_home: "Back to home",
    services_page_title: "Our services"
  }
};

function setText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = value;
}

function setLanguage(lang){
  const t = translations[lang] || translations.fr;

  // Nav
  setText("navHome", t.nav_home);
  setText("navServices", t.nav_services);
  setText("navContact", t.nav_contact);

  // Home hero
  setText("heroTitle", t.hero_title);
  setText("heroLead", t.hero_lead);
  setText("btnRequest", t.btn_request);
  setText("btnServices", t.btn_services);

  // Services section/cards
  setText("servicesSectionTitle", t.section_services);
  for(let i=1;i<=8;i++){
    setText(`s${i}Title`, t[`s${i}_title`]);
    setText(`s${i}Text`, t[`s${i}_text`]);
  }

  // Services page title
  setText("servicesPageTitle", t.services_page_title);

  // Contact page labels
  setText("contactTitle", t.contact_title);
  setText("labelName", t.contact_name);
  setText("labelEmail", t.contact_email);
  setText("labelPhone", t.contact_phone);
  setText("labelWhatsapp", t.contact_whatsapp);
  setText("labelLocation", t.contact_location);
  setText("locationHelp", t.contact_location_help);
  const gpsBtn = document.getElementById("useGpsBtn");
  if(gpsBtn) gpsBtn.textContent = t.loc_use_gps;
  const clearBtn = document.getElementById("clearLocBtn");
  if(clearBtn) clearBtn.textContent = t.loc_clear;

  setText("labelService", t.contact_service);
  setText("labelMessage", t.contact_message);

  const submit = document.getElementById("contactSubmit");
  if(submit) submit.textContent = t.contact_submit;
  setText("backHome", t.back_home);

  // placeholders
  const name = document.getElementById("name"); if(name) name.placeholder = t.contact_name;
  const email = document.getElementById("email"); if(email) email.placeholder = t.contact_email;
  const phone = document.getElementById("phone"); if(phone) phone.placeholder = t.contact_phone;
  const whatsapp = document.getElementById("whatsapp"); if(whatsapp) whatsapp.placeholder = t.contact_whatsapp + " (+226...)";
  const loc = document.getElementById("location"); if(loc) loc.placeholder = "https://maps.google.com/...";
  const msg = document.getElementById("message"); if(msg) msg.placeholder = t.contact_message;

  localStorage.setItem("ls_lang", lang);
}

document.addEventListener("DOMContentLoaded", ()=>{
  const switchers = document.querySelectorAll(".langSwitcher");
  const saved = localStorage.getItem("ls_lang") || "fr";
  switchers.forEach(s=>{
    s.value = saved;
    s.addEventListener("change", (e)=> setLanguage(e.target.value));
  });
  setLanguage(saved);
});


// --- V8 PRO: GPS + Autocomplete (Nominatim) ---
function debounce(fn, delay){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t = setTimeout(()=>fn(...args), delay);
  };
}

async function nominatimSearch(q){
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&q=${encodeURIComponent(q)}`;
  const res = await fetch(url, {headers: {"Accept":"application/json"}});
  if(!res.ok) return [];
  return await res.json();
}

async function nominatimReverse(lat, lon){
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
  const res = await fetch(url, {headers: {"Accept":"application/json"}});
  if(!res.ok) return null;
  return await res.json();
}

function showSuggestions(items){
  const box = document.getElementById("locSuggestions");
  if(!box) return;
  box.innerHTML = "";
  if(!items || items.length === 0){
    box.style.display = "none";
    return;
  }
  items.forEach((it)=>{
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = it.display_name || it.name || "";
    b.addEventListener("click", ()=>{
      const input = document.getElementById("location");
      if(input) input.value = b.textContent;
      box.style.display = "none";
      box.innerHTML = "";
    });
    box.appendChild(b);
  });
  box.style.display = "block";
}

function hideSuggestions(){
  const box = document.getElementById("locSuggestions");
  if(!box) return;
  box.style.display = "none";
  box.innerHTML = "";
}

function setupLocationUX(){
  const input = document.getElementById("location");
  const gpsBtn = document.getElementById("useGpsBtn");
  const clearBtn = document.getElementById("clearLocBtn");

  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      if(input) input.value = "";
      hideSuggestions();
    });
  }

  if(input){
    const doSearch = debounce(async ()=>{
      const q = input.value.trim();
      if(q.length < 3){ hideSuggestions(); return; }
      try{
        const items = await nominatimSearch(q);
        showSuggestions(items);
      }catch(e){
        hideSuggestions();
      }
    }, 300);

    input.addEventListener("input", doSearch);
    input.addEventListener("focus", doSearch);
    input.addEventListener("blur", ()=> setTimeout(hideSuggestions, 180));
  }

  if(gpsBtn){
    gpsBtn.addEventListener("click", async ()=>{
      const lang = localStorage.getItem("ls_lang") || "fr";
      const t = translations[lang] || translations.fr;

      if(!navigator.geolocation){
        alert(t.loc_not_supported);
        return;
      }

      const oldText = gpsBtn.textContent;
      gpsBtn.disabled = true;
      gpsBtn.textContent = t.loc_fetching;

      navigator.geolocation.getCurrentPosition(async (pos)=>{
        try{
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          // Try reverse geocoding for a friendly place name
          const rev = await nominatimReverse(lat, lon);
          const best = rev?.display_name ? rev.display_name : `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
          if(input) input.value = best;
        }catch(e){
          if(input) input.value = `${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
        }finally{
          gpsBtn.disabled = false;
          gpsBtn.textContent = oldText;
        }
      }, (err)=>{
        gpsBtn.disabled = false;
        gpsBtn.textContent = oldText;
        if(err && err.code === 1) alert(t.loc_denied);
        else alert(t.loc_unavailable);
      }, {enableHighAccuracy:true, timeout:10000, maximumAge:0});
    });
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  setupLocationUX();
});
