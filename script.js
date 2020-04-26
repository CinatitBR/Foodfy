const recipes = document.querySelectorAll('.recipes .recipe')

const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.querySelector('.modal-content')
const closeModal = document.querySelector('.close-modal')

const modalImg = document.querySelector('#modal-img')
const modalTitle = document.querySelector('#modal-title')
const modalAuthor = document.querySelector('#modal-author')

for (let recipe of recipes) {
  recipe.addEventListener('click', () => {
    const recipeTitle = recipe.querySelector('h3')
    const recipeAuthor = recipe.querySelector('p')

    modalOverlay.classList.add('active')
    modalImg.src = `/assets/${recipe.id}.png`
    modalTitle.textContent = recipeTitle.textContent
    modalAuthor.textContent = recipeAuthor.textContent
  })
}

// Closes modal
document.addEventListener('click', (e) => {
  if (e.target === closeModal || e.target === modalOverlay) {
    modalOverlay.classList.remove('active')
  }
})
