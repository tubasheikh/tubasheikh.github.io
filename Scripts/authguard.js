"user strict";
(function()
{
    let protected_routes=[
        "contact-list"
    ];

    // if contact-list is found in protected_routes it would return 0
    // if the link is not found it would return -1
    if(protected_routes.indexOf(router.ActiveLink) > -1){

        // if the user does not exist in session storage
        if(!sessionStorage.getItem("user"))
        {
            // redirect to login page
            location.href = "#/login";
        }
    }
    
})();