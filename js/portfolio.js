// javascript for portfolio.html

const id = new URLSearchParams(window.location.search).get('id');
const container = document.getElementById('portfolio')

const renderPortfolioItem = async () => {
  let uri = 'https://bogadeji-portfolio-db.herokuapp.com/projects/' + id;
  
    const res = await fetch(uri);
  const portfolioItem = await res.json();

  const template = `
      
        <h2 class="section__title section__title--projects">${portfolioItem.title}</h2>
        <p class="section__subtitle section__subtitle--projects">${portfolioItem.snippet}</p>

        <div class="my-projects__body">
            <p>${portfolioItem.description}</p>
            <div class="buttons">
              <a href="${portfolioItem.github_url}" class="live-link code">View Code</a>
              <a href="${portfolioItem.github_url}" class="live-link demo"">Demo</a>
            </div>
        </div>

        <img src="${portfolioItem.image_url}" alt="${portfolioItem.snippet}" class="intro__img">
  `

  container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderPortfolioItem());