import React, {useState} from "react";
import axios  from "axios";
import user from "../images/user.png";
import "./Modal.css";


const ContactCard = (props) => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({});

    var {
        id,
        age,
        sex,
        chestPainType,
        restingBP,
        cholesterol,
        fastingBS,
        restingECG,
        maxHR,
        exerciseAngina,
        oldPeak,
        sT_Slope,
        heartDisease,} = props.contacts;

    function handleDelete(){
        // var ObjectId = require('mongodb').ObjectID;
        if(window.confirm("Are u sure to delete ?")){
        axios.delete(`http://localhost:6040/delete/${id}`)
            .then(res => {
                console.log("Deleted",id,age)
                window.confirm("Deleted",id)
            })
            .catch(error => {
                var x = 3012202108173000000;
                console.log("Failed deleting",id,age)
                window.confirm("Failed deleting",id)
            })
        }
    }

    function editHandler(e){
        e.preventDefault();
        var x = {
            id,
            age,
            sex,
            chestPainType,
            restingBP,
            cholesterol,
            fastingBS,
            restingECG,
            maxHR,
            exerciseAngina,
            oldPeak,
            sT_Slope,
            heartDisease}
        axios.put(`http://localhost:6040/update/${id}`,x)
            .then(res => {
                console.log(res)
                window.confirm("Updated",id)
            })
            .catch(error => {
                console.log("Failed Updating",id,age)
                window.confirm("Failed Updating",id)
            })

    }

    const toggleEvent = ()=>{
        setModal(!modal)
    }
    const changeHandler = (name, value) => {
        console.log([name])
        setFormData({...formData, ...{[name] : "value"}})
    }
    return (
        <>
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" style={{marginTop:"4px", fontSize:"20px"}}/>
            <div className="content" style={{margin:"12px"}}>
                <div className="header" style={{color:"blue", marginBottom:"8px", fontSize:18}}>HeartDisease : {heartDisease}</div>
                <div>Age : {age}</div>
                <div>Gender : {sex}</div>
                <div>RestingBP : {restingBP}</div>
                <div>RestingECG : {restingECG}</div>
            </div>
            <button
            onClick={handleDelete}
            className="ui button"
            style={{color:"red", margin:"10px", float:"right", fontSize:14}}>Delete
            </button>
            <button
            onClick={toggleEvent}
            className="ui button"
            style={{color:"green", margin:"10px", float:"right", fontSize:14}}
            >Edit</button>
        </div>
        {modal && (
            <div>
                <form className="ui form" >
                    <div className="field" style={{marginRight:"800px"}}>
                        <label>RestingBP</label>
                        <input
                        value={restingBP}
                        type="text"
                        name="restingBP"
                        placeholder="RestingBP"
                        onChange={(e)=>{changeHandler(e.name,e.target.value)}}
                        />
                    </div>
                    <div className="field" style={{marginRight:"700px"}}>
                        <label>RestingECG</label>
                        <input
                        value={restingECG}
                        type="text"
                        name="restingECG"
                        placeholder="RestingECG"
                        //onChange={this.changeHandler}
                        />
                    </div>
                    <div className="field" style={{marginRight:"900px"}}>
                    <label>
                        Gender:
                        <select name="sex" >
                            <option  value="F">Female</option>
                            <option value="M">Male</option>
                            <option selected value="O">Other</option>
                            
                        </select>
                    </label>
                    </div>
                    <div className="field" style={{marginRight:"900px"}}>
                    <label>
                        ChestPainType:
                        <select name="chestPainType" >
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
                        //onChange={this.changeHandler}
                        />
                    </div>
                    <button className="ui button orange" onClick={editHandler} >Update</button>
                    <button className="ui button red" onClick={toggleEvent} >Close</button>
                </form>
            </div>
          )}
          </>
    );
};



export default ContactCard;
