// class is a tamplate and object is basically entity that become from class

class railwayForm{
    submit(){
        alert(this.name ,"your form is submitted for train number",this.trainNumber)
    }
    cancel(){
        alert(this.name ,"your form is cancled for train numer",this.trainNumber)
    }
    fill(givenName){
        this.name=givenName
        this.trainNumber=this.number
   }

}
//create a form for shalu
let shaluForm=new railwayForm()
//fill the form with harry's details
shaluForm.fill("shalu",1234)

//create a form for neha
let nehaForm=new railwayForm()
//fill the form with neha's details
nehaForm.fill("neha",5678)

shaluForm.submit()
nehaForm.submit()
nehaForm.cancel()