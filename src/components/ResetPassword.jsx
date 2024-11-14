// import React, { useState } from "react";
// import styled from "styled-components";
// import {
//   Typography,
//   TextField as MuiTextField,
//   Button,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import GoogleIcon from "./GoogleIcon";

// const MainContainer = styled.div`
//   display: flex;
//   height: 94vh;
//   flex-direction: row;
//   padding: 3vh 1.5%;
//   @media (max-width: 960px) {
//     flex-direction: column;
//     padding: 10px 30px;
//   }
// `;

// const ContentContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 95vh;
//   background-color: #ffffff;
//   border-radius: 10px;
//   overflow: hidden;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const FormOuterContainer = styled.div`
//   width: 65%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 1280px) {
//     width: 60%;
//   }
//   @media (max-width: 960px) {
//     width: 100%;
//   }
// `;

// const FormContainer = styled.div`
//   width: 50%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 960px) {
//     width: 100%;
//     padding: 20px;
//   }
// `;

// const Logo = styled.div`
//   margin-bottom: 10px;
//   img {
//     width: 60px;
//     @media (max-width: 600px) {
//       width: 50px;
//     }
//   }
// `;

// const StyledTextField = styled(MuiTextField)`
//   margin-bottom: 16px;
//   & .MuiInputBase-root {
//     height: 6vh;
//     padding: 0 10px;
//     @media (max-width: 960px) {
//       height: 5vh;
//     }
//   }
// `;

// const StyledButton = styled(Button)`
//   margin-top: 20px !important;
//   background: rgba(16, 137, 143, 1) !important;
//   border-radius: 8px !important;
//   height: 6vh;
//   font-size: 16px;
//   width: 100%;
// `;

// const FieldLabel = styled(Typography)`
//   font-family: "Roboto", sans-serif;
//   font-size: 16px;
//   font-weight: 400;
//   color: black;
//   text-align: left;
//   width: 100%;
//   margin-top: 10px !important;
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

// const GoogleButton = styled(Button)`
//   margin-top: 10px !important;
//   border: 1px solid #d9d9d9 !important;
//   color: #555 !important;
//   border-radius: 8px !important;
//   height: 6vh;
//   font-size: 16px;
//   width: 100%;
// `;

// const SubHeading = styled(Typography)`
//   font-family: "Roboto", sans-serif;
//   font-size: 14px;
//   font-weight: 400;
//   color: #666;
//   text-align: center;
//   margin-bottom: 15px !important;
// `;

// const SignUpPageLink = styled.div`
//   position: absolute;
//   top: 55px;
//   right: 20px;
//   font-weight: bold;
//   font-size: 0.795rem;
//   text-decoration: underline;
//   cursor: pointer;
//   @media (max-width: 960px) {
//     position: absolute;
//     top: 25px;
//     right: 20px;
//   }
//   @media (min-width: 1282px) {
//     position: absolute;
//     top: 20px;
//     right: 20px;
//   }
// `;

// const ImageContainer = styled.div`
//   width: 50%;
//   background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
//   background-size: cover;
//   background-position: center;
//   border-radius: 10px;
//   display: flex;
//   height: 90vh;
//   flex-direction: column;
//   background-color: #f7f7f7;
//   align-items: flex-end;
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
//   filter: brightness(400%);
// `;
// const ErrorText = styled(Typography)`
//   font-family: "Roboto", sans-serif;
//   font-size: 14px;
//   font-weight: 400;
//   color: red;
//   text-align: center;
//   margin-bottom: 15px !important;
// `;

// const OverlayLogo = styled.img`
//   position: absolute;
//   width: 10%;
//   height: auto;
//   top: 3%;
//   left: 85%;
// `;

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const validatePassword = () => {
//     const newErrors = {};
//     if (!newPassword && !confirmPassword) {
//       setErrors({
//         general: "Password and Confirm Password fields are required",
//       });
//     } else {
//       if (!newPassword) {
//         newErrors.newPassword = "Password is required";
//       } else if (newPassword.length < 8) {
//         newErrors.newPassword = "Password must be at least 8 characters";
//       } else if (!/[A-Z]/.test(newPassword)) {
//         newErrors.newPassword =
//           "Password must contain at least one uppercase letter";
//       } else if (!/[a-z]/.test(newPassword)) {
//         newErrors.newPassword =
//           "Password must contain at least one lowercase letter";
//       } else if (!/[0-9]/.test(newPassword)) {
//         newErrors.newPassword = "Password must contain at least one digit";
//       }

//       if (!confirmPassword) {
//         newErrors.confirmPassword = "Confirm password is required";
//       } else if (newPassword !== confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }

//       setErrors(newErrors);
//       return Object.keys(newErrors).length === 0;
//     }
//   };

//   const handleSetNewPassword = () => {
//     if (validatePassword()) {
//       toast.success("New Password Set Successfully", {
//         autoClose: 3000,
//         onClose: () => navigate("/login"),
//       });
//       setNewPassword("");
//       setConfirmPassword("");
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
//       />
//       <ContentContainer>
//         <FormOuterContainer>
//           <FormContainer>
//             <SignUpPageLink onClick={() => navigate("/signup/account-details")}>
//               <p>Signup Here</p>
//             </SignUpPageLink>
//             <Logo>
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
//                 alt="Logo"
//               />
//             </Logo>
//             <Typography variant="h5" style={{ marginBottom: "5px" }}>
//               Create New Password
//             </Typography>
//             <SubHeading>Let’s get things done smarter and faster.</SubHeading>
//             {errors.general && <ErrorText>{errors.general}</ErrorText>}
//             <FieldLabel>Password</FieldLabel>
//             <StyledTextField
//               type={showPassword ? "text" : "password"}
//               variant="outlined"
//               fullWidth
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               error={!!errors.newPassword}
//               helperText={errors.newPassword}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <FieldLabel>Confirm Password</FieldLabel>
//             <StyledTextField
//               type={showConfirmPassword ? "text" : "password"}
//               variant="outlined"
//               fullWidth
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowConfirmPassword((prev) => !prev)}
//                       edge="end"
//                     >
//                       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <StyledButton
//               variant="contained"
//               fullWidth
//               onClick={handleSetNewPassword}
//             >
//               Continue
//             </StyledButton>
//             <DividerText>OR</DividerText>
//             <GoogleButton
//               variant="outlined"
//               startIcon={<GoogleIcon style={{ color: "#4285F4" }} />}
//               fullWidth
//             >
//               Login with Gmail
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

