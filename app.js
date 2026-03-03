// =============================================
//  MEDIBRIDGE — SHARED APP LOGIC
//  Clinic data, card generation, filtering
// =============================================

//  CLINIC DATA (inline, no fetch needed) 
const clinicsData = [
    {
        id: "jessie-trice",
        name: "Jessie Trice Community Health Center",
        type: ["clinic", "pharmacy", "mental-health"],
        specialty: ["Primary Care", "Dental", "Mental Health", "OB-GYN"],
        address: "5361 NW 22nd Ave, Miami, FL 33142",
        zip: "33142",
        phone: "(305) 637-3030",
        languages: ["English", "Spanish", "Haitian Creole"],
        insurance: ["Medicaid", "Medicare", "Sliding Scale", "Uninsured"],
        meds_onsite: true,
        free_therapy: true,
        sliding_scale: true,
        availability: "green",
        wait_time: "Same day",
        hours: "Mon–Fri 8am–5pm",
        description: "FQHC serving Miami-Dade with comprehensive primary care, dental, and behavioral health services. Sliding-scale fees available. Medications dispensed on-site through the 340B program.",
        featured: true,
        followers: 142
    },
    {
        id: "camillus-health",
        name: "Camillus Health Concern",
        type: ["clinic", "pharmacy"],
        specialty: ["Primary Care", "HIV/AIDS", "Substance Abuse"],
        address: "336 NW 5th St, Miami, FL 33128",
        zip: "33128",
        phone: "(305) 577-4848",
        languages: ["English", "Spanish"],
        insurance: ["Medicaid", "Uninsured", "Sliding Scale"],
        meds_onsite: true,
        free_therapy: false,
        sliding_scale: true,
        availability: "yellow",
        wait_time: "2–3 days",
        hours: "Mon–Fri 7:30am–4pm",
        description: "Serving the homeless and uninsured population of Miami with compassionate, comprehensive healthcare since 1976.",
        featured: true,
        followers: 98
    },
    {
        id: "neighborhood-health",
        name: "Neighborhood Health Partnership",
        type: ["clinic"],
        specialty: ["Primary Care", "Pediatrics", "Women's Health"],
        address: "3850 Bird Rd, Miami, FL 33146",
        zip: "33146",
        phone: "(305) 662-8011",
        languages: ["English", "Spanish"],
        insurance: ["Medicaid", "Medicare", "Sliding Scale", "Uninsured"],
        meds_onsite: false,
        free_therapy: false,
        sliding_scale: true,
        availability: "green",
        wait_time: "Next day",
        hours: "Mon–Sat 8am–6pm",
        description: "Community health center providing affordable primary care for the whole family in the heart of Miami.",
        featured: false,
        followers: 67
    },
    {
        id: "miami-dade-mental-health",
        name: "Miami Center for Mental Health",
        type: ["mental-health"],
        specialty: ["Therapy", "Psychiatry", "Crisis Support", "Substance Abuse"],
        address: "1490 NW 7th St, Miami, FL 33125",
        zip: "33125",
        phone: "(305) 643-5000",
        languages: ["English", "Spanish"],
        insurance: ["Medicaid", "Uninsured", "Sliding Scale"],
        meds_onsite: false,
        free_therapy: true,
        sliding_scale: true,
        availability: "yellow",
        wait_time: "3–5 days",
        hours: "Mon–Fri 9am–6pm",
        description: "Comprehensive behavioral health services including free therapy sessions for qualifying low-income residents.",
        featured: true,
        followers: 211
    },
    {
        id: "borinquen-health",
        name: "Borinquen Health Care Center",
        type: ["clinic", "pharmacy"],
        specialty: ["Primary Care", "Dental", "Pediatrics", "Chiropractic"],
        address: "3601 W Flagler St, Miami, FL 33134",
        zip: "33134",
        phone: "(305) 576-6611",
        languages: ["English", "Spanish"],
        insurance: ["Medicaid", "Medicare", "Sliding Scale", "Uninsured"],
        meds_onsite: true,
        free_therapy: false,
        sliding_scale: true,
        availability: "green",
        wait_time: "Same day",
        hours: "Mon–Fri 8am–7pm, Sat 9am–3pm",
        description: "FQHC offering comprehensive care including dental and chiropractic. Medications available at reduced cost through 340B.",
        featured: false,
        followers: 183
    },
    {
        id: "planned-parenthood-miami",
        name: "Planned Parenthood – Miami",
        type: ["clinic"],
        specialty: ["Women's Health", "STI Testing", "OB-GYN", "Family Planning"],
        address: "1901 SW 1st St, Miami, FL 33135",
        zip: "33135",
        phone: "(305) 285-9535",
        languages: ["English", "Spanish"],
        insurance: ["Medicaid", "Sliding Scale", "Uninsured"],
        meds_onsite: true,
        free_therapy: false,
        sliding_scale: true,
        availability: "green",
        wait_time: "Next day",
        hours: "Mon–Fri 8am–5pm",
        description: "Comprehensive reproductive and sexual health services. Sliding-scale fees and Medicaid accepted.",
        featured: false,
        followers: 329
    },
    {
        id: "miami-free-clinic",
        name: "Miami Free Clinic",
        type: ["clinic", "pharmacy"],
        specialty: ["Primary Care", "Dental", "Vision"],
        address: "7800 SW 57th Ave, South Miami, FL 33143",
        zip: "33143",
        phone: "(305) 665-5433",
        languages: ["English", "Spanish", "Haitian Creole"],
        insurance: ["Uninsured"],
        meds_onsite: true,
        free_therapy: false,
        sliding_scale: false,
        availability: "red",
        wait_time: "1–2 weeks",
        hours: "Tue & Thu 6pm–9pm",
        description: "Volunteer-run free clinic serving uninsured residents. Free medications provided through sample programs and donations.",
        featured: false,
        followers: 445
    },
    {
        id: "douglas-gardens",
        name: "Douglas Gardens Community Mental Health",
        type: ["mental-health"],
        specialty: ["Therapy", "Psychiatry", "Elder Care", "Crisis Intervention"],
        address: "5757 NW 2nd Ave, Miami, FL 33127",
        zip: "33127",
        phone: "(305) 754-6022",
        languages: ["English", "Spanish", "Haitian Creole"],
        insurance: ["Medicaid", "Medicare", "Sliding Scale", "Uninsured"],
        meds_onsite: false,
        free_therapy: true,
        sliding_scale: true,
        availability: "yellow",
        wait_time: "5–7 days",
        hours: "Mon–Fri 8am–5pm",
        description: "Community mental health center with a long history of serving diverse Miami communities including elderly and low-income populations.",
        featured: false,
        followers: 156
    }
];

