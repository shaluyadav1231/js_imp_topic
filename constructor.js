class railwayForm{
    constructor(givenName,trainNumber){
        console.log("constructor called...." + givenName + " " + trainNumber);
        this.name=givenName
        this.trainNumber=this.trainNumber

    }
    submit(){
        alert(this.name ,"your form is submitted for train number",this.trainNumber)
    }
    cancel(){
        alert(this.name ,"your form is cancled for train numer",this.trainNumber)
    }

}
//create and fill form 
let shaluForm=new railwayForm("shalu",1234)



//create and fill the form for 
let nehaForm=new railwayForm("neha",5678)
//fill the form with neha's details


shaluForm.submit()
nehaForm.submit()
nehaForm.cancel()