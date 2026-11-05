import images from "../assets/images";

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
  slug: 'back-to-school-donation-drive-kitintale-2026',
  title: 'Back to School Donation Drive in Kitintale',
  excerpt: 'On 13th September 2026 we visited Mutungo Parish, Kitintale Village, with scholastic materials, menstrual health management supplies, and sessions on career guidance and menstrual management.',
  image: images.school_drive_1,
  date: 'Sep 13, 2026',
  author: 'SRK International Society',
  category: 'Education',
  content: [
    'On Sunday, 13th September 2026, SRK International Society held its Back to School Donation Drive at Mutungo Parish, Kitintale Village, Zone 12. The day brought our team together with children, young people and families from the community.',
    'Scholastic materials were at the heart of the drive. We handed out exercise books, pens and other school supplies so that children could return to the classroom with what they need to learn.',
    'We also distributed menstrual health management materials to girls and young women. Alongside the supplies, our team ran sessions on menstrual management, giving girls practical information and a safe space to ask questions. No girl should have to miss school because of her period.',
    'Career guidance sessions encouraged the young people we met to think about their futures, the paths open to them, and how staying in school can help them get there.',
    'Thank you to everyone who made the day possible: our team, our partners, and the Kitintale community for welcoming us. Follow our journey as we transform lives, one community at a time.',
  ],
};

export const posts: BlogPost[] = [];

export const categories = ['All', 'Education', 'Healthcare', 'Empowerment', 'Community'];
