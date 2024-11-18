// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import { Typography, InputAdornment, IconButton } from "@mui/material";
// import GoogleIcon from "../../Assets/GoogleIcon.svg";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import {
//   MainContainer,
//   ContentContainer,
//   FormOuterContainer,
//   FormContainer,
//   ImageContainer,
//   SignUpPageLink,
//   FormContent,
//   Logo,
//   FormTitle,
//   NormalText,
//   UsernameFieldName,
//   ForgotPasswordLinkText,
//   PasswordFieldName,
//   LoginwithGoogleText,
//   StyledTextField,
//   StyledButton,
//   GoogleButton,
//   StyledLink,
//   DividerText,
//   FieldContainer,
//   LabelLinkContainer,
//   OverlayImage,
//   OverlayLogo,
// } from "./AuthenticationStyles";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({
//     general: "",
//     username: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => setShowPassword((prev) => !prev);
//   // const handleForgotPassword = () => {
//   //   if (!username) {
//   //     navigate("/reset-password", { state: { email: username } });
//   //     setErrors((prevErrors) => ({
//   //       ...prevErrors,
//   //       username: "Please enter your Email to reset the password",
//   //     }));
//   //   } else {
//   //     navigate("/reset-password", { state: { email: username } });
//   //   }
//   // };
//   const handleForgotPassword = async () => {
//     if (!username) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         username: "Please enter your email to reset the password",
//       }));
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "http://localhost:5000/api/users/forgetPassword",
//         {
//           email: username,
//         }
//       );

//       if (response.data.status === "success") {
//         toast.success("Password reset email sent!");
//         navigate("/verify-otp", {
//           state: { token: response.data.result.token },
//         });
//       }
//     } catch (error) {
//       setErrors({
//         general: error.response?.data?.message || "Failed to send reset email.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleSignup = () => {
//     navigate("/signup/account-details");
//   };

//   const handleLogin = async () => {
//     const newErrors = {};
//     if (!username && !password) {
//       newErrors.general = "Username/Email and Password are required";
//     } else {
//       if (!username) newErrors.username = "Username/Email is required";
//       if (!password) newErrors.password = "Password is required";
//     }
//     setErrors(newErrors);

//     if (!newErrors.general && !newErrors.username && !newErrors.password) {
//       setLoading(true);
//       setErrors({ general: "" });

//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/users/login",
//           {
//             emailOrUsername: username,
//             password,
//           }
//         );

//         if (response.data.status === "success") {
//           toast.success("Login successful!", {
//             autoClose: 3000,
//             onClose: () => navigate("/dashboard"),
//           });
//         }
//       } catch (error) {
//         setErrors({ general: error.response?.data?.message || "Login failed" });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleFieldChange = (field) => (e) => {
//     const value = e.target.value;
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [field]: "",
//     }));

//     if (field === "username") {
//       setUsername(value);
//     } else if (field === "password") {
//       setPassword(value);
//     }
//   };

//   return (
//     <MainContainer>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar
//         closeOnClick
//         pauseOnHover
//         style={{ width: "100%" }}
//       />
//       <ContentContainer>
//         <FormOuterContainer>
//           <FormContainer>
//             <SignUpPageLink onClick={handleSignup}>
//               <p>Signup Here</p>
//             </SignUpPageLink>
//             <FormContent>
//               <Logo>
//                 <img
//                   src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
//                   alt="Logo"
//                 />
//               </Logo>
//               <FormTitle variant="h6">Login</FormTitle>
//               <NormalText>Let's get things done smarter and faster.</NormalText>

//               {errors.general && (
//                 <Typography
//                   color="error"
//                   variant="body2"
//                   align="center"
//                   gutterBottom
//                 >
//                   {errors.general}
//                 </Typography>
//               )}
//               <FieldContainer>
//                 <Typography variant="body2">
//                   <UsernameFieldName>Username or Email</UsernameFieldName>
//                 </Typography>
//                 <StyledTextField
//                   variant="outlined"
//                   fullWidth
//                   value={username}
//                   onChange={handleFieldChange("username")}
//                   error={!!errors.username}
//                   helperText={errors.username}
//                 />
//               </FieldContainer>
//               <FieldContainer>
//                 <LabelLinkContainer>
//                   <Typography variant="body2">
//                     <PasswordFieldName>Password</PasswordFieldName>
//                   </Typography>
//                   <StyledLink onClick={handleForgotPassword}>
//                     <ForgotPasswordLinkText>
//                       Forgot your password?
//                     </ForgotPasswordLinkText>
//                   </StyledLink>
//                 </LabelLinkContainer>
//                 <StyledTextField
//                   variant="outlined"
//                   fullWidth
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={handleFieldChange("password")}
//                   error={!!errors.password}
//                   helperText={errors.password}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={handleClickShowPassword}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </FieldContainer>

