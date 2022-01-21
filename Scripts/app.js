// IIFE -- immediately invoked function expression
// AKA anonymus self-executing functions

(function()
{
    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);

        AboutUsButton.addEventListener("click", function()
        {
            // Change location to URL 
            location.href = "about.html";
        })

        // Step 1 get a reference to an entry point (insterion/deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step 2 create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> 
        This is the Article Paragarph</p>`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph")
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the main Paragraph";
        Article.setAttribute("class", "container");
        
        // eg of template string
        let FirstParagraphString = "This is";
        let SecondParagraphString = `${FirstParagraphString} the main Paragraph :)`; 

        MainParagraph.textContent = SecondParagraphString;

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
        // innerhtml creates nodes
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
        // anything b/w the body tags
        //DocumentBody.innerHTML = ``;
        
        // Deletion example
        //MainParagraph.remove();
        // to remove 1st h1 element
        //document.getElementsByTagName("h1")[0].remove();
        // to remove 1st list element
        //document.getElementsByTagName("li")[0].remove();
        //document.getElementById("ArticleParagraph").remove();

        // Insert Before example 

        
        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
        
        // MainContent.before(NewH1);

        // NewH1.textContent = "Hello, World!";
    }

    function DisplayProductsPage()
    {

    }

    function DisplayServicesPage()
    {

    }

    function DisplayAboutPage()
    {

    }

    function DisplayContactPage()
    {

    }

    // named function 
    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;

            case "Our Products":
                DisplayProductsPage();
                break;

            case "Our Services":
                DisplayServicesPage();
                break;
            
            case "About Us":
                DisplayAboutPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;

            
        }
        
    }

    window.addEventListener("load", Start);

    
})();