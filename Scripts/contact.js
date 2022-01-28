class Contact
{
    // public properties (getters / setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    // constructor
    // optional and default parameters 
    constructor(fullName= "", contactNumber ="", emailAddress="")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // public methods
    serialize()
    {
        // === ensures the data tyoe is also the same 
        if(this.FullName !== "" & this.ContactNumber !== "" & this.EmailAddress!== "")
        {
            return `${this.FullName}, ${this.ContactNumber}, ${this.FullName}`;
        }

        else
        {
            console.error("one or more properties of the COntact object are missing or empty");
            return null;
        }
    }

    deserialize(data) // assume that the data object is comma separted list of properties
    {
        // string will be slipt into sub strings which get sepaarted after every comma
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    // overridden methods
    toString()
    {
        return `Full Name     : ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
    }
}