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
    // contact
    contact_title: "Demande de dépannage",
    contact_name: "Nom complet",
    contact_email: "Email",
    contact_phone: "Téléphone",
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
    // contact
    contact_title: "Service request",
    contact_name: "Full name",
    contact_email: "Email",
    contact_phone: "Phone number",
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
  setText("labelService", t.contact_service);
  setText("labelMessage", t.contact_message);
  const submit = document.getElementById("contactSubmit");
  if(submit) submit.textContent = t.contact_submit;
  setText("backHome", t.back_home);

  // placeholders
  const name = document.getElementById("name"); if(name) name.placeholder = t.contact_name;
  const email = document.getElementById("email"); if(email) email.placeholder = t.contact_email;
  const phone = document.getElementById("phone"); if(phone) phone.placeholder = t.contact_phone;
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
