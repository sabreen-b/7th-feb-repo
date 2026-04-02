class Insurance{
    constructor(iname,premium,term){
        this.iname=iname
        this.premium=premium
        this.termerm=term
    }
 
    displayInsurerName(){
        console.log("Insurer Name :"+this.iname);
       
    }
 
   displayPremium(){
        console.log("premium :"+this.premium);
       
    }
 
    displayPolicyTerm(){
        console.log("Policy Term :"+this.term);
       
    }
 

}
 
module.exports = {Insurance}