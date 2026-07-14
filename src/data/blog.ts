export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  content: string[];
}

export const featuredPost: BlogPost = {
  slug: 'srk-reaches-15000-lives-milestone',
  title: 'SRK International Society Reaches 15,000 Lives: A Milestone of Hope',
  excerpt: 'This year, we crossed a major milestone in our journey of service. Here\'s a look back at the impact we\'ve created together and what lies ahead.',
  image: 'https://images.pexels.com/photos/6994913/pexels-photo-6994913.jpeg?auto=compress&cs=tinysrgb&w=1200',
  date: 'Jan 10, 2026',
  author: 'Priya Nair',
  category: 'Impact Stories',
  content: [
    'This month, SRK International Society reached a milestone we have been working toward for years: 15,000 lives directly touched by our programs in education, healthcare, and community development across Kampala and Wakiso District.',
    'It is a number that represents thousands of individual stories: a child who received her first school uniform, a mother who accessed maternal healthcare for the first time, a village that now has clean drinking water. Each of these moments was made possible by the generosity of our donors and the dedication of our volunteers.',
    'Looking back, our growth has been steady and deliberate. We started as a small group of volunteers running weekend outreach programs, and have since built structured, sustainable initiatives across education, healthcare, water access, and women\'s empowerment.',
    'As we look ahead, our focus remains the same: measurable, lasting impact for the communities we serve. We are grateful to everyone who has walked this journey with us, and we invite you to be part of the next 15,000 stories of change.',
  ],
};

export const posts: BlogPost[] = [
  {
    slug: 'education-program-breaking-cycle-of-poverty',
    title: 'How Our Education Program Is Breaking the Cycle of Poverty',
    excerpt: 'Meet the children whose lives have been transformed through access to quality education and scholarships.',
    image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Jan 5, 2026',
    author: 'Arjun Mehta',
    category: 'Education',
    content: [
      'For many families in and around Kampala, the cost of school fees, uniforms, and books is the single biggest barrier standing between a child and an education. Our Education Program is designed to remove that barrier.',
      'Through scholarships, school supply distributions, and mentorship, we have supported hundreds of children in staying in school and pursuing their studies with confidence. For many of these children, our support has been the difference between dropping out and completing their education.',
      'We work closely with local schools and teachers to identify children most in need, and we track outcomes over time to make sure our support translates into real academic progress, not just short-term relief.',
      'The stories behind the numbers are what keep us going: students who have gone on to top their class, pursue vocational training, or become the first in their family to finish secondary school.',
    ],
  },
  {
    slug: 'mobile-clinic-healthcare-remote-villages',
    title: 'Bringing Healthcare to Remote Villages: Our Mobile Clinic Story',
    excerpt: 'Discover how our mobile medical clinics are reaching communities that have never had access to healthcare before.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 28, 2025',
    author: 'Dr. Kavita Rao',
    category: 'Healthcare',
    content: [
      'In many rural parts of Wakiso District, the nearest health facility can be hours away on foot. Our mobile clinics were created to close that gap, bringing doctors, nurses, and basic medicines directly to communities that need them most.',
      'Each mobile clinic visit includes general health checkups, maternal health consultations, and basic treatment for common illnesses. Where needed, patients are referred to partner hospitals for further care.',
      'Since launching the program, our mobile clinics have visited dozens of villages, often providing the first professional medical consultation many residents have ever had.',
      'We are working to expand the program\'s reach in the coming year, with the goal of establishing a regular visiting schedule so communities can rely on consistent access to care.',
    ],
  },
  {
    slug: 'women-empowerment-skills-to-self-reliance',
    title: 'Women Empowerment: From Skills to Self-Reliance',
    excerpt: 'The inspiring stories of women who have built sustainable livelihoods through our vocational training programs.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 20, 2025',
    author: 'Priya Nair',
    category: 'Empowerment',
    content: [
      'Economic independence is one of the most powerful tools for change in a woman\'s life, and in her family\'s life. Our vocational training programs equip women with practical skills in tailoring, hairdressing, and small business management.',
      'Beyond the technical training, we place a strong emphasis on financial literacy and business planning, helping graduates turn their new skills into sustainable income.',
      'Many of the women who complete our program go on to start their own small businesses, and a number have become mentors and trainers for other women in their communities, multiplying the program\'s impact.',
      'These stories of self-reliance are at the heart of why we do this work: real, lasting change that a woman builds for herself and passes on to others.',
    ],
  },
  {
    slug: 'clean-water-village-transformed',
    title: 'Clean Water Changes Everything: A Village Transformed',
    excerpt: 'How a single water purification system transformed the health and future of an entire village.',
    image: 'https://images.pexels.com/photos/2918361/pexels-photo-2918361.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 15, 2025',
    author: 'Arjun Mehta',
    category: 'Development',
    content: [
      'Before the installation of a water purification system, families in this Wakiso District village walked long distances daily to collect water that was often unsafe to drink, leading to frequent illness, especially among children.',
      'The installation of a single purification system changed daily life for the entire village. Waterborne illness dropped noticeably within months, and children who previously spent hours fetching water gained that time back for school and play.',
      'The system is maintained by a trained community committee, ensuring it remains functional long after our team\'s initial involvement, a model we are now replicating in neighboring villages.',
      'This is the kind of sustainable, community-owned impact we aim for in every water project we undertake.',
    ],
  },
  {
    slug: 'volunteer-spotlight-stories-that-inspire',
    title: 'Volunteer Spotlight: Stories That Inspire',
    excerpt: 'Meet the incredible volunteers who dedicate their time and skills to creating lasting change in communities.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 8, 2025',
    author: 'Suresh R. Kapoor',
    category: 'Community',
    content: [
      'Our work would not be possible without the hundreds of volunteers who give their time, skills, and energy to our programs every year. In this post, we highlight a few of the people behind the impact.',
      'From retired teachers running weekend tutoring sessions, to young professionals organizing weekend medical camps, our volunteers come from all walks of life, united by a shared commitment to service.',
      'Many of our long-term volunteers say the experience has changed their own outlook as much as it has helped the communities they serve, a reminder that giving back is rarely a one-way exchange.',
      'If you are inspired by these stories, we would love to have you join our volunteer community.',
    ],
  },
  {
    slug: 'disaster-relief-standing-with-communities',
    title: 'Disaster Relief: Standing With Communities in Crisis',
    excerpt: 'A behind-the-scenes look at our emergency response teams and how we deliver aid when it matters most.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 1, 2025',
    author: 'Arjun Mehta',
    category: 'Relief',
    content: [
      'When disaster strikes, the first 48 hours matter most. Our emergency response team is trained to mobilize quickly, coordinating with local authorities to assess needs and deliver aid where it is needed most.',
      'Our relief kits typically include emergency food, clean water, blankets, and hygiene supplies, tailored to the specific needs of the crisis at hand, whether flooding, fire, or displacement.',
      'Beyond the immediate response, we stay engaged with affected communities through the recovery phase, helping connect families with longer-term support as they rebuild.',
      'None of this would be possible without a dedicated network of volunteers and donors who allow us to respond the moment a crisis begins.',
    ],
  },
];

export const categories = ['All', 'Impact Stories', 'Education', 'Healthcare', 'Empowerment', 'Development', 'Community', 'Relief'];
