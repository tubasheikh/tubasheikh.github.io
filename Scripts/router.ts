
namespace core
{
    export class Router
    {
        // private instance members
        private m_activeLink: string;
        private m_linkData: string;
        private m_routingTable: string[];

        // public properties

        get LinkData(): string
        {
            return this.m_linkData;
        }

        /**
         *
         * @param {string} link
         */
        set LinkData(data: string)
        {
            this.m_linkData = data;
        }

        /**
         *
         * @returns {string}
         */
        get ActiveLink(): string
        {
            return this.m_activeLink;
        }

        /**
         *
         * @param {string} link
         */
        set ActiveLink(link: string)
        {
            this.m_activeLink = link;
        }

        // constructor

        /**
         * Creates an instance of Router.
         * @constructor
         */
        constructor()
        {
            this.m_activeLink = "";
            this.m_linkData = "";
            this.m_routingTable = []; // creates an empty string array
        }

        // public methods

        /**
         * This method Adds a new Route to the Routing Table
         *
         * @param {string} route
         * @returns {void}
         */
        Add(route: string): void
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table object (if it exists) with a reference to a new 
         * string array of routes
         * Routes should begin with the '/' character
         *
         * @param {string[]} routingTable
         * @returns {void}
         */
        AddTable(routingTable: string[]): void
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * otherwise, it returns -1 if the route is not found
         *
         * @param {string} route
         * @returns {number}
         */
        Find(route:string): number
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a route from the Routing Table
         * It returns true if the route was successfully removed,
         * otherwise, it returns false
         *
         * @param {string} route
         * @returns {boolean}
         */
        Remove(route: string): boolean
        {
            // if the route is found
            if(this.Find(route) > -1)
            {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        // public override functions
        /**
         * This method returns the routing table as a comma-separated string
         * 
         * @override
         * @returns {string}
         */
        toString(): string
        {
            return this.m_routingTable.toString();
        }
    }
}

let router: core.Router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/login",
    "/register",
    "/edit"
]);

let route: string = location.pathname; // alias for location.pathname

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else
{
    router.ActiveLink = "404";
}




// teh statments below are a longer version of this line of code
// it means 
// find the route 
// if its found check:
// if the route is "/" 
// if so return home 
// else return 404 
//router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : "404"

// // if route is found in the routing table 
// if(router.Find(route) > -1)
// {
//     router.ActiveLink = (route == "/") ? "home" : route.substring(1);
// }
// else
// {
//     router.ActiveLink = "404";
// }