// export default ResetPassword;
import React, { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  TextField as MuiTextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import GoogleIcon from "./GoogleIcon";

const MainContainer = styled.div`
  display: flex;
  height: 94vh;
  flex-direction: row;
  padding: 3vh 1.5%;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 30px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const FormOuterContainer = styled.div`
  width: 65%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
    padding: 20px;
  }
`;

const Logo = styled.div`
  margin-bottom: 10px;
  img {
    width: 60px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
`;

const StyledTextField = styled(MuiTextField)`
  margin-bottom: 16px;
  & .MuiInputBase-root {
    height: 6vh;
    padding: 0 10px;
    @media (max-width: 960px) {
      height: 5vh;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px !important;
  background: rgba(16, 137, 143, 1) !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
  width: 100%;
`;

const FieldLabel = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  text-align: left;
  width: 100%;
  margin-top: 10px !important;
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

const GoogleButton = styled(Button)`
  margin-top: 10px !important;
  border: 1px solid #d9d9d9 !important;
  color: #555 !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
  width: 100%;
`;

const SubHeading = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  text-align: center;
  margin-bottom: 15px !important;
`;

const SignUpPageLink = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  font-weight: bold;
  font-size: 0.795rem;
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 960px) {
    position: absolute;
    top: 25px;
    right: 20px;
  }
  @media (min-width: 1282px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  height: 90vh;
  flex-direction: column;
  background-color: #f7f7f7;
  align-items: flex-end;
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
  filter: brightness(400%);
`;
const ErrorText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: red;
  text-align: center;
  margin-bottom: 15px !important;
`;

const OverlayLogo = styled.img`
  position: absolute;
  width: 10%;
  height: auto;
  top: 3%;
  left: 85%;
`;

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const resetToken = location.state?.token; // Retrieve the token from navigation state

  const validatePassword = () => {
    const newErrors = {};
    if (!newPassword && !confirmPassword) {
      setErrors({
        general: "Password and Confirm Password fields are required",
      });
      return false;
    } else {
      if (!newPassword) {
        newErrors.newPassword = "Password is required";
      } else if (newPassword.length < 8) {
        newErrors.newPassword = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(newPassword)) {
        newErrors.newPassword =
          "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(newPassword)) {
        newErrors.newPassword =
          "Password must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(newPassword)) {
        newErrors.newPassword = "Password must contain at least one digit";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Confirm password is required";
      } else if (newPassword !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  };

  const handleSetNewPassword = async () => {
    if (!validatePassword()) return;

    try {
      await axios.post("http://localhost:5000/api/users/resetPassword", {
        token: resetToken,
        password: newPassword,
        isResetPassword: true,
      });

      toast.success("New Password Set Successfully", {
        autoClose: 3000,
        onClose: () => navigate("/login"),
      });
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrors({
        general: error.response?.data?.message || "Password reset failed",
      });
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
      />
      <ContentContainer>
        <FormOuterContainer>
          <FormContainer>
            <SignUpPageLink onClick={() => navigate("/signup/account-details")}>
              <p>Signup Here</p>
            </SignUpPageLink>
            <Logo>
              <img
                src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
                alt="Logo"
              />
            </Logo>
            <Typography variant="h5" style={{ marginBottom: "5px" }}>
              Create New Password
            </Typography>
            <SubHeading>Let’s get things done smarter and faster.</SubHeading>
            {errors.general && <ErrorText>{errors.general}</ErrorText>}
            <FieldLabel>Password</FieldLabel>
            <StyledTextField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FieldLabel>Confirm Password</FieldLabel>
            <StyledTextField
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSetNewPassword}
            >
              Continue
            </StyledButton>
            <DividerText>OR</DividerText>
            <GoogleButton
              variant="outlined"
              startIcon={<GoogleIcon style={{ color: "#4285F4" }} />}
              fullWidth
            >
              Login with Gmail
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

export default ResetPassword;
