import React from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {


   const userData = {
    email:"Harleen@gmail.com",
    password:"Har@123"
}

  const navigate = useNavigate();

  const FormInputsSchema = z.object({
    email: z.string().email("This is invalid email"),
    password: z.string().min(7, "Must have atleast 7 characters")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(FormInputsSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });



  const onSubmit = (data) => {
    console.log("data>>",data)
    if(
      data.email === userData.email &&
      data.password === userData.password
    ) {
      navigate ("/dashboard");
    } else {

      alert ("Invalid credentials")
    }
    
  };

  const [showPassword, setshowPassword] = useState(false);




  return (
    <div className='LoginFormContainer'>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        
        <div><input placeholder='Enter your email'{...register("email")} /> </div>

        {errors.email && (
          <p style={{ color: "red", margin: 0, fontSize: "12px" }}>
            {errors.email.message}</p>
        )}



        <div className='passwordBox'><input type={showPassword? "text": "password"}{...register("password")}  
        placeholder='Enter your password'
        />
        <div className="eyeIconContainer"   onClick={()=>setshowPassword(!showPassword)}>
          {showPassword ? <Eye size={18}/> : <EyeOff  size={18}/>}
        </div>
        
        </div>

        
        {errors.password && (
          <p style={{ color: "red", margin: 0, fontSize: "12px" }}>
            {errors.password.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


