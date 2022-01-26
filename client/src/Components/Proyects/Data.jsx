import image1 from '../../assets/proyects/image1.png';
import image2 from '../../assets/proyects/image2.png';
import image3 from '../../assets/proyects/image3.png'; 

export const url1 = 'https://github.com/sznitowski/moneyNote';
export const url2 = 'https://github.com/sznitowski/evTecnica-FullStack';
export const url3 = 'https://github.com/sznitowski/Node-Typescript-Api';

export const description1 = "Es un Challenge para poder participar en Alkemy, es aplicacion donde podes guardar y tener un balance de gastos, para su desarrollo utilice React, Axios, Nodejs, Express, Sequelize, PostgreSql, tambien esta deployada en Amazon AWS";
export const description2 = "App trabajada para Alkemy la cual se desarrollo durante 1 mes y medio, la trabajamos entre 5 personas, utilizando metodologias Agilies Jira, Bitbucket para alojar el Codigo, git, retroteam, es un proyecto fullstack con React-Redux, Reactstrap, Reacslick, Sass, Axios, Nodejs, Express, Sequelize, mocha-chai, mysql...";
export const description3 = "Api trabajada con clean code y implementando typescript para mejorar mi codigo en el backend";

export default [
  {
    id: 1,
    'title': 'Full-Stack Api (Challenge Fullstack)',
    'subtitle': 'React, Nodejs, express, Sequelize, Postgreql',
    url: url1,
    description: description1,
    image: image1
  },
  {
    'title': 'Full-Stack Api (Challenge Fullstack)',
    'subtitle': 'React, redux, NodeJs, Sequelize, Mysql',
    id: 2,
    url: url2,
    description: description2,
    image: image2
  },
  {
    'title': 'Back-end App',
    'subtitle': 'NodeJs, Typescript, Express, Mongose, MongoDB',
    id: 3,
    url: url3,
    description: description3,
    image: image3
  }

]