//  HELPERS 
const availabilityConfig = {
    green: { dot: 'dot-green', label: 'Available Today' },
    yellow: { dot: 'dot-yellow', label: 'Limited Slots' },
    red: { dot: 'dot-red', label: 'Waitlist' }
};

const typeEmoji = {
    clinic: '',
    'mental-health': '',
    pharmacy: ''
};

//  BUILD CLINIC CARD 
function buildCard(c) {
    const avail = availabilityConfig[c.availability] || availabilityConfig.green;
    const emoji = typeEmoji[c.type[0]] || '';

    const badges = [
        c.featured ? `<span class="badge badge-ai"> Featured</span>` : '',
        c.meds_onsite ? `<span class="badge badge-green"> Meds</span>` : '',
        c.free_therapy ? `<span class="badge badge-green"> Free Therapy</span>` : '',
    ].join('');

    const tags = c.specialty.slice(0, 3).map(s => `<span class="tag">${s}</span>`).join('');

    return `
    <a class="clinic-card" href="clinica.html?id=${c.id}">
      <div class="clinic-card-header">
        <div class="clinic-avatar">${emoji}</div>
        <div class="clinic-badges">${badges}</div>
      </div>
      <div class="clinic-card-body">
        <h3>${c.name}</h3>
        <div class="clinic-card-address">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          ${c.address}
        </div>
        <div class="clinic-tags">${tags}</div>
        <div class="clinic-meta">
          <div>
            <span class="availability-dot">
              <span class="dot ${avail.dot}"></span>
              ${avail.label}
            </span>
            <div class="wait-time">⏱ Wait: ${c.wait_time}</div>
          </div>
          <button
            class="follow-btn"
            id="follow-${c.id}"
            onclick="handleFollow(event, '${c.id}')"
          >
            ${isFollowing(c.id) ? ' Following' : '+ Follow'}
          </button>
        </div>
      </div>
    </a>
  `;
}

//  FOLLOW SYSTEM (localStorage) 
function isFollowing(id) {
    const follows = JSON.parse(localStorage.getItem('mb_follows') || '[]');
    return follows.includes(id);
}

function handleFollow(e, id) {
    e.preventDefault();
    e.stopPropagation();
    let follows = JSON.parse(localStorage.getItem('mb_follows') || '[]');
    const btn = document.getElementById('follow-' + id);
    if (follows.includes(id)) {
        follows = follows.filter(f => f !== id);
        btn.textContent = '+ Follow';
        btn.classList.remove('following');
    } else {
        follows.push(id);
        btn.textContent = ' Following';
        btn.classList.add('following');
    }
    localStorage.setItem('mb_follows', JSON.stringify(follows));
}

//  RENDER FUNCTIONS 
function renderClinics(data, containerId = 'resultsClinics') {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (data.length === 0) {
        el.innerHTML = '';
        const empty = document.getElementById('emptyState');
        if (empty) empty.style.display = 'block';
        return;
    }
    const empty = document.getElementById('emptyState');
    if (empty) empty.style.display = 'none';
    el.innerHTML = data.map(buildCard).join('');
}

