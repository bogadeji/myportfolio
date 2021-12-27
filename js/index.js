// javascript for portfolio section
const portfolioContainer = document.querySelector('div.portfolio')

const renderPortfolioSection = async () => {
    let uri = 'http://localhost:3000/projects';
  
    const res = await fetch(uri);
    const portfolioItems = await res.json();
    // console.log(portfolioItems)

    let template = '';
    portfolioItems.forEach(item => {

        console.log(item.image_url)
        template+=`
            <!-- Portfolio item ${item.id} -->
            <a href="portfolio.html?id=${item.id}" class="portfolio__item">
                <img src="${item.image_url}" alt="" class="portfolio__img">
            </a>

        `
    })

    portfolioContainer.innerHTML = template
  }
  
  window.addEventListener('DOMContentLoaded', () => renderPortfolioSection());