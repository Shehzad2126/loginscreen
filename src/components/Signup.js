// import React, { useState } from "react";
// import styled from "styled-components";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { InputAdornment, IconButton } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { FaUserAlt, FaEnvelope, FaLock, FaRocket } from "react-icons/fa";

// const OverlayImage = styled.img`
//   position: absolute;
//   filter: brightness(200%);
//   width: 50%;
//   height: auto;
//   opacity: 0.5;
//   top: 46%;
//   left: 0%;
//   transform: rotate(-30deg);
// `;

// const SignupContainer = styled.div`
//   display: flex;
//   min-height: 95vh;
//   flex-direction: row;
//   padding: 20px;
// `;

// const TextSpan = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: right;
// `;

// const FormSection = styled.div`
//   width: 60%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const FormContent = styled.div`
//   max-width: 400px;
//   text-align: center;
//   width: 100%;
// `;

// const ParaText = styled.div`
//   font-size: 12px;
//   font-weight: 400;
// `;

// const Logo = styled.div`
//   margin-bottom: 20px;
//   img {
//     width: 40px;
//   }
// `;

// const RightLogo = styled.div`
//   margin-bottom: 20px;
//   img {
//     width: 60px;
//   }
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 14px;
//   text-align: left;
//   margin-bottom: 10px;
// `;

// const NextButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background: #008080;
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
//   margin-top: 20px;
//   font-size: 16px;
// `;

// const ProgressBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const Step = styled.span`
//   width: 20%;
//   height: 4px;
//   background: ${(props) => (props.isCurrentStep ? "#008080" : "#ddd")};
//   border-radius: 2px;
//   transition: background 0.3s;
// `;

// const IndicatorSection = styled.div`
//   width: 40%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   background-color: #f7f7f7;
//   align-items: flex-end;
//   position: relative;
// `;

// const IndicatorHeader = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 20px;
//   font-weight: bold;
//   color: #008080;
//   margin-bottom: 30px;
// `;

// const IndicatorLogo = styled.img`
//   width: 40px;
//   margin-right: 10px;
// `;

// const IndicatorItem = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 16px;
//   color: ${(props) => (props.active ? "#008080" : "#ccc")};
//   font-weight: ${(props) => (props.active ? "bold" : "normal")};
//   margin-bottom: 20px;
//   justify-content: flex-end;
//   width: 100%;
// `;

// const IconWrapper = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
//   border: 1px solid ${(props) => (props.active ? "#008080" : "#ccc")};
//   color: ${(props) => (props.active ? "#008080" : "#ccc")};
//   border-radius: 10%;
//   margin-left: 10px;
// `;

// const FormStep = styled.div`
//   display: ${(props) => (props.active ? "block" : "none")};
// `;

// function Signup() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [profileType, setProfileType] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({
//     general: "",
//     username: "",
//     email: "",
//     type: "",
//     password: "",
//   });
//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword((prev) => !prev);

//   const validateStepOne = () => {
//     if (!username || !email || !profileType) {
//       setErrorMessage("All fields are required.");
//       return false;
//     }
//     setErrorMessage("");
//     return true;
//   };

//   const validateStepThree = () => {
//     if (!password || !confirmPassword) {
//       setErrorMessage("Please fill in both password fields.");
//       return false;
//     }
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return false;
//     }
//     setErrorMessage("");
//     return true;
//   };

//   const nextStep = () => {
//     if (currentStep === 1 && !validateStepOne()) return;
//     if (currentStep === 3 && !validateStepThree()) return;
//     if (currentStep < 4) setCurrentStep(currentStep + 1);
//   };

//   const handleSignup = () => {
//     const newErrors = {};
//     if (!username && !email && !profileType) {
//       newErrors.general = "Username/Email and Password are required";
//     } else {
//       if (!username) newErrors.username = "Username/Email is required";
//       if (!password) newErrors.password = "Password is required";
//     }
//     setErrors(newErrors);

//     if (!newErrors.general && !newErrors.username && !newErrors.password) {
//       if (username === "shahzad@gmail.com" && password === "1234") {
//         toast.success("Login successful!", {
//           autoClose: 3000, // Automatically closes after 3 seconds
//           className: "full-width-toast",
//           onClose: () => navigate("/dashboard"), // Navigates to dashboard after toast closes
//         });
//       } else {
//         setErrors({ general: "Invalid email or password" });
//       }
//     }
//   };

//   return (
//     <SignupContainer>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

//       <FormSection>
//         <FormContent>
//           <Logo>
//             <img
//               src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
//               alt="CentrixHub Logo"
//             />
//           </Logo>
//           <Title>
//             {currentStep === 1
//               ? "Create a Free Account"
//               : currentStep === 2
//               ? "Verify Your Email"
//               : currentStep === 3
//               ? "Create Password"
//               : "Welcome to CentrixHub"}
//           </Title>
//           <Subtitle>
//             {currentStep === 1
//               ? "Let's get things done smarter and faster."
//               : currentStep === 2
//               ? `We sent the link to ${email}`
//               : currentStep === 3
//               ? "Create a secure password for your account."
//               : "Your account is successfully created!"}
//           </Subtitle>

//           {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

//           <FormStep active={currentStep === 1}>
//             <Input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="text"
//               placeholder="Profile Type"
//               value={profileType}
//               onChange={(e) => setProfileType(e.target.value)}
//             />
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 2}>
//             <p>Check your email for a verification link.</p>
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 3}>
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <IconButton onClick={togglePasswordVisibility}>
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//             <Input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Re-enter Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <IconButton onClick={toggleConfirmPasswordVisibility}>
//               {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 4}>
//             <NextButton onClick={handleSignup}>Let’s Get Started</NextButton>
//           </FormStep>

//           <ProgressBar>
//             {[1, 2, 3, 4].map((step) => (
//               <Step key={step} isCurrentStep={currentStep === step}></Step>
//             ))}
//           </ProgressBar>
//         </FormContent>
//       </FormSection>

//       <IndicatorSection>
//         <IndicatorHeader>
//           <RightLogo>
//             <img
//               src="https://s3-alpha-sig.figma.com/img/bbc1/a500/655b2d5f49ef6c046799a2bde495e6b1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNPg7DQ-od7jGOQXuLADLhc5li1OV5VCInbFXmsX9jZ7PedSa3IDWtPKCfYWslyOdePWIG48RwxnitdMhoIcWvQXfztHVGktk65e7R2Z-m633XsscILeGYGn5FgHVD277Kn0Q5IYUbechxpTgrso2JeyfWtO36SLmxMdtaDDPS6raj7HxKnZZfvXpN6oKjz4bABhfxlz8VM2Cyzvn6oUddGYjG-tNuEEoYGLqRpaZL9Ul~EPXOUuZ5RRhaUSr-PI1sieA0lNECO49bIoOzbB77GYlojcdKF6lgaRqT7i9kbbkE8wVJMyRDmqNfJXG1TSoYuUIrPhZSSFAMYnBWmt2w__"
//               alt="CentrixHub Logo"
//             />
//           </RightLogo>
//         </IndicatorHeader>
//         <IndicatorItem active={currentStep >= 1}>
//           <TextSpan>
//             <span>Your details</span>
//             <ParaText>Provide Your Account details</ParaText>
//           </TextSpan>

//           <IconWrapper active={currentStep >= 1}>
//             <FaUserAlt />
//           </IconWrapper>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 2}>
//           <TextSpan>
//             <span>Verify Your Email</span>
//             <ParaText>Verify Account via link</ParaText>
//           </TextSpan>
//           <IconWrapper active={currentStep >= 2}>
//             <FaEnvelope />
//           </IconWrapper>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 3}>
//           <TextSpan>
//             <span>Setup Password</span>
//             <ParaText>Create a secure password</ParaText>
//           </TextSpan>
//           <IconWrapper active={currentStep >= 3}>
//             <FaLock />
//           </IconWrapper>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 4}>
//           <TextSpan>
//             <span>Welcome to CentrixHub</span>
//             <ParaText>Explore our site today</ParaText>
//           </TextSpan>
//           <IconWrapper active={currentStep >= 4}>
//             <FaRocket />
//           </IconWrapper>
//         </IndicatorItem>
//         <OverlayImage
//           src="https://s3-alpha-sig.figma.com/img/a260/f84e/f9724a4f59da8e2a71708f3bf0e9d52a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQDfpiIS7GEJamMz2e9z0732nkw2BZmeaA1Xf9BggECugWCuAC0Cg4Ok8HcW1LppClOM-NLRaH9okFDIPHZoIUNXN3qHFNZUHdlz3vlrCaBldxLsX1jXTI7Q0WxAh5NcixGuHKP-4QiZZ7cFr4f~uWeavY1FNPGVTfG15v4u-4mrKyVlVk7sdlMY3MnVnV3x4FeoFJg4zQuuV7NJJc3BW63IA5TVhWUIZMcuTxersU0sMH~nlGMAuh6h9aStM~OrPOe597Wh8D7eth9WaW1sueqx548HSmeXJTEfDt4UuG-6oXIkQ5SEQsZJZVC6xE7cb6RRUwIoUwQlrL8jdp3VEw__"
//           alt="Overlay Image"
//         />
//       </IndicatorSection>
//     </SignupContainer>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaUserAlt, FaEnvelope, FaLock, FaRocket } from "react-icons/fa";
import {
  TextField as MuiTextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
const OverlayImage = styled.img`
  position: absolute;
  filter: brightness(200%);
  width: 50%;
  height: auto;
  opacity: 0.5;
  top: 46%;
  left: 0%;
  transform: rotate(-30deg);
`;

const SignupContainer = styled.div`
  display: flex;
  min-height: 95vh;
  flex-direction: row;
  padding: 20px;
`;

const TextSpan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const FormSection = styled.div`
  width: 60%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContent = styled.div`
  max-width: 400px;
  text-align: center;
  width: 100%;
`;

const ParaText = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 40px;
  }
`;

const RightLogo = styled.div`
  margin-bottom: 20px;
  img {
    width: 60px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;
const StyledTextField = styled(MuiTextField)`
  margin-bottom: 16px;

  & .MuiInputBase-root {
    height: 6vh;
    padding: 0 10px;

    @media (max-width: 960px) {
      height: 5vh;
    }
    @media (max-width: 600px) {
      height: 4.5vh;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
`;
const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
const NextButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #008080;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;
`;
const UsernameFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  text-align: left;
  font-weight: 400 !important;
  margin-bottom: 2px;
  color: black;
`;
const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Step = styled.span`
  width: 20%;
  height: 4px;
  background: ${(props) => (props.isCurrentStep ? "#008080" : "#ddd")};
  border-radius: 2px;
  transition: background 0.3s;
`;

const IndicatorSection = styled.div`
  width: 40%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  align-items: flex-end;
  position: relative;
`;

const IndicatorHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #008080;
  margin-bottom: 30px;
`;

const IndicatorLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const IndicatorItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => (props.active ? "#008080" : "#ccc")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  margin-bottom: 20px;
  justify-content: flex-end;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${(props) => (props.active ? "#008080" : "#ccc")};
  color: ${(props) => (props.active ? "#008080" : "#ccc")};
  border-radius: 10%;
  margin-left: 10px;
`;

const FormStep = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    profileType: "",
    password: "",
    confirmPassword: "",
    general: "",
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const validateStepOne = () => {
    const newErrors = {};
    if (!username && !email && !profileType) {
      newErrors.general = "All fields are required";
    } else {
      if (!username) newErrors.username = "Username is required";
      if (!email) newErrors.email = "Email is required";
      if (!profileType) newErrors.profileType = "Profile type is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStepThree = () => {
    const newErrors = {};
    if (!password && !confirmPassword) {
      newErrors.general = "Both password fields are required";
    } else {
      if (!password) newErrors.password = "Password is required";
      if (!confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (password.length < 4) {
        newErrors.password = "Password is too weak (minimum 4 characters)";
      } else if (password.length < 6) {
        newErrors.password = "Password strength: Medium";
      } else {
        newErrors.password = ""; // No specific error for passwords >= 8 characters
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStepOne()) return;
    if (
      currentStep === 3 &&
      validateStepThree() &&
      password === confirmPassword
    ) {
      setCurrentStep(4);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSignup = () => {
    toast.success("Account created successfully!", {
      autoClose: 3000,
      className: "full-width-toast",
      onClose: () => navigate("/dashboard"),
    });
  };

  return (
    <SignupContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        style={{ width: "100%" }} // Full-screen width
      />

      <FormSection>
        <FormContent>
          <Logo>
            <img
              src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
              alt="CentrixHub Logo"
            />
          </Logo>
          <Title>
            {currentStep === 1
              ? "Create a Free Account"
              : currentStep === 2
              ? "Verify Your Email"
              : currentStep === 3
              ? "Create Password"
              : "Welcome to CentrixHub"}
          </Title>
          <Subtitle>
            {currentStep === 1
              ? "Let's get things done smarter and faster."
              : currentStep === 2
              ? `We sent the link to ${email}`
              : currentStep === 3
              ? "Create a secure password for your account."
              : "Your account is successfully created!"}
          </Subtitle>

          {errors.general && <ErrorText>{errors.general}</ErrorText>}

          <FormStep active={currentStep === 1}>
            {/* <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
            <FieldContainer>
              <Typography variant="body2">
                <UsernameFieldName>Username </UsernameFieldName>
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
            {errors.username && <ErrorText>{errors.username}</ErrorText>}

            {/* <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            <FieldContainer>
              <Typography variant="body2">
                <UsernameFieldName>Email </UsernameFieldName>
              </Typography>
              <StyledTextField
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
            </FieldContainer>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            {/* <Input
              type="text"
              placeholder="Profile Type"
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
            /> */}
            <FieldContainer>
              <Typography variant="body2">
                <UsernameFieldName>Profile Type </UsernameFieldName>
              </Typography>
              <StyledTextField
                variant="outlined"
                fullWidth
                value={profileType}
                onChange={(e) => setProfileType(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
            </FieldContainer>
            {errors.profileType && <ErrorText>{errors.profileType}</ErrorText>}

            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 2}>
            <p>Check your email for a verification link.</p>
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 3}>
            {/* <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton> */}
            <Typography
              variant="body2"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                marginBottom: "-15px",
                color: "black",
                textAlign: "left",
                width: "100%",
              }}
            >
              Password
            </Typography>
            <StyledTextField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            {/* <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <IconButton onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton> */}
            <Typography
              variant="body2"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                marginBottom: "-15px",
                color: "black",
                textAlign: "left",
                width: "100%",
              }}
            >
              Confirm Password
            </Typography>
            <StyledTextField
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )}

            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 4}>
            <NextButton onClick={handleSignup}>Let’s Get Started</NextButton>
          </FormStep>

          <ProgressBar>
            {[1, 2, 3, 4].map((step) => (
              <Step key={step} isCurrentStep={currentStep === step}></Step>
            ))}
          </ProgressBar>
        </FormContent>
      </FormSection>

      <IndicatorSection>
        <IndicatorHeader>
          <RightLogo>
            <img
              src="https://s3-alpha-sig.figma.com/img/bbc1/a500/655b2d5f49ef6c046799a2bde495e6b1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNPg7DQ-od7jGOQXuLADLhc5li1OV5VCInbFXmsX9jZ7PedSa3IDWtPKCfYWslyOdePWIG48RwxnitdMhoIcWvQXfztHVGktk65e7R2Z-m633XsscILeGYGn5FgHVD277Kn0Q5IYUbechxpTgrso2JeyfWtO36SLmxMdtaDDPS6raj7HxKnZZfvXpN6oKjz4bABhfxlz8VM2Cyzvn6oUddGYjG-tNuEEoYGLqRpaZL9Ul~EPXOUuZ5RRhaUSr-PI1sieA0lNECO49bIoOzbB77GYlojcdKF6lgaRqT7i9kbbkE8wVJMyRDmqNfJXG1TSoYuUIrPhZSSFAMYnBWmt2w__"
              alt="CentrixHub Logo"
            />
          </RightLogo>
        </IndicatorHeader>
        <IndicatorItem active={currentStep >= 1}>
          <TextSpan>
            <span>Your details</span>
            <ParaText>Provide Your Account details</ParaText>
          </TextSpan>

          <IconWrapper active={currentStep >= 1}>
            <FaUserAlt />
          </IconWrapper>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 2}>
          <TextSpan>
            <span>Verify Your Email</span>
            <ParaText>Verify Account via link</ParaText>
          </TextSpan>
          <IconWrapper active={currentStep >= 2}>
            <FaEnvelope />
          </IconWrapper>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 3}>
          <TextSpan>
            <span>Setup Password</span>
            <ParaText>Create a secure password</ParaText>
          </TextSpan>
          <IconWrapper active={currentStep >= 3}>
            <FaLock />
          </IconWrapper>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 4}>
          <TextSpan>
            <span>Welcome to CentrixHub</span>
            <ParaText>Explore our site today</ParaText>
          </TextSpan>
          <IconWrapper active={currentStep >= 4}>
            <FaRocket />
          </IconWrapper>
        </IndicatorItem>
        <OverlayImage
          src="https://s3-alpha-sig.figma.com/img/a260/f84e/f9724a4f59da8e2a71708f3bf0e9d52a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQDfpiIS7GEJamMz2e9z0732nkw2BZmeaA1Xf9BggECugWCuAC0Cg4Ok8HcW1LppClOM-NLRaH9okFDIPHZoIUNXN3qHFNZUHdlz3vlrCaBldxLsX1jXTI7Q0WxAh5NcixGuHKP-4QiZZ7cFr4f~uWeavY1FNPGVTfG15v4u-4mrKyVlVk7sdlMY3MnVnV3x4FeoFJg4zQuuV7NJJc3BW63IA5TVhWUIZMcuTxersU0sMH~nlGMAuh6h9aStM~OrPOe597Wh8D7eth9WaW1sueqx548HSmeXJTEfDt4UuG-6oXIkQ5SEQsZJZVC6xE7cb6RRUwIoUwQlrL8jdp3VEw__"
          alt="Overlay Image"
        />
      </IndicatorSection>
    </SignupContainer>
  );
}

export default Signup;