//               <StyledButton variant="contained" fullWidth onClick={handleLogin}>
//                 Login
//               </StyledButton>

//               <DividerText>OR</DividerText>

//               <GoogleButton
//                 variant="outlined"
//                 startIcon={<img src={GoogleIcon} alt="Google Icon" />}
//                 fullWidth
//               >
//                 <LoginwithGoogleText>Login with Gmail</LoginwithGoogleText>
//               </GoogleButton>
//             </FormContent>
//           </FormContainer>
//         </FormOuterContainer>
//         <ImageContainer>
//           <OverlayImage
//             src="https://s3-alpha-sig.figma.com/img/a260/f84e/f9724a4f59da8e2a71708f3bf0e9d52a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQDfpiIS7GEJamMz2e9z0732nkw2BZmeaA1Xf9BggECugWCuAC0Cg4Ok8HcW1LppClOM-NLRaH9okFDIPHZoIUNXN3qHFNZUHdlz3vlrCaBldxLsX1jXTI7Q0WxAh5NcixGuHKP-4QiZZ7cFr4f~uWeavY1FNPGVTfG15v4u-4mrKyVlVk7sdlMY3MnVnV3x4FeoFJg4zQuuV7NJJc3BW63IA5TVhWUIZMcuTxersU0sMH~nlGMAuh6h9aStM~OrPOe597Wh8D7eth9WaW1sueqx548HSmeXJTEfDt4UuG-6oXIkQ5SEQsZJZVC6xE7cb6RRUwIoUwQlrL8jdp3VEw__"
//             alt="Overlay Image"
//           />
//           <OverlayLogo
//             src="https://s3-alpha-sig.figma.com/img/bbc1/a500/655b2d5f49ef6c046799a2bde495e6b1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNPg7DQ-od7jGOQXuLADLhc5li1OV5VCInbFXmsX9jZ7PedSa3IDWtPKCfYWslyOdePWIG48RwxnitdMhoIcWvQXfztHVGktk65e7R2Z-m633XsscILeGYGn5FgHVD277Kn0Q5IYUbechxpTgrso2JeyfWtO36SLmxMdtaDDPS6raj7HxKnZZfvXpN6oKjz4bABhfxlz8VM2Cyzvn6oUddGYjG-tNuEEoYGLqRpaZL9Ul~EPXOUuZ5RRhaUSr-PI1sieA0lNECO49bIoOzbB77GYlojcdKF6lgaRqT7i9kbbkE8wVJMyRDmqNfJXG1TSoYuUIrPhZSSFAMYnBWmt2w__"
//             alt="Floating Logo"
//           />
//         </ImageContainer>
//       </ContentContainer>
//     </MainContainer>
//   );
// };

