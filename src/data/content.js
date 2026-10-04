// All page content lives here, so components only handle layout.
// Paste exact copy from tis.edu.in wherever a comment says so.
// Keep the export names and the key names: components read them directly.

// Menu links. Each href must match the id of a section in App.jsx
// (no spaces). Add an item here only after its section exists.
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Sports', href: '#sports' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Admission', href: '#admission' },
]

export const hero = {
  eyebrow: 'CBSE Co-Ed Boarding & Day School · Dehradun',
  title: 'Welcome to Tulas International School',
  subtitle:
    'A CBSE school for boys and girls from Class IV to XII, focused on academic excellence and all-round development.',
  primaryCta: { label: 'Apply Now', href: 'https://admission.tis.edu.in' },
  secondaryCta: { label: 'Enquire Now', href: '#admission' },
}

export const about = {
  title: 'Our History',
  text: 'Established in 2012 under the aegis of Rishabh Educational Trust, TIS offers modern facilities and a nurturing environment where students grow in academics, sports, arts and leadership.',
}

// Used by AboutSection. The icon must be one of: Trees, Trophy, HeartPulse, Users.
export const stats = [
  { value: '22', label: 'Acre pollution-free campus', icon: 'Trees' },
  { value: '16+', label: 'Olympic sports', icon: 'Trophy' },
  { value: '24x7', label: 'Medical assistance', icon: 'HeartPulse' },
  { value: '6:1', label: 'Student-teacher ratio', icon: 'Users' },
]

// Displayed by AcademicsSection.
// Replace each text with the exact copy from the Academics page of tis.edu.in.
export const academics = {
  title: 'Academics',
  items: [
    { title: 'Pedagogy', text: 'Add the exact text about pedagogy here.' },
    { title: 'Curriculum', text: 'Add the exact text about the curriculum here.' },
    { title: 'Streams Offered', text: 'Add the exact text about the streams offered here.' },
    { title: 'International Tie-Ups', text: 'Add the exact text about international tie-ups here.' },
  ],
}

export const sports = [
  'Archery',
  'Cycling',
  'Hockey',
  'Swimming',
  'Taekwondo',
  'Football',
  'Shooting Range',
  'Horse Riding',
  'Billiards',
  'Squash',
  'Volleyball',
  'Basketball',
  'Cricket',
  'Lawn Tennis',
  'Badminton',
  'Table Tennis',
]

export const rankings = [
  { rank: '#1', place: 'In Dehradun', source: 'Education Today' },
  { rank: '#2', place: 'In Uttarakhand', source: 'Education Today' },
  { rank: '#1', place: 'In North India', source: 'Outlook' },
  { rank: '#4', place: 'In India', source: 'Education Today' },
]

// Short paraphrases. Replace with the exact parent reviews from tis.edu.in.
export const testimonials = [
  {
    quote: 'Sports, academics and activities together helped our child know himself better.',
    name: 'Namita Agarwal',
    relation: 'Mother of Krishna Agarwal',
  },
  {
    quote: 'The staff is cooperative and supportive, and our son always speaks well of the school.',
    name: 'Sandeep Kumar',
    relation: 'Father of Aryan',
  },
  {
    quote: 'A well-planned academic programme and lots of exposure for the children.',
    name: 'Suresh Kumar',
    relation: 'Father of Aditya Kumar',
  },
]

export const classes = ['IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export const contact = {
  address: 'Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  helpline: '+91-9837983791',
  landlines: ['0135-2699444', '0135-2699666'],
  email: 'info@tis.edu.in',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
    { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
  ],
}