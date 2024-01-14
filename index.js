function createCard(jsonData){
  const documentList = document.getElementById("project-list")
  jsonData.forEach((data) => {

    const badge = 
      data["badge"].map((b)=>{
        return `<img src=${b}>`
      })

    const thumbnail = 
      data["thumbnail"].map((t)=>{
        return `<img class="mx-auto" src="${t}" alt="">`
      })

    const section = `
      <section class="card cursor-pointer rounded my-2 p-5 shadow-sm shadow-black/30 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
        <a href=${data["source"]}>
          <header class="flex items-center justify-between">
            <h3 class="text-lg font-bold">${data["title"]}</h3>
          </header>
          <div class="mt-2 dark:text-gray-300">${data["summary"]}</div>
          <footer class="my-4 flex flex-wrap gap-1">
            ${
              badge.join("")
            }
            </footer>
          ${
            thumbnail.join("")
          }
        </a>
      </section>
    `
    documentList.innerHTML+=section
  });
}

function jsonRead(){
  fetch('./projects.json')
  .then((response) => response.json())
  .then((jsonData) => {
    createCard(jsonData)
  });
}

jsonRead()


