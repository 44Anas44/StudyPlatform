class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .toggle-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .toggle-switch {
          position: relative;
          width: 44px;
          height: 24px;
        }
        
        .toggle-checkbox {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--surface-300);
          transition: .4s;
          border-radius: 24px;
        }
        
        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        
        .toggle-checkbox:checked + .toggle-slider {
          background-color: var(--primary-500);
        }
        
        .toggle-checkbox:checked + .toggle-slider:before {
          transform: translateX(20px);
        }
        
        .toggle-icon {
          width: 18px;
          height: 18px;
          color: var(--text-primary);
        }
      </style>
      
      <div class="toggle-container">
        <i data-feather="sun" class="toggle-icon"></i>
        <label class="toggle-switch">
          <input type="checkbox" class="toggle-checkbox">
          <span class="toggle-slider"></span>
        </label>
        <i data-feather="moon" class="toggle-icon"></i>
      </div>
    `;

    // Initialize toggle
    const checkbox = this.shadowRoot.querySelector('.toggle-checkbox');
    checkbox.checked = window.matchMedia('(prefers-color-scheme: dark)').matches;

    checkbox.addEventListener('change', () => {
      document.documentElement.classList.toggle('dark', checkbox.checked);
      localStorage.setItem('darkMode', checkbox.checked);
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
      checkbox.checked = true;
      document.documentElement.classList.add('dark');
    }
  }
}

customElements.define('theme-toggle', ThemeToggle);
