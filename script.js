document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".progress");

    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            steps.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add("active");
                } else {
                    s.classList.remove("active");
                }
            });
        });
    });
});
