'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'React Portfolio by Andrew Jones',
  subtitle: 'Startup Cofounder & CTO. Javascript + React. Former neuroscience researcher at Emory University.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Andrew Jones',
    photo: '/photo.png',
    bio: 'Startup Cofounder & CTO. Javascript + React. Former neuroscience researcher at Emory University.',
    
    // TODO: remove twitter, rss, telegram, vkontakte from pages, tests, and fixtures
    contacts: {
      email: 'andrewjones232@gmail.com',
      telegram: '#',
      twitter: '#',
      github: 'cornu-ammonis',
      rss: '#',
      vkontakte: '#'
    }
  }
};
