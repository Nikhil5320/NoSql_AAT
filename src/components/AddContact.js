import React from "react";
import axios  from "axios";
class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          restingBP : '',
          restingECG : '',
          age : '',
          sex : '',
          chestPainType : ''
        };  
      }

     handleChange(event) {
        this.setState({value: event.target.value});
    }

    changeHandler =(e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    addHandler = e =>{
        e.preventDefault()
        if(this.state.restingBP!='' && this.state.restingECG!='' && this.state.age!=''){
            console.log("Axiosssss Post request Sucess")
            axios
                .post('http://localhost:6040/create', this.state)
                .then(res => {
                    this.setState({alert_message:"Success"})
                    window.confirm("Added Successfully!")
                })
                .catch(error => {
                    this.setState({alert_message:"Failed"})
                    window.confirm("Failed to Add.....")
                })
                
        } 
        else{
            console.log("Axiosssss Post request ERrrrrrrrrrrrrooorr")
            window.confirm("Failed to add!")
        }
    }
    render() {
        const {restingBP,restingECG,age,sex} = this.state;
        return(
            <div className="ui main" style={{marginTop:"60px", marginBottom:"80px"}}>
                <h2 style={{color:"Black"}}>Add Patient</h2>
                <form className="ui form" >
                <div className="field" style={{marginRight:"800px"}}>
                    <label>RestingBP</label>
                    <input
                    value={restingBP}
                    type="text"
                    name="restingBP"
                    placeholder="RestingBP"
                    onChange={this.changeHandler}
                    />
                </div>
                <div className="field" style={{marginRight:"700px"}}>
                    <label>RestingECG</label>
                    <input
                    value={restingECG}
                    type="text"
                    name="restingECG"
                    placeholder="RestingECG"
                    onChange={this.changeHandler}
                    />
                </div>
                <div className="field" style={{marginRight:"900px"}}>
                <label>
                    Gender:
                    <select name="sex" onChange={this.changeHandler}>
                        <option  value="F">Female</option>
                        <option value="M">Male</option>
                        <option selected value="O">Other</option>
                        
                    </select>
                </label>
                </div>
                <div className="field" style={{marginRight:"900px"}}>
                <label>
                    ChestPainType:
                    <select name="chestPainType" onChange={this.changeHandler}>
                        <option  value="ASY">ASY</option>
                        <option value="ATA">ATA</option>
                        <option value="NAP">NAP</option>
                        <option selected value="O">Other</option>
                        
                    </select>
                </label>
                </div>
                <div className="field" style={{marginRight:"980px"}}>
                    <label>Age</label>
                    <input
                    value={age}
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={this.changeHandler}
                    />
                </div>
                
                <button className="ui button green" onClick={this.addHandler} >Add</button>
                <button className="ui button yellow" onClick={this.addHandler} >  Search   </button>
                </form>
            </div>
        );
    }
}

export default AddContact;