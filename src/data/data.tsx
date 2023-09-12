import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import {
  ClipboardDocumentListIcon,
  PencilSquareIcon
} from '@heroicons/react/24/solid';


import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import BlogIcon from '../components/Icon/BlogIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import meetupImage1 from '../images/meetup/meetup-1.jpg';
import meetupImage2 from '../images/meetup/meetup-2.jpg';
import meetupImage3 from '../images/meetup/meetup-3.jpg';
import meetupImage4 from '../images/meetup/meetup-4.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Exploring Life with Leo',
  description: "Hey, I'm Leo, a tech enthusiast and Devops Enginner. Dive into my projects, and connect with me on my Blog and LinkedIn for the latest in the world of technology",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  MeetUp:'meetup',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Marvel Leo`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `All problems in computer science can be solved by another level of indirection`,
  aboutItems: [
    {label: 'Location', text: 'Sydney, Nsw', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Bicycle, Basketball, Meetup', Icon: SparklesIcon},
    {label: 'Phone', text: '0413 518 677', Icon: PhoneArrowDownLeftIcon},
    {label: 'EnvelopeIcon', text: 'leo.ying.liu@gmail.com', Icon: EnvelopeIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'Jekins',
        level: 9,
      },
      {
        name: 'Githubaction',
        level: 8,
      },
      
    ],
  },

  {
    name: 'IAC',
    skills: [
      {
        name: 'Terraform',
        level: 9,
      },
      {
        name: 'Ansible',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Cloud Platform',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'AZURE',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Docker',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },

    ],
  },
  {
    name: 'Programming language',
    skills: [
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'python',
        level: 8,
      },
      {
        name: 'Bash',
        level: 8,
      },
      {
        name: 'Powershell',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },

];


/**
 *  Meetup section
 */
export const meetupItems: PortfolioItem[] = [
  {
    title: 'kubernetes',
    description: '',
    url: '',
    image: meetupImage1,
  },
  {
    title: 'azure specialist',
    description: '',
    url: '',
    image: meetupImage2,
  },
  {
    title: 'hashicorp specialist',
    description: '',
    url: '',
    image: meetupImage3,
  },
  {
    title: 'aws workshop',
    description: '',
    url: '',
    image: meetupImage4,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me By Linkedin.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'fisherinaus@gmail.com',
      href: 'mailto:fisherinaus@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leo-liuy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'My Blog', Icon: PencilSquareIcon, href: 'https://myblog'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/leo-liuy'},
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
