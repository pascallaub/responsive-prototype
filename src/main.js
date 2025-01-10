import articles from "./articles.js";

const container = document.querySelector("#container");

articles.forEach((article) => {
  container.innerHTML = `
          <div class="border lg:row-span-2 shadow-md">
            <a href="${article.link}">
              <img class="object-cover w-full h-80" src="${article.image.src}" alt="${article.image.alt}" />
              <div class="p-4">
                <span class="text-sm font-semibold text-[#6941C6]">${article.author} - ${article.date}</span>
                <h1 class="text-xl font-bold mt-4">${article.title}</h1>
                <p class="mt-4">${article.teaser}</p>
                <ul class="flex gap-2 mt-4">
                <!-- DRY Principle -->
                  <li><span class="px-2 py-1 rounded text-sm mr-2 bg-[${article.tags[0].bgColor}] text-[${article.tags[0].textColor}]">${article.tags[0].name}</span></li>
                  <li><span class="px-2 py-1 rounded text-sm mr-2 bg-[${article.tags[1].bgColor}] text-[${article.tags[1].textColor}]">${article.tags[1].name}</span></li>
                  <li><span class="px-2 py-1 rounded text-sm mr-2 bg-[${article.tags[2].bgColor}] text-[${article.tags[2].textColor}]">${article.tags[2].name}</span></li>
                </ul>
              </div>
            </a>
          </div>`;
});