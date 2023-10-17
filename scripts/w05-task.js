/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    templeList.forEach((temples) => {

        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = "templeName";
        articleElement.appendChild(h3Element);

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", "imageUrl");
        imageElement.setAttribute("alt", "location");
        articleElement.appendChild(imageElementmage);

        templesElement.appendChild(articleElement);

        document.body.appendChild(templesElement);

    })
    

/* async getTemples Function using fetch()*/

const url =  "https//byui-cse.github.io/cse121b-ww-course/resources/temples.json";

let results = null;

    const getTemples = async () => {

        const response = await fetch(url);
        
        if (response.ok){
            const data = await response.json();
            doStuff(data);
        }
    }
    function doStuff(data){
        results = data;
        templeList = data.results;
        templesElement.innerHTML = templeList
    }
    getTemples(templeList);
    
/* reset Function */

function reset(){

        templesElement.removeChild(article);
  
  };


/* sortBy Function */

    function sortBy(temples) {

        reset();

        const filter = document.getElementById("sortyBy").value;

        switch (filter) {

            case "utah":
            
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;

            case "nonutah":

            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
            
            case "older":

            displayTemples(temples.filter((temple) => temple.dedicated < '1950'));
            break;

            case "all":
                 
            displayTemples(temples);

    }
};

/* Event Listener */

    const sortByElement = document.getElementById("sortBy");

    sortByElement.addEventListener("change", () => {
        sortBy(templeList);

    }
    );
}

