// import React from 'react';
// import axios from 'commons/axios';
// import { useForm } from 'react-hook-form';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';  
import classes from './Login.module.css';
import { useRouter } from 'next/router';


function Login() {

    const router = useRouter();
    function visitorClick() {
        router.push('/');
    };

    // console.log(process.env.USERNAME);
    // console.log(process.env.PASSWORD);

    return (
        <form action="/api/loginform" method="post" className={classes.form}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            {/* <br/> */}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            {/* <br/> */}
            <div className={classes.btns}>
                <button 
                    type="submit" 
                    className={classes.manager}
                >
                    Manager Login
                </button>
                <button 
                    type="button" 
                    onClick={visitorClick} 
                    className={classes.visitor}
                >
                    Visitor Click Here <br/> Redirect to Homepage
                </button>
            </div>
        </form>
    )
};

export default Login;

// function Login() {
//     <form action="/api/form" method="post">
//         <label for="first">First name:</label>
//         <input type="text" id="first" name="first" />
//         <label for="last">Last name:</label>
//         <input type="text" id="last" name="last" />
//         <button type="submit">Submit</button>
//     </form>
// };

// export default Login;


// export default function Login(props) {

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const navigate = useNavigate();

//     const handleLogin = async (data) => {
//         try {
//             const { email, password } = data;  // 解構出 data 裡的數據
//             const response = await axios.post('/auth/login', { email, password });  // '/auth/login' 為 server.js 中定義的接口
//             const jwtToken = response.data;  // response 回傳 JWT-token
//             console.log(jwtToken);
//             global.auth.setToken(jwtToken);  // 調用 /auth.js 定義的 setToken 函式
//             navigate("/");  // 跳轉到首頁視圖
//         } catch (error) {
//             const message = error.response.data.message;
//             toast.error(message);  // 顯示錯誤訊息
//         };
//     };

//     console.log(errors);

//     return (
//         <div className="login-wrapper">

//             <form className="box login-box" onSubmit={handleSubmit(handleLogin)}>
//                 <div className="field">
//                     <label className="label">Email</label>
//                     <div className="control">
//                         <input 
//                             className={`input ${errors.email && 'is-danger'}`}
//                             type="text" 
//                             placeholder="Email" 
//                             name="email"
//                             {...register("email", { 
//                                 required: 'email is required',
//                                 pattern: {
//                                     value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
//                                     message: 'Invalid email'
//                                 } 
//                             })}
//                         />
//                         {errors.email && (
//                             <p className="helper has-text-danger">{errors.email.message}</p>
//                         )}
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Password</label>
//                     <div className="control">
//                         <input 
//                             className={`input ${errors.password && 'is-danger'}`}
//                             type="password" 
//                             placeholder="Password" 
//                             name="password"
//                             {...register("password", {
//                                 required: 'password is required',
//                                 minLength: {
//                                     value: 6,
//                                     message: 'at less 6 digits!'
//                                 } 
//                             })}
//                         />
//                         {errors.password && (
//                             <p className="helper has-text-danger">{errors.password.message}</p>
//                         )}
//                     </div>
//                 </div>
//                 <div className="control">
//                     <button className="button is-fullwidth is-primary">Login</button>
//                 </div>
//                 <Link to="/register">
//                     <br/>
//                     <p className="is-size-7 is-underlined has-text-weight-bold">
//                         Don't have an account?&emsp;&gt;&gt;&gt; Register
//                     </p>
//                 </Link>
//             </form>

//         </div>  
//     )
// };
// // {`input ${errors.email && 'is-danger'}`} ${} 內判斷若 errors.email 為空則返回 'is-danger' 

