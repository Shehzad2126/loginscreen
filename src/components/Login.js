// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Typography,
//   Link,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import GoogleIcon from "./GoogleIcon";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const ContentContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 94vh;
//   background-color: #ffffff;
//   border-radius: 10px;
//   overflow: hidden;
// `;

// const FormOuterContainer = styled.div`
//   width: 60%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const SignUpPageLink = styled.div`
//   position: absolute;
//   top: 55px;
//   right: 20px;
//   font-size: 0.575rem;
//   text-decoration: underline;
//   cursor: pointer;

//   p {
//     margin: 0;
//     font-weight: bold;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FormContainer = styled.div`
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 400px;
// `;

// const ImageContainer = styled.div`
//   width: 40%;
//   background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
//   background-size: cover;
//   background-position: center;
//   border-radius: 10px;
//   position: relative;
// `;

// const OverlayImage = styled.img`
//   position: absolute;
//   width: 50%;
//   height: auto;
//   opacity: 0.5;
//   top: 46%;
//   left: 0%;
//   transform: rotate(-30deg);
// `;
// const OverlayLogo = styled.img`
//   position: absolute;
//   width: 10%;
//   height: auto;
//   top: 3%;
//   left: 85%;
// `;

// const Logo = styled.div`
//   margin-bottom: 20px;

//   img {
//     width: 40px;
//   }
// `;

// const FormTitle = styled(Typography)`
//   font-weight: bold !important;
//   font-size: 18px !important;
//   text-align: center;
//   margin-bottom: 10px;
// `;
// const UsernameFieldName = styled.div`
//   font-family: "Roboto", sans-serif;
//   font-size: 14px !important;
//   font-weight: 400 !important;
//   margin-bottom: -7px;
//   color: black;
// `;
// const ForgotPasswordLinkText = styled.div`
//   font-family: "Roboto", sans-serif;
//   font-size: 12px !important;
//   font-weight: 400 !important;
//   text-decoration-color: black;
//   color: black;
// `;
// const PasswordFieldName = styled.div`
//   font-family: "Roboto", sans-serif;
//   font-size: 14px !important;
//   font-weight: 400 !important;
//   color: black;
// `;
// const NormalText = styled(Typography)`
//   font-family: "Roboto", sans-serif;
//   font-size: 14px !important;
//   font-weight: 400 !important;
//   text-align: center;
//   color: #555 !important;
//   margin-bottom: 30px !important;
// `;
// const LoginwithGoogleText = styled.div`
//   font-weight: 600 !important;
//   font-family: "Roboto", sans-serif;
//   padding: 0px 0px;
//   margin: 0px 0px;
// `;
// const StyledButton = styled(Button)`
//   margin-top: 20px !important;
//   background: rgba(16, 137, 143, 1) !important;
//   border-radius: 8px !important;
//   height: 7vh;
//   font-size: 16px;
// `;

// const GoogleButton = styled(Button)`
//   margin-top: 20px !important;
//   border: 1px solid #d9d9d9 !important;
//   color: #555 !important;
//   border-radius: 8px !important;
//   height: 7vh;
//   font-size: 16px;
// `;

// const StyledLink = styled(Link)`
//   color: inherit;

//   cursor: pointer;
//   color: #000 !important;
//   text-decoration: none;
//   font-size: 0.275rem;
//   textdecorationcolor: "#000" !important;
// `;

// const DividerText = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin-top: 20px;
//   margin-bottom: 20px;

//   &::before,
//   &::after {
//     content: "";
//     flex: 1;
//     border-bottom: 1px solid #ddd;
//   }

//   &::before {
//     margin-right: 10px;
//   }

//   &::after {
//     margin-left: 10px;
//   }
// `;

// const FieldContainer = styled.div`
//   width: 100%;
//   margin-bottom: 16px;
// `;

