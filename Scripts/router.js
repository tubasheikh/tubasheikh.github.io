
(function(core){

    class Router 
    {
        // public properties (getters and setters)

        /**
         * @returns {string}
         *
         */
        get ActiveLink()
        {
            return this.m_activeLink;
        }

        /**
         * @param {string} link
         */
        set ActiveLink(link)
        {
            this.m_activeLink = link;
        }

        /**
         * Creates an instance of Router.
         * @constructor
         */
        constructor()
        {
            this.ActiveLink = "";
        }

        // public methods
        /**
         * This method adds a new route to the routing table
         * @param {string} route 
         * @returns {void} 
         */
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        /**
         * This method replaces teh refernce for the routing table wiith a new one 
         * Note: Routes should begin with a '/' character 
         * 
         * @param {string[]} routingTable 
         * @returns {void}
         */
        AddRoutingTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        // public override methods 
        /**
         * This method finds and returns the index of the route in the Routing table 
         * otherwise, it returns -1 if teh route is not found 
         * @param {string} route 
         * @returns {number}
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         *This method removes teh route from the routing tabel 
        it returns true if teh route was sucessfully removed otherwise false

        *
        * @param {string} route
        * @returns {boolean}
        * @memberof Router
        */
        Remove(route)
        {
            // if route is found
            if(this.Find(route) > -1)
            {
                // remove it 
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }

            // if not found return false
            this  
            return false;

        }

        /**
         * This method returns teh Routing Table in a comma separated strign
         * Overrides teh built in to string method
         * @override
         * @returns {string}
        */
        toString()
        {
            return this.m_routingTable.toString();

        }

    }

    core.Router = Router;
})(core || (core = {}));

let router =  new core.Router();
router.AddRoutingTable([
    "/#/", // Default Route
    "/#/home",
    "/#/about",
    "/#/services",
    "/#/contact",
    "/#/contact-list",
    "/#/products",
    "/#/register",
    "/#/login",
    "/#/edit"
]);

let route = location.pathname; // alias for location.pathname

// teh statments below are a longer version of this line of code
// it means 
// find the route 
// if its found check:
// if the route is "/" 
// if so return home 
// else return 404 
router.ActiveLink = (router.Find(route) > -1) ? (route == "/#/") ? "home" : route.substring(3) : "404"

// // if route is found in the routing table 
// if(router.Find(route) > -1)
// {
//     router.ActiveLink = (route == "/") ? "home" : route.substring(1);
// }
// else
// {
//     router.ActiveLink = "404";
// }

