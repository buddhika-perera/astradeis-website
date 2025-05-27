// src/scripts/blog-filter.js
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const blogCards = document.querySelectorAll('.blog-card');
    
    // Function to filter blog posts
    function filterPosts() {
      const selectedCategory = categoryFilter.value;
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      blogCards.forEach(card => {
        const categories = Array.from(card.querySelectorAll('.category')).map(cat => cat.textContent);
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.excerpt').textContent.toLowerCase();
        
        // Check if post matches category filter
        const matchesCategory = selectedCategory === 'all' || categories.includes(selectedCategory);
        
        // Check if post matches search term
        const matchesSearch = searchTerm === '' || 
                             title.includes(searchTerm) || 
                             excerpt.includes(searchTerm);
        
        // Show/hide based on filters
        if (matchesCategory && matchesSearch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Add event listeners
    categoryFilter.addEventListener('change', filterPosts);
    searchInput.addEventListener('input', filterPosts);
  });
  