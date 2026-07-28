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
  gallery?: string[];
  impact: string;
  content: string[];
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: 'annual-education-drive-2027',
    title: 'Annual Education Drive 2027',
    date: 'Feb 20, 2027',
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
    date: 'Sep 12, 2026',
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
    date: 'Nov 14, 2026',
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
      'Clean water changes everything: health, education, and daily life. This November, we are launching a new initiative to install water purification systems in five villages across Wakiso District that currently rely on unsafe water sources.',
      'The launch event will include the commissioning of the first purification system, training for community members on how to maintain the equipment, and hygiene and sanitation workshops led by our public health team.',
      'Local leaders and district officials will join us to mark the occasion, and we\'ll be sharing the rollout plan for the remaining four villages over the following months.',
      'We\'re looking for 30 volunteers to help with setup, community engagement, and workshop facilitation. If you have experience in engineering, public health, or community mobilization, we\'d love your support.',
    ],
  },
];

export const pastEvents: PastEvent[] = [
  {
    slug: 'food-for-life-kadama-2022',
    title: 'Food for Life Campaign',
    date: 'Jan 15, 2022',
    location: 'Kadama, Uganda',
    image: images.food_for_life_1,
    gallery: [
      images.food_for_life_1,
      images.food_for_life_2,
      images.food_for_life_3,
      images.food_for_life_4,
    ],
    impact: 'Food and care packages delivered to children',
    content: [
      'On January 15, 2022, SRK International Society held its Food for Life Campaign in Kadama District, guided by the belief that "feeding the hungry is not charity but our social responsibility."',
      'Volunteers gathered children from the local community and distributed food and care packages directly to them, spending the day engaging with the families and getting to know the needs of the community.',
      'The campaign reflects SRK International Society\'s ongoing commitment to addressing hunger and supporting vulnerable children in underserved districts across Uganda.',
    ],
  },
  {
    slug: 'tree-plantation-drive-2021',
    title: 'Tree Plantation Drive 2021',
    date: 'Nov 4-5, 2021',
    location: 'Mukono & Mityana Districts, Uganda',
    image: images.tree_plantation_1,
    gallery: [
      images.tree_plantation_1,
      images.tree_plantation_2,
      images.tree_plantation_3,
      images.tree_plantation_4,
    ],
    impact: 'Trees planted across 4 communities',
    content: [
      'On November 4-5, 2021, SRK International Society organized a two-day Tree Plantation Drive across communities in Namanve, Kojja, and Kisoga in Mukono District, as well as Ntengeru Sub-county in Mityana District.',
      'Volunteers in SRK branded t-shirts worked alongside community members and local leaders, digging holes and planting saplings under the drive\'s message of environmental stewardship: save a tree, save a family.',
      'The initiative aimed to encourage reforestation and raise awareness of the long-term environmental and community benefits of tree planting, with local leaders and officials joining volunteers on the ground at each site.',
      'The drive reflects SRK International Society\'s commitment to environmental sustainability alongside its work in education, health, and community development.',
    ],
  },
];
