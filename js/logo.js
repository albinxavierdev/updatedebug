
const companyLogos = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
"https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.png",
"https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",

"https://media.licdn.com/dms/image/D5612AQEwbWIy3jsIXg/article-cover_image-shrink_600_2000/0/1662527651491?e=2147483647&v=beta&t=C8vc7qHTl8rPAkUa52lYd19-4JwipdSbSDdCyxUtEAQ",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
"https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.png",
"https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",

"https://media.licdn.com/dms/image/D5612AQEwbWIy3jsIXg/article-cover_image-shrink_600_2000/0/1662527651491?e=2147483647&v=beta&t=C8vc7qHTl8rPAkUa52lYd19-4JwipdSbSDdCyxUtEAQ",
"https://media.licdn.com/dms/image/D5612AQEwbWIy3jsIXg/article-cover_image-shrink_600_2000/0/1662527651491?e=2147483647&v=beta&t=C8vc7qHTl8rPAkUa52lYd19-4JwipdSbSDdCyxUtEAQ",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
"https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.png",
"https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",

"https://media.licdn.com/dms/image/D5612AQEwbWIy3jsIXg/article-cover_image-shrink_600_2000/0/1662527651491?e=2147483647&v=beta&t=C8vc7qHTl8rPAkUa52lYd19-4JwipdSbSDdCyxUtEAQ",

];

function renderLogos() {
const container = document.getElementById("companies-table");

companyLogos.forEach((logo) => {
const img = document.createElement("img");
img.src = logo;
img.alt = "Company Logo";
img.classList.add("company-logo");
container.appendChild(img);
});
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", renderLogos);