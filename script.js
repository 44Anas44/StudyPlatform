
// Shared JavaScript functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(el => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip invisible absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm whitespace-nowrap';
        tooltip.textContent = el.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const updatePosition = () => {
            const rect = el.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        };
        
        el.addEventListener('mouseenter', () => {
            tooltip.classList.remove('invisible');
            updatePosition();
        });
        
        el.addEventListener('mouseleave', () => {
            tooltip.classList.add('invisible');
        });
        
        el.addEventListener('mousemove', updatePosition);
    });
    
    // Initialize floating labels
    document.querySelectorAll('.float-label-group').forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');
        
        const updateLabel = () => {
            if (input.value || document.activeElement === input) {
                label.classList.add('floating');
            } else {
                label.classList.remove('floating');
            }
        };
        
        input.addEventListener('focus', updateLabel);
        input.addEventListener('blur', updateLabel);
        input.addEventListener('input', updateLabel);
        updateLabel();
    });
});
// Function to display toast notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}