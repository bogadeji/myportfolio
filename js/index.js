// javascript for portfolio section
import { projects } from "../data/db.js";

const portfolioContainer = document.querySelector('div.portfolio')

const renderPortfolioSection = () => {
    
    let template = '';
    projects.forEach(item => {

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