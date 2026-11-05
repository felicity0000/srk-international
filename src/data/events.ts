import images from "../assets/images";

export interface UpcomingEvent {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  desc: string;
  image: string;
  spots?: string;
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
    slug: 'back-to-school-donation-drive-2026',
    title: 'Back to School Donation Drive',
    date: 'Sep 13, 2026',
    location: 'Mutungo Parish, Kitintale Village, Zone 12',
    desc: 'Join us in Kitintale as we hand out scholastic materials and menstrual health supplies, and run career guidance sessions for children and young people heading back to school.',
    image: images.school_drive_poster,
    highlights: [
      'Exercise books, pens and school supplies for children',
      'Menstrual health management materials for girls and young women',
      'Menstrual management sessions in a safe, open space',
      'Career guidance for young people in the community',
    ],
    content: [
      'On Sunday, 13th September 2026, SRK International Society will hold its Back to School Donation Drive at Mutungo Parish, Kitintale Village, Zone 12, bringing our team together with children, young people and families from the community.',
      'Scholastic materials are at the heart of the drive. We will hand out exercise books, pens and other school supplies so that children can return to the classroom with what they need to learn.',
      'We will also distribute menstrual health management materials to girls and young women, alongside sessions on menstrual management that give them practical information and a safe space to ask questions. No girl should have to miss school because of her period.',
      'Career guidance sessions will encourage young people to think about their futures, the paths open to them, and how staying in school can help them get there.',
      'Want to be part of the day? Volunteer with us or support the drive, and follow our journey as we transform lives, one community at a time.',
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
