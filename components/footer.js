class CustomFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="bg-gray-900 text-white py-12 mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

            <!-- Brand -->
            <div class="col-span-1 md:col-span-2">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i data-feather="calculator" class="w-7 h-7 text-white"></i>
                </div>
                <span class="text-2xl font-bold">MathMastermind</span>
              </div>
              <p class="text-gray-400 max-w-md">
                Plateforme gratuite de quizzes interactifs pour les élèves de 3ème année (Tunisie).<br>
                Maîtrisez les mathématiques avec plaisir !
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold mb-4 text-primary-300">Liens rapides</h3>
              <ul class="space-y-2 text-gray-400">
                <li><a href="index.html" class="hover:text-white transition">Accueil</a></li>
                <li><a href="index.html#coursesContainer" class="hover:text-white transition">Tous les cours</a></li>
                <li><a href="dashboard.html" class="hover:text-white transition flex items-center gap-1">
                  <i data-feather="lock" class="w-4 h-4"></i> Espace Admin
                </a></li>
              </ul>
            </div>

            <!-- Contact / Info -->
            <div>
              <h3 class="text-lg font-semibold mb-4 text-primary-300">À propos</h3>
              <p class="text-gray-400 text-sm">
                Créé avec passion pour aider les élèves tunisiens à réussir en mathématiques.<br><br>
                Version 2.0 • ${currentYear}
              </p>
              <div class="flex space-x-4 mt-6">
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <i data-feather="github" class="w-5 h-5"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <i data-feather="globe" class="w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
            © ${currentYear} MathMastermind • Tous droits réservés • 
            <a href="#" class="hover:text-white underline">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    `;

    if (window.feather) feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);
