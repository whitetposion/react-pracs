import { useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver } from "@hookform/resolvers/yup" ; 
export const Form = ()=> {
     const schema = yup.object().shape({
          fullname: yup.string().required(),
          email:yup.string().email().required(),
          age: yup.number().positive().integer().min(18).required(),
          password : yup.string().min(4).max(10).required(),
          confirmpassword : yup.string().oneOf([yup.ref("password"), null]).required(),
     });

     const { register, handleSubmit} = useForm({
          resolver: yupResolver(schema),
     });

     const onSubmit =( data )=> {
          console.log(data);
     };

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <input type="text" placeholder="Fullname ..." {...register("fullname")} /> <br/>
               <input type="text" placeholder="Email.." {...register("email")} /> <br/>
               <input type="number" placeholder="Age"  {...register("age")}/> <br/>
               <input type="password" placeholder="Password" {...register("password")} /> <br/>
               <input type="password" placeholder="Confirm Password"  {...register("confirmpassword")}/> <br/>
               <input type="submit" />
          </form>
     );
};
