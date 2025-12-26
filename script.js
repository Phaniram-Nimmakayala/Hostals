// script.js
document.getElementById('city-select').addEventListener('change', function() {
    const selectedCity = this.value;
    const sections = document.querySelectorAll('.hostel-section');

    sections.forEach(section => {
        if (selectedCity === 'all') {
            section.classList.remove('hidden');
        } else {
            if (section.id === `${selectedCity}-section`) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        }
    });
});