export const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      console.log(articles[0]);
      const resultsContent = articles.map((article) => (
        `<article class="cardGame bg-dark rounded-lg">
          <img class="p-3 rounded-2xl opacity-90" src="${article.background_image}" height="200" width="500">
          <div class="flex text-white">
            <h2>${article.released}</h2>
            <a href="#pagedetail/${article.id}">${article.id}</a>
          </div>
            <h1 class="text-orange text-lg m-3 font-bold">${article.name}</h1>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=7bb486d8752445c8a2074b224fe6aa13`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list m-10 pl-40 pr-40">
        <div class="articles grid grid-cols-4 gap-4">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};