// export default Login;
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux"; // Import Redux dispatch
import { login } from "../../store/authSlice"; // Import the login action
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, InputAdornment, IconButton } from "@mui/material";
import GoogleIcon from "../../Assets/GoogleIcon.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  MainContainer,
  ContentContainer,
  FormOuterContainer,
  FormContainer,
  ImageContainer,
  SignUpPageLink,
  FormContent,
  Logo,
  FormTitle,
  NormalText,
  UsernameFieldName,
  ForgotPasswordLinkText,
  PasswordFieldName,
  LoginwithGoogleText,
  StyledTextField,
  StyledButton,
  GoogleButton,
  StyledLink,
  DividerText,
  FieldContainer,
  LabelLinkContainer,
  OverlayImage,
  OverlayLogo,
} from "./AuthenticationStyles";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    general: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize Redux dispatch

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleForgotPassword = async () => {
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter your email to reset the password",
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/users/forgetPassword",
        {
          email: username,
        }
      );

      if (response.data.status === "success") {
        toast.success("Password reset email sent!");
        navigate("/verify-otp", {
          state: { token: response.data.result.token },
        });
      }
    } catch (error) {
      setErrors({
        general: error.response?.data?.message || "Failed to send reset email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    navigate("/signup/account-details");
  };

  const handleLogin = async () => {
    const newErrors = {};
    if (!username && !password) {
      newErrors.general = "Username/Email and Password are required";
    } else {
      if (!username) newErrors.username = "Username/Email is required";
      if (!password) newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (!newErrors.general && !newErrors.username && !newErrors.password) {
      setLoading(true);
      setErrors({ general: "" });

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            emailOrUsername: username,
            password,
          }
        );

        if (response.data.status === "success") {
          dispatch(login(response.data.user)); // Dispatch login action with user data
          toast.success("Login successful!", {
            autoClose: 3000,
            onClose: () => navigate("/dashboard"),
          });
        }
      } catch (error) {
        setErrors({ general: error.response?.data?.message || "Login failed" });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));

    if (field === "username") {
      setUsername(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  return (
    <MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        style={{ width: "100%" }}
      />
      <ContentContainer>
        <FormOuterContainer>
          <FormContainer>
            <SignUpPageLink onClick={handleSignup}>
              <p>Signup Here</p>
            </SignUpPageLink>
            <FormContent>
              <Logo>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
                  alt="Logo"
                />
              </Logo>
              <FormTitle variant="h6">Login</FormTitle>
              <NormalText>Let's get things done smarter and faster.</NormalText>

              {errors.general && (
                <Typography
                  color="error"
                  variant="body2"
                  align="center"
                  gutterBottom
                >
                  {errors.general}
                </Typography>
              )}
              <FieldContainer>
                <Typography variant="body2">
                  <UsernameFieldName>Username or Email</UsernameFieldName>
                </Typography>
                <StyledTextField
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={handleFieldChange("username")}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </FieldContainer>
              <FieldContainer>
                <LabelLinkContainer>
                  <Typography variant="body2">
                    <PasswordFieldName>Password</PasswordFieldName>
                  </Typography>
                  <StyledLink onClick={handleForgotPassword}>
                    <ForgotPasswordLinkText>
                      Forgot your password?
                    </ForgotPasswordLinkText>
                  </StyledLink>
                </LabelLinkContainer>
                <StyledTextField
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleFieldChange("password")}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FieldContainer>

              <StyledButton variant="contained" fullWidth onClick={handleLogin}>
                Login
              </StyledButton>

              <DividerText>OR</DividerText>

              <GoogleButton
                variant="outlined"
                startIcon={<img src={GoogleIcon} alt="Google Icon" />}
                fullWidth
              >
                <LoginwithGoogleText>Login with Gmail</LoginwithGoogleText>
              </GoogleButton>
            </FormContent>
          </FormContainer>
        </FormOuterContainer>
        <ImageContainer>
          <OverlayImage
            src="https://s3-alpha-sig.figma.com/img/a260/f84e/f9724a4f59da8e2a71708f3bf0e9d52a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQDfpiIS7GEJamMz2e9z0732nkw2BZmeaA1Xf9BggECugWCuAC0Cg4Ok8HcW1LppClOM-NLRaH9okFDIPHZoIUNXN3qHFNZUHdlz3vlrCaBldxLsX1jXTI7Q0WxAh5NcixGuHKP-4QiZZ7cFr4f~uWeavY1FNPGVTfG15v4u-4mrKyVlVk7sdlMY3MnVnV3x4FeoFJg4zQuuV7NJJc3BW63IA5TVhWUIZMcuTxersU0sMH~nlGMAuh6h9aStM~OrPOe597Wh8D7eth9WaW1sueqx548HSmeXJTEfDt4UuG-6oXIkQ5SEQsZJZVC6xE7cb6RRUwIoUwQlrL8jdp3VEw__"
            alt="Overlay Image"
          />
          <OverlayLogo
            src="https://s3-alpha-sig.figma.com/img/bbc1/a500/655b2d5f49ef6c046799a2bde495e6b1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNPg7DQ-od7jGOQXuLADLhc5li1OV5VCInbFXmsX9jZ7PedSa3IDWtPKCfYWslyOdePWIG48RwxnitdMhoIcWvQXfztHVGktk65e7R2Z-m633XsscILeGYGn5FgHVD277Kn0Q5IYUbechxpTgrso2JeyfWtO36SLmxMdtaDDPS6raj7HxKnZZfvXpN6oKjz4bABhfxlz8VM2Cyzvn6oUddGYjG-tNuEEoYGLqRpaZL9Ul~EPXOUuZ5RRhaUSr-PI1sieA0lNECO49bIoOzbB77GYlojcdKF6lgaRqT7i9kbbkE8wVJMyRDmqNfJXG1TSoYuUIrPhZSSFAMYnBWmt2w__"
            alt="Floating Logo"
          />
        </ImageContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
