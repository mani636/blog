import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

export const navLinks = [
  {
    id: 1,
    link: 'Home',
    url: '/',
  },
  {
    id: 2,
    link: 'Create Post',
    url: '/create',
  },
  {
    id: 3,
    link: 'Profile',
    url: '/profile',
  },
  {
    id: 4,
    link: 'Logout',
    url: '/logout',
  },
];

export const socialLinks = [
  {
    id: 1,
    link: <BsGithub />,
    url: 'https://github.com/mani636',
  },
  {
    id: 2,
    link: <BsLinkedin />,
    url: 'http://www.linkedin.com/in/manikandan-raj-3404bb258',
  },
  {
    id: 3,
    link: <BsTwitter />,
    url: 'https://twitter.com/Manikandan11631',
  },
];
