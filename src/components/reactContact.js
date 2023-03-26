import React, { useState } from 'react'

const ReactContact = () => {

    const [user , setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        message:""
    })
    let name,value;
    const getUserData = (event)=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user, [name]: value});
    };

    

        const postData = async  (e) =>{
            e.preventDefault();

            const { name, email,phone,address,message} = user;

            
            

           const res = await fetch("https://contact-app-326b3-default-rtdb.firebaseio.com/contact-form.json",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                address,
                message
            })
           });

           if(res){

            setUser({
                name:"",
                email:"",
                phone:"",
                address:"",
                message:"",
            });
            
            alert("Data Stored successfully");
        };
    


    

  return (
    <>
   <div className ="contsiner-contact100">
    <div className ="wrap-contact100">
        <form className ="contact100-form" method="POST">
            <span className ="contact100-form-Title">Contact Us</span>

            <div className ="wrap-input100 rs1-wrap-input100">
                <span className="label-input100">Your Name</span>
                <input 
                className="input100"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                required
                />

                <div className="wrap-input100 rs1-wrap-input100">
                    <span className ="label-input100">Email</span>
                    <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    value={user.email}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                    />
                    <div>

                    <span className ="label-input100">Mobile Number</span>
                    <input
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    value={user.phone}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                    />

                    <span className ="focus-input100 rs1-wrap-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Address</span>
                        <input 
                        className="input100"
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        value={user.address}
                        onChange={getUserData}
                        autocomplete="off"
                        required
                        />
                        <span className ="focus-input100"></span>
                        </div>

                        <div className="wrap-input100">
                            <span className ="label-input100">Message</span>
                            <textarea
                            className ="input100"
                            name="message"
                            placeholder="Your message here..."
                            value={user.message}
                            onChange={getUserData}>
                            </textarea>
                            
                            <span className="focus-input100"></span>
                            </div>

                            <div className ="container-contact100-form-btn">
                                <button className ="contact100-form-btn" onClick={postData}>
                                <span>
                                Submit
                                <i className="fa fa-long-arrow-right m-l-7"
                                aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>



                </div>
            </div>
        </form>
    </div>
   </div>
    </>
  )
}
}
export default ReactContact