function renderFeatured() {
    const el = document.getElementById('featuredClinics');
    if (!el) return;
    const featured = clinicsData.filter(c => c.featured);
    el.innerHTML = featured.map(buildCard).join('');
}

//  FILTERING (buscar.html) 
function applyFilters() {
    const query = (document.getElementById('searchQuery')?.value || '').toLowerCase();
    const type = document.getElementById('filterType')?.value || '';
    const zip = document.getElementById('filterZip')?.value || '';
    const insurance = document.getElementById('filterInsurance')?.value || '';
    const lang = document.getElementById('filterLang')?.value || '';
    const avail = document.getElementById('filterAvail')?.value || '';
    const meds = document.getElementById('filterMeds')?.checked || false;
    const therapy = document.getElementById('filterTherapy')?.checked || false;
    const sliding = document.getElementById('filterSliding')?.checked || false;

    let results = clinicsData.filter(c => {
        if (query && !c.name.toLowerCase().includes(query) && !c.specialty.join(' ').toLowerCase().includes(query)) return false;
        if (type && !c.type.includes(type)) return false;
        if (zip && !c.zip.startsWith(zip)) return false;
        if (insurance && !c.insurance.includes(insurance)) return false;
        if (lang && !c.languages.includes(lang)) return false;
        if (avail && c.availability !== avail) return false;
        if (meds && !c.meds_onsite) return false;
        if (therapy && !c.free_therapy) return false;
        if (sliding && !c.sliding_scale) return false;
        return true;
    });

    // Sort: featured first, then by availability
    const availOrder = { green: 0, yellow: 1, red: 2 };
    results.sort((a, b) => {
        if (b.featured !== a.featured) return b.featured - a.featured;
        return availOrder[a.availability] - availOrder[b.availability];
    });

    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = `Showing ${results.length} clinic${results.length !== 1 ? 's' : ''} in Miami`;

    const banner = document.getElementById('aiMatchBanner');
    if (banner) {
        const countSpan = banner.querySelector('.badge');
        if (countSpan) countSpan.textContent = `${results.length} matches`;
    }

    renderClinics(results, 'resultsClinics');
}

//  INIT 
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    // buscar.html auto-init handled inline
});

// ── PRIVACY CONSENT BANNER ──
// Shows on every page until user checks checkbox. Stored in localStorage.
(function initPrivacyBanner() {
  if (localStorage.getItem('mb_privacy_accepted') === 'true') return;
  const el = document.createElement('div');
  el.id = 'privacyBanner';
  el.innerHTML = `<div style="position:fixed;bottom:0;left:0;right:0;background:#111111;border-top:2px solid #1f7a4d;z-index:99999;padding:20px 24px;display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap;box-shadow:0 -4px 24px rgba(0,0,0,0.4);font-family:'Inter',sans-serif;">
    <div style="flex:1;min-width:260px;">
      <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:6px;">Privacy Notice — MediBridge / FIU Student Research Project</div>
      <p style="font-size:12px;color:rgba(255,255,255,0.55);line-height:1.7;margin:0;">
        This platform was developed by Florida International University students for academic research purposes only. We collect only the minimum information needed to match patients with clinics. We do not sell your data or use it for advertising. Your use is entirely voluntary.
        <a href="politica-privacidad.html" target="_blank" style="color:#3dc47d;font-weight:600;margin-left:4px;">Read full Privacy Policy</a>
      </p>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start;flex-shrink:0;min-width:280px;">
      <label id="privacyLabel" style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:12px;color:rgba(255,255,255,0.8);line-height:1.6;">
        <input type="checkbox" id="privacyCheck" style="width:16px;height:16px;margin-top:2px;flex-shrink:0;accent-color:#1f7a4d;cursor:pointer;"/>
        I have read and understood the Privacy Policy and Terms of Use. My use of this platform is voluntary.
      </label>
      <button id="privacyBtn" disabled onclick="window.mbAcceptPrivacy()" style="padding:10px 0;background:#1f7a4d;color:white;border:none;border-radius:5px;font-size:13px;font-weight:700;cursor:default;font-family:'Inter',sans-serif;opacity:0.35;width:100%;transition:opacity 0.15s,background 0.15s;">Accept &amp; Continue</button>
    </div>
  </div>`;
  document.body.appendChild(el);
  document.getElementById('privacyCheck').addEventListener('change', function() {
    const btn = document.getElementById('privacyBtn');
    btn.disabled = !this.checked;
    btn.style.opacity = this.checked ? '1' : '0.35';
    btn.style.cursor = this.checked ? 'pointer' : 'default';
  });
})();

window.mbAcceptPrivacy = function() {
  localStorage.setItem('mb_privacy_accepted', 'true');
  const b = document.getElementById('privacyBanner');
  if (b) { b.style.transition = 'opacity 0.3s,transform 0.3s'; b.style.opacity = '0'; b.style.transform = 'translateY(16px)'; setTimeout(() => b.remove(), 350); }
};
