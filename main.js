/* ── STUDENTS DATA ─────────────────────────────────── */
const students=[
  {name:"Andi Pratama",role:"Class President",num:"01",hobby:"Football",dream:"Engineer",photo:"https://randomuser.me/api/portraits/men/32.jpg",tags:["Leader","Sports"]},
  {name:"Siti Rahma",role:"Vice President",num:"02",hobby:"Reading",dream:"Doctor",photo:"https://randomuser.me/api/portraits/women/44.jpg",tags:["Academic","Kind"]},
  {name:"Budi Santoso",role:"Secretary",num:"03",hobby:"Photography",dream:"Journalist",photo:"https://randomuser.me/api/portraits/men/45.jpg",tags:["Creative","Media"]},
  {name:"Dewi Lestari",role:"Treasurer",num:"04",hobby:"Cooking",dream:"Chef",photo:"https://randomuser.me/api/portraits/women/33.jpg",tags:["Organized","Culinary"]},
  {name:"Rizky Firmansyah",role:"Student",num:"05",hobby:"Gaming",dream:"Game Dev",photo:"https://randomuser.me/api/portraits/men/22.jpg",tags:["Tech","Creative"]},
  {name:"Putri Maharani",role:"Student",num:"06",hobby:"Dance",dream:"Performer",photo:"https://randomuser.me/api/portraits/women/26.jpg",tags:["Arts","Active"]},
  {name:"Fajar Nugraha",role:"Student",num:"07",hobby:"Coding",dream:"Software Eng.",photo:"https://randomuser.me/api/portraits/men/34.jpg",tags:["Tech","Logic"]},
  {name:"Ayu Safitri",role:"Student",num:"08",hobby:"Painting",dream:"Artist",photo:"https://randomuser.me/api/portraits/women/55.jpg",tags:["Arts","Calm"]},
  {name:"Hendra Wijaya",role:"Student",num:"09",hobby:"Basketball",dream:"Athlete",photo:"https://randomuser.me/api/portraits/men/41.jpg",tags:["Sports","Team"]},
  {name:"Nabila Azzahra",role:"Student",num:"10",hobby:"Writing",dream:"Author",photo:"https://randomuser.me/api/portraits/women/62.jpg",tags:["Literature","Creative"]},
  {name:"Muhammad Rafli",role:"Student",num:"11",hobby:"Music",dream:"Musician",photo:"https://randomuser.me/api/portraits/men/52.jpg",tags:["Arts","Music"]},
  {name:"Clarissa Putri",role:"Student",num:"12",hobby:"Volunteering",dream:"Activist",photo:"https://randomuser.me/api/portraits/women/17.jpg",tags:["Social","Caring"]},
  {name:"Dimas Prasetyo",role:"Student",num:"13",hobby:"Hiking",dream:"Geologist",photo:"https://randomuser.me/api/portraits/men/63.jpg",tags:["Outdoors","Science"]},
  {name:"Indah Permata",role:"Student",num:"14",hobby:"Yoga",dream:"Psychologist",photo:"https://randomuser.me/api/portraits/women/28.jpg",tags:["Wellness","Calm"]},
  {name:"Kevin Andrean",role:"Student",num:"15",hobby:"Chess",dream:"Strategist",photo:"https://randomuser.me/api/portraits/men/71.jpg",tags:["Logic","Thinker"]},
  {name:"Layla Nuraini",role:"Student",num:"16",hobby:"Astronomy",dream:"Astronomer",photo:"https://randomuser.me/api/portraits/women/39.jpg",tags:["Science","Dreamer"]},
  {name:"Mochammad Ilham",role:"Student",num:"17",hobby:"Skateboarding",dream:"Entrepreneur",photo:"https://randomuser.me/api/portraits/men/18.jpg",tags:["Active","Bold"]},
  {name:"Nina Kartika",role:"Student",num:"18",hobby:"Gardening",dream:"Botanist",photo:"https://randomuser.me/api/portraits/women/47.jpg",tags:["Nature","Science"]},
  {name:"Oscar Permana",role:"Student",num:"19",hobby:"Film Editing",dream:"Director",photo:"https://randomuser.me/api/portraits/men/29.jpg",tags:["Media","Creative"]},
  {name:"Priscilla Tan",role:"Student",num:"20",hobby:"Baking",dream:"Nutritionist",photo:"https://randomuser.me/api/portraits/women/58.jpg",tags:["Culinary","Health"]},
  {name:"Qori Rahmawati",role:"Student",num:"21",hobby:"Calligraphy",dream:"Designer",photo:"https://randomuser.me/api/portraits/women/19.jpg",tags:["Arts","Detail"]},
  {name:"Rafi Alamsyah",role:"Student",num:"22",hobby:"Robotics",dream:"AI Researcher",photo:"https://randomuser.me/api/portraits/men/36.jpg",tags:["Tech","Future"]},
  {name:"Sabrina Hasanah",role:"Student",num:"23",hobby:"Origami",dream:"Architect",photo:"https://randomuser.me/api/portraits/women/31.jpg",tags:["Arts","Design"]},
  {name:"Teguh Subroto",role:"Student",num:"24",hobby:"Swimming",dream:"Marine Biologist",photo:"https://randomuser.me/api/portraits/men/48.jpg",tags:["Sports","Nature"]},
  {name:"Ulfa Ramadhani",role:"Student",num:"25",hobby:"Piano",dream:"Music Teacher",photo:"https://randomuser.me/api/portraits/women/72.jpg",tags:["Music","Teaching"]},
  {name:"Vino Hartanto",role:"Student",num:"26",hobby:"Badminton",dream:"Sports Coach",photo:"https://randomuser.me/api/portraits/men/57.jpg",tags:["Sports","Active"]},
  {name:"Wulandari Sari",role:"Student",num:"27",hobby:"Journaling",dream:"Therapist",photo:"https://randomuser.me/api/portraits/women/23.jpg",tags:["Reflective","Caring"]},
  {name:"Xavier Lie",role:"Student",num:"28",hobby:"Investing",dream:"Economist",photo:"https://randomuser.me/api/portraits/men/66.jpg",tags:["Finance","Logic"]},
  {name:"Yeni Kurniasih",role:"Student",num:"29",hobby:"Theater",dream:"Actress",photo:"https://randomuser.me/api/portraits/women/82.jpg",tags:["Drama","Arts"]},
  {name:"Zahra Islamiyah",role:"Student",num:"30",hobby:"Teaching",dream:"Professor",photo:"https://randomuser.me/api/portraits/women/36.jpg",tags:["Academic","Leader"]},
  {name:"Ariel Saputra",role:"Student",num:"31",hobby:"Cycling",dream:"Urban Planner",photo:"https://randomuser.me/api/portraits/men/77.jpg",tags:["Active","Design"]},
  {name:"Bella Adriana",role:"Student",num:"32",hobby:"Fashion Design",dream:"Fashion Designer",photo:"https://randomuser.me/api/portraits/women/90.jpg",tags:["Arts","Style"]},
];