// const LabelLinkContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 4px;
// `;

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((prev) => !prev);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({
//     general: "",
//     username: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const handleForgotPassword = () => {
//     if (!username) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         username: "Please enter your Email to reset the password",
//       }));
//     } else {
//       navigate("/reset-password", { state: { email: username } });
//     }
//   };
//   const handleSignup = () => {
//     navigate("/signup");
//   };
//   const handleLogin = () => {
//     const newErrors = {};
//     if (!username && !password) {
//       newErrors.general = "Username/Email and Password are required";
//     } else {
//       if (!username) newErrors.username = "Username/Email is required";
//       if (!password) newErrors.password = "Password is required";
//     }
//     setErrors(newErrors);

//     if (!newErrors.general && !newErrors.username && !newErrors.password) {
//       console.log("Logging in...");
//     }
//   };
//   return (
//     <MainContainer>
//       <ContentContainer>
//         <FormOuterContainer>
//           <SignUpPageLink onClick={handleSignup}>
//             <p>Signup Here</p>
//           </SignUpPageLink>
//           <FormContainer>
//             <Logo>
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
//                 alt="Logo"
//               />
//             </Logo>
//             <FormTitle variant="h6">Login</FormTitle>
//             <NormalText>Let's get things done smarter and faster.</NormalText>

//             {errors.general && (
//               <Typography
//                 color="error"
//                 variant="body2"
//                 align="center"
//                 gutterBottom
//               >
//                 {errors.general}
//               </Typography>
//             )}
//             <FieldContainer>
//               <Typography variant="body2">
//                 <UsernameFieldName>Username or Email</UsernameFieldName>
//               </Typography>

//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 error={!!errors.username}
//                 helperText={errors.username}
//               />
//             </FieldContainer>

//             {/* Password Field with "Forgot your password?" */}
//             <FieldContainer>
//               <LabelLinkContainer>
//                 <Typography variant="body2">
//                   <PasswordFieldName>Password</PasswordFieldName>
//                 </Typography>
//                 <StyledLink onClick={handleForgotPassword}>
//                   <ForgotPasswordLinkText>
//                     Forgot your password?
//                   </ForgotPasswordLinkText>
//                 </StyledLink>
//               </LabelLinkContainer>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 error={!!errors.password}
//                 helperText={errors.password}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={handleClickShowPassword} edge="end">
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </FieldContainer>

//             <StyledButton variant="contained" fullWidth onClick={handleLogin}>
//               Login
//             </StyledButton>

//             <DividerText>OR</DividerText>

//             <GoogleButton
//               variant="outlined"
//               startIcon={<GoogleIcon style={{ color: "#4285F4" }} />}
//               fullWidth
//             >
//               <LoginwithGoogleText>Login with Gmail</LoginwithGoogleText>
//             </GoogleButton>
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
import {
  TextField as MuiTextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import GoogleIcon from "./GoogleIcon";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 94vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

const FormOuterContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpPageLink = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  font-size: 0.575rem;
  text-decoration: underline;
  cursor: pointer;

  p {
    margin: 0;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const FormContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const ImageContainer = styled.div`
  width: 40%;
  background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
`;

const OverlayImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  opacity: 0.5;
  top: 46%;
  left: 0%;
  transform: rotate(-30deg);
`;

const OverlayLogo = styled.img`
  position: absolute;
  width: 10%;
  height: auto;
  top: 3%;
  left: 85%;
`;

const Logo = styled.div`
  margin-bottom: 20px;

  img {
    width: 40px;
  }
`;

const FormTitle = styled(Typography)`
  font-weight: bold !important;
  font-size: 18px !important;
  text-align: center;
  margin-bottom: 10px;
`;

const UsernameFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  margin-bottom: 2px;
  color: black;
`;

const ForgotPasswordLinkText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 12px !important;
  font-weight: 400 !important;
  text-decoration-color: black;
  color: black;
`;

const PasswordFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: black;
`;

const NormalText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  text-align: center;
  color: #555 !important;
  margin-bottom: 30px !important;
`;

const LoginwithGoogleText = styled.div`
  font-weight: 600 !important;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  margin: 0px 0px;
`;

const StyledTextField = styled(MuiTextField)`
  margin-bottom: 16px;

  & .MuiInputBase-root {
    height: 6vh; /* Set the desired height */
    padding: 0 10px; /* Adjust padding if necessary */
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px !important;
  background: rgba(16, 137, 143, 1) !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
`;

const GoogleButton = styled(Button)`
  margin-top: 20px !important;
  border: 1px solid #d9d9d9 !important;
  color: #555 !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  color: #000 !important;
  text-decoration: none;
  font-size: 0.275rem;
  text-decoration-color: "#000" !important;
`;

const DividerText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const LabelLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    general: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleForgotPassword = () => {
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter your Email to reset the password",
      }));
    } else {
      navigate("/reset-password", { state: { email: username } });
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!username && !password) {
      newErrors.general = "Username/Email and Password are required";
    } else {
      if (!username) newErrors.username = "Username/Email is required";
      if (!password) newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (!newErrors.general && !newErrors.username && !newErrors.password) {
      console.log("Logging in...");
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        <FormOuterContainer>
          <SignUpPageLink onClick={handleSignup}>
            <p>Signup Here</p>
          </SignUpPageLink>
          <FormContainer>
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
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
              startIcon={<GoogleIcon style={{ color: "#4285F4" }} />}
              fullWidth
            >
              <LoginwithGoogleText>Login with Gmail</LoginwithGoogleText>
            </GoogleButton>
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
