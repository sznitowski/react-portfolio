import video1 from '../../assets/proyects/video1.mp4';
import video2 from '../../assets/proyects/video2.mp4';

export const url1 = 'https://github.com/sznitowski/Agenda-React';
export const url2 = 'https://github.com/sznitowski';

export const description1 = "Es un Challenge para poder participar en Alkemy, es aplicacion donde podes guardar y tener un balance de gastos, para su desarrollo utilice React, Axios, Nodejs, Express, Sequelize, PostgreSql, tambien esta deployada en Amazon AWS";
export const description2 = "App trabajada para Alkemy la cual se desarrollo durante 1 mes y medio, la trabajamos entre 5 personas, utilizando metodologias Agilies Jira, Bitbucket para alojar el Codigo, git, retroteam, es un proyecto fullstack con React-Redux, Reactstrap, Reacslick, Sass, Axios, Nodejs, Express, Sequelize, mocha-chai, mysql...";

export default [
  {
    id: 1,
    'title': 'Ong-App',
    'subtitle': 'React, Nodejs, express, Postgresql',
    video: video1,
    url: url1,
    description: description1
  },
  {
    id: 1,
    'title': 'Alkemy-Challenge',
    'subtitle': 'React, redux, NodeJs, Sequelize, Mysql',
    video: video2,
    url: url2,
    description: description2
  }

]


