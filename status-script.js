document.addEventListener("DOMContentLoaded", () => {
    const status = 'under-review'; // Replace with dynamic status from backend or other sources

    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const statusData = bar.dataset.status;
        if (statusData === status) {
            bar.style.setProperty('--progress-width', '100%');
        }
    });
});
