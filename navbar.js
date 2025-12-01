class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo & Title -->
            <div class="flex items-center">
              <a href="index.html" class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                  <i data-feather="calculator" class="w-6 h-6 text-white"></i>
                </div>
                <span class="text-2xl font-bold text-gray-800 hidden sm:block">
                  MathMastermind
                </span>
              </a>
            </div>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="text-gray-700 hover:text-primary-600 font-medium transition">Accueil</a>
              <a href="index.html#coursesContainer" class="text-gray-700 hover:text-primary-600 font-medium transition">Cours</a>
              <a href="dashboard.html" class="text-gray-700 hover:text-primary-600 font-medium transition flex items-center gap-1">
                <i data-feather="shield" class="w-4 h-4"></i>
                Admin
              </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button id="mobileMenuBtn" class="text-gray-700 hover:text-primary-600 focus:outline-none">
                <i data-feather="menu" class="w-7 h-7"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="md:hidden hidden bg-white border-t border-gray-200">
          <div class="px-4 pt-2 pb-3 space-y-1">
            <a href="index.html" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">Accueil</a>
            <a href="index.html#coursesContainer" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">Cours</a>
            <a href="dashboard.html" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium flex items-center gap-2">
              <i data-feather="shield" class="w-4 h-4"></i>
              Admin
            </a>
          </div>
        </div>
      </nav>
    `;

    // Re-apply Feather icons after insertion
    if (window.feather) feather.replace();

    // Mobile menu toggle
    const btn = this.querySelector('#mobileMenuBtn');
    const menu = this.querySelector('#mobileMenu');
    btn?.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const icon = btn.querySelector('i');
      icon.setAttribute('data-feather', menu.classList.contains('hidden') ? 'menu' : 'x');
      feather.replace();
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);