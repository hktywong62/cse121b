/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach((temple) => {

        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = "templeName";
        articleElement.appendChild(h3Element);

        const templeImage = document.createElement("img");
        templeImage.src = "imageUrl";
        templeImage.alt = "location";
        articleElement.appendChild(templeImage);

        templesElement.appendChild(articleElement);

    })
    

/* async getTemples Function using fetch()*/

    let results = null;

    const getTemples = async () => {

        const response = await fetch("https//byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        
        if (response.ok){
            const data = await response.json();
            doStuff(data);
        }
        displayTemples(templeList);
    }

    function doStuff(data) {
        results = data;
        templeList.push(results);
    }


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
            
            displayTemples(temples.filter((temple) => temple.location .includes("Utah")));
            break;

            case "nonutah":

            displayTemples(temples.filter((temple) => !temple.location .includes("Utah")));
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

