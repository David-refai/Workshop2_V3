import './style.css';

import { ProductsPage } from './view/Products';

import NavBar from './view/NavBar';

const app = document.querySelector('#app');

const HomePage = () => {
  return`<main class = "home">
  <h1>Home</h1>
  </main>
  `
};

const router = () =>{
  home: HomePage
  // here all of the components 👇
  products: ProductsPage
}

const render = (routerName = 'home') => {

  const pages = router[routerName] ? router[routerName] : HomePage();

  app.innerHTML =`<main class= "container">
  ${NavBar}
  <main class = "container">
  ${pages}
  </main>
  `
}

function getRouterFromHash(){
  return (location.hash || '#home').replace('#', '');
}

window.addEventListener('hashchange', () => render(getRouterFromHash()));
render(getRouterFromHash());
