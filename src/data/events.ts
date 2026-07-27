import images from "../assets/images";

export interface UpcomingEvent {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  image: string;
  spots: string;
  highlights: string[];
  content: string[];
}

export interface PastEvent {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  impact: string;
  content: string[];
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: 'annual-education-drive-2026',
    title: 'Annual Education Drive 2026',
    date: 'Feb 15, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Kampala, Uganda',
    desc: 'Join us for our annual education drive where we distribute school supplies, uniforms, and scholarships to 500+ underprivileged children.',
    image: images.education,
    spots: '200 volunteers needed',
    highlights: [
      'School supplies and uniforms for 500+ children',
      'Scholarship awards for outstanding students',
      'Career guidance sessions with local mentors',
      'Free health screening on site',
    ],
    content: [
      'Every February, SRK International Society brings together volunteers, donors, and local schools for our largest education outreach of the year. The Annual Education Drive is our flagship program aimed at removing the financial and material barriers that keep children out of school.',
      'This year\'s drive will take place across several primary and secondary schools in Kampala, reaching over 500 children with new uniforms, textbooks, stationery, and bags. Alongside the material support, our team will award scholarships to students who have shown outstanding academic promise but lack the means to continue their education.',
      'Volunteers will help with registration, distribution, and running fun learning activities for the children throughout the day. We are also partnering with local health workers to offer free basic health screenings so families can address any concerns while they are with us.',
      'We need around 200 volunteers to make the day run smoothly. Whether you can help for a few hours or the whole day, your presence will make a lasting difference in a child\'s education journey.',
    ],
  },
  {
    slug: 'free-medical-camp',
    title: 'Free Medical Camp',
    date: 'Mar 8, 2026',
    time: '8:00 AM - 2:00 PM',
    location: 'Wakiso District, Uganda',
    desc: 'A comprehensive free medical camp providing general health checkups, eye care, and maternal health services to rural communities.',
    image: images.healthcare_access,
    spots: '50 volunteers needed',
    highlights: [
      'General health checkups for all ages',
      'Free eye screening and reading glasses',
      'Maternal and child health consultations',
      'Basic medicines dispensed on site',
    ],
    content: [
      'Access to basic healthcare remains a major challenge for many rural communities in Wakiso District. Our Free Medical Camp brings qualified doctors, nurses, and volunteers directly to villages that otherwise face long, costly journeys to the nearest clinic.',
      'The camp will offer general health checkups, eye screenings with free reading glasses for those who need them, and dedicated maternal and child health consultations. Basic medicines will be dispensed on site at no cost to patients.',
      'We are looking for 50 volunteers to support registration, patient flow, translation, and logistics. Medical professionals interested in volunteering their time are especially welcome to reach out to our team ahead of the event.',
      'This camp is part of our ongoing commitment to make essential healthcare accessible to families who need it most, regardless of their ability to pay.',
    ],
  },
  {
    slug: 'clean-water-project-launch',
    title: 'Clean Water Project Launch',
    date: 'Apr 22, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Wakiso District, Uganda',
    desc: 'Launch of our new clean water initiative, installing water purification systems in 5 villages to provide safe drinking water.',
    image: images.clean_water,
    spots: '30 volunteers needed',
    highlights: [
      'Water purification systems installed in 5 villages',
      'Community training on system maintenance',
      'Hygiene and sanitation awareness workshops',
      'Launch ceremony with local leaders',
    ],
    content: [
      'Clean water changes everything: health, education, and daily life. On World Water Day this April, we are launching a new initiative to install water purification systems in five villages across Wakiso District that currently rely on unsafe water sources.',
      'The launch event will include the commissioning of the first purification system, training for community members on how to maintain the equipment, and hygiene and sanitation workshops led by our public health team.',
      'Local leaders and district officials will join us to mark the occasion, and we\'ll be sharing the rollout plan for the remaining four villages over the following months.',
      'We\'re looking for 30 volunteers to help with setup, community engagement, and workshop facilitation. If you have experience in engineering, public health, or community mobilization, we\'d love your support.',
    ],
  },
];

export const pastEvents: PastEvent[] = [
  // {
  //   slug: 'winter-clothing-drive-2025',
  //   title: 'Winter Clothing Drive 2025',
  //   date: 'Dec 2025',
  //   location: 'Kampala & Wakiso',
  //   image: 'https://images.pexels.com/photos/6994913/pexels-photo-6994913.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //   impact: '5,000+ people received warm clothing',
  //   content: [
  //     'Throughout December 2025, SRK International Society ran a community-wide clothing drive across Kampala and Wakiso District, collecting and distributing warm clothing to families facing the cold rainy season.',
  //     'With the help of over 80 volunteers and dozens of community drop-off points, we collected thousands of clothing items which were sorted, cleaned where needed, and distributed directly to families identified through our community partners.',
  //     'In total, more than 5,000 people received warm clothing through this drive, including children at three local primary schools who received jackets in time for the new term.',
  //   ],
  // },
  {
    slug: 'women-skills-training-graduation',
    title: 'Women Skills Training Graduation',
    date: 'Nov 2025',
    location: 'Kampala, Uganda',
    image: images.women_empowerment,
    impact: '120 women graduated with new skills',
    content: [
      'After six months of training in tailoring, hairdressing, and small business management, 120 women graduated from our Vocational Skills Training Program in a celebration held in Kampala.',
      'The program is designed to give women practical, income-generating skills alongside basic business and financial literacy training, so graduates can start or grow their own small enterprises.',
      'Several graduates have already begun trading, and a number have gone on to train other women in their communities, extending the program\'s impact well beyond the original cohort.',
    ],
  },
  // {
  //   slug: 'flood-relief-mission',
  //   title: 'Flood Relief Mission',
  //   date: 'Sep 2025',
  //   location: 'Wakiso District, Uganda',
  //   image: images.flood_relief,
  //   impact: '2,000+ families received emergency aid',
  //   content: [
  //     'Heavy rains in September 2025 caused severe flooding across parts of Wakiso District, displacing families and damaging homes and property. SRK International Society mobilized an emergency relief response within 48 hours.',
  //     'Our team distributed emergency food packages, clean water, blankets, and hygiene kits to more than 2,000 affected families, working closely with local authorities to reach the hardest-hit areas first.',
  //     'Beyond the immediate relief, we supported early recovery efforts by helping several households repair essential structures and access temporary shelter.',
  //   ],
  // },
  {
    slug: 'health-awareness-week',
    title: 'Health Awareness Week',
    date: 'Aug 2025',
    location: 'Kampala, Uganda',
    image: images.mental_health,
    impact: '10,000+ people reached',
    content: [
      'Health Awareness Week brought free health talks, screenings, and community outreach events to neighborhoods across Kampala over the course of seven days.',
      'Topics covered included maternal health, nutrition, hygiene, and prevention of common communicable diseases, delivered by volunteer health professionals and community health workers.',
      'The week reached over 10,000 people through a mix of community gatherings, school visits, and radio outreach, and helped connect dozens of families to ongoing healthcare services.',
    ],
  },
];