function renderStudents(){
  const grid=document.getElementById('studentsGrid');
  const dl=['rd1','rd2','rd3','rd4'];
  students.forEach((s,i)=>{
    const c=document.createElement('div');
    c.className='student-card reveal '+dl[i%4];
    c.innerHTML=`
      <div class="student-num">${s.num}</div>
      <div class="student-photo-wrap">
        <img src="${s.photo}" alt="${s.name}" loading="lazy"
          onerror="this.style.display='none';this.parentNode.insertAdjacentHTML('beforeend','<div style=\\'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:32px;\\'>👤</div>')">
      </div>
      <div class="student-name">${s.name}</div>
      <div class="student-role">${s.role}</div>
      <div class="student-info">🎯 ${s.hobby}<br>✨ ${s.dream}</div>
      <div class="student-tags">${s.tags.map(t=>`<span class="stag">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(c);
  });
}

/* ── HAMBURGER ─────────────────────────────────────── */
function toggleDrawer(){
  const h=document.getElementById('hamburger');
  const d=document.getElementById('navDrawer');
  h.classList.toggle('open');
  d.classList.toggle('open');
}
function closeDrawer(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navDrawer').classList.remove('open');
}
document.addEventListener('click',e=>{
  const nav=document.getElementById('navbar');
  const drawer=document.getElementById('navDrawer');
  if(drawer.classList.contains('open')&&!nav.contains(e.target)&&!drawer.contains(e.target))closeDrawer();
});

/* ── THEME ─────────────────────────────────────────── */
let isDark=false;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('themeBtn').classList.toggle('dark',isDark);
  document.getElementById('theme-icon').textContent=isDark?'🌙':'☀️';
}

/* ── MUSIC (Audio File) ────────────────────────────── */
const audio = document.getElementById('bgMusic');
audio.volume = 0.55;
let playing = false;

function toggleMusic(){
  const btn  = document.getElementById('music-btn');
  const bars = document.getElementById('mbars');
  if(!playing){
    audio.play().then(()=>{
      playing = true;
      btn.textContent = '⏸';
      bars.classList.remove('paused');
    }).catch(()=>{});
  } else {
    audio.pause();
    playing = false;
    btn.textContent = '▶';
    bars.classList.add('paused');
  }
}

/* Auto-play on first user interaction (browser policy) */
let autoStarted = false;
document.addEventListener('click', function tryAuto(){
  if(!autoStarted){
    autoStarted = true;
    audio.play().then(()=>{
      playing = true;
      document.getElementById('music-btn').textContent = '⏸';
      document.getElementById('mbars').classList.remove('paused');
    }).catch(()=>{});
  }
  document.removeEventListener('click', tryAuto);
}, {once: true});

/* ── SCROLL REVEAL ─────────────────────────────────── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});

/* ── NAVBAR SCROLL ─────────────────────────────────── */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
  const secs=['home','structure','students','gallery'];
  let cur='';
  secs.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-100)cur=id;});
  const sel='#'+cur;
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')===sel);
  });
},{passive:true});

/* ── INIT ──────────────────────────────────────────── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hidden'),2400);
  renderStudents();
  setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>obs.observe(el)),300);
});