import React from 'react';
import CustomHeader from '../common/CustomHeader';
import ProjectList from './ProjectList';
import './index.scss';

const projects = [
  {
    id: 'p1',
    name: '8 Track',
    tech: 'React JS/ Typescript/ Redux/ Electron/ SCSS',
    desc:
      '8 Track is music distrubition company and a client of Pinro. Pinro was hired to design and develop a music player application for windows and mac',
    images: [
      '/eightTrack/player.png',
      '/eightTrack/login.png',
      '/eightTrack/djMode.png',
      '/eightTrack/calendar.png',
      '/eightTrack/settings/png',
    ],
  },
  {
    id: 'p2',
    name: 'Cholishnu Publisher Dashboard',
    tech: 'React JS/ Typescript/ Redux/ SCSS',
    desc:
      'Cholishnu is an online media platorm with four different modules: books, audio, video and events. Cholishnu partners with different publishers to distribute their paper books, audio books and ebooks. This is the dashboard that the publishers can access for different analytics',
    images: [
      '/cholishnuPublisherDashboard/dashboard.png',
      '/cholishnuPublisherDashboard/login.png',
      '/cholishnuPublisherDashboard/books.png',
      '/cholishnuPublisherDashboard/orders.png',
      '/cholishnuPublisherDashboard/addBook/png',
    ],
  },
  {
    id: 'p3',
    name: 'Meal Doctor',
    tech: 'React Native/ Redux/ Node JS/ Express/ MongoDB',
    desc:
      'This was my masters dissertation. A full stack cross platform mobile application to track food calories while promoting mindful eating',
    images: [
      '/mealDoctor/mealDoctor1.png',
      '/mealDoctor/mealDoctor2.png',
      '/mealDoctor/mealDoctor3.png',
    ],
  },
  {
    id: 'p4',
    name: 'React Color Picker',
    tech: 'React JS/ Material UI',
    link: 'https://mahsin-react-color-picker.netlify.app/',
    desc:
      'A personal fun project to practice React. Users can create a paletter with any colors they want and also rearrange the colors with drag and drop functionality. The colors can be copied to the clipboard and used in any project',
    images: [
      '/reactColor/createColor.png',
      '/reactColor/home.png',
      '/reactColor/colorPallete.png',
      '/reactColor/colorShade.png',
    ],
  },
  {
    id: 'p5',
    name: 'Spotiy UI Clone',
    tech: 'React JS/ Context Api/ Spotify Api',
    link: 'https://mahsin-spotify-clone.netlify.app/',
    desc:
      'A personal fun project to practice developing responsive UI with React. This is a clone of the discover Weekly screen of Spotify. Spotify Api is used to authenticate and fetch some user data',
    images: [
      '/spotifyClone/spotifyClone1.png',
      '/spotifyClone/spotifyClone2.png',
    ],
  },
  {
    id: 'p6',
    name: 'Lights Out Game',
    tech: 'React JS',
    link: 'https://mahsin-lights-out.netlify.app/',
    desc:
      'A personal fun project to practice developing with React. This is a version of the famous lights out game',
    images: ['/lightsOut/lightsOut1.png', '/lightsOut/lightsOut2.png'],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <CustomHeader title="Portfolio" />
      <div className="container fluid">
        <div className="row no-gutters portfolio__projectList">
          <ProjectList projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
