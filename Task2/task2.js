const menu = document.getElementById("menu");
            const nav = document.querySelector("nav");
            const anime = document.querySelector(".anime");
            const categories = document.getElementById("categories");
            const search = document.getElementById("search");

            menu.addEventListener("click", () => {
    if (window.innerWidth > 900) {
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "flex";
            anime.style.marginLeft = "13em";
        } else {
            nav.style.display = "none";
            anime.style.marginLeft = "1em";
        }
    } else {
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "flex";
            anime.style.marginLeft = "0";
        } else {
            nav.style.display = "none";
            anime.style.marginLeft = "0";
        }
    }
});

            search.addEventListener("click", () => {
                const searchBox = document.getElementById("search-box");
                if (searchBox.style.display === "none" || searchBox.style.display === "") {
                    searchBox.style.display = "block";
                } else {
                    searchBox.style.display = "none";
                }
            });
            window.addEventListener("load", () => {
    const selectedCategory = localStorage.getItem("selectedCategory");
    if (selectedCategory) {
        categories.value = selectedCategory;
    }
});

categories.addEventListener("change", () => {
    const selectedCategory = categories.value;
    localStorage.setItem("selectedCategory", selectedCategory);
    let url = '';

    switch (selectedCategory) {
        case 'action':
            url = 'action.html';
            break;
        case 'adventure':
            url = 'adventure.html';
            break;
        case 'comedy':
            url = 'comedy.html';
            break;
        case 'horror':
            url = 'horror.html';
            break;
        case 'mystery':
            url = 'mystery.html';
            break;
        case 'sports':
            url = 'sports.html';
            break;
    }

    if (url) {
        window.location.href = url;
    }
});