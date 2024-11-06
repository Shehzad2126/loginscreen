// import React, { useState } from "react";
// import styled from "styled-components";

// const SignupContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
// `;

// const FormSection = styled.div`
//   width: 60%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const FormContent = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const Logo = styled.div`
//   font-size: 32px;
//   font-weight: bold;
//   color: #008080;
//   margin-bottom: 20px;
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

// const FormStep = styled.div`
//   display: ${(props) => (props.active ? "block" : "none")};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
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
// `;

// const IndicatorSection = styled.div`
//   width: 40%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background-color: #f7f7f7;
//   justify-content: center;
//   align-items: center;
// `;

// const IndicatorItem = styled.div`
//   color: ${(props) => (props.active ? "#008080" : "#ccc")};
//   font-weight: ${(props) => (props.active ? "bold" : "normal")};
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const Icon = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: ${(props) => (props.active ? "#008080" : "#ccc")};
//   border-radius: 50%;
// `;

// function Signup() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const nextStep = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <SignupContainer>
//       {/* Left Form Section */}
//       <FormSection>
//         <FormContent>
//           <Logo>CentrixHub</Logo>
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
//               ? "We sent a verification link to your email."
//               : currentStep === 3
//               ? "Create a secure password for your account."
//               : "Your account is successfully created!"}
//           </Subtitle>

//           {/* Form Steps */}
//           <FormStep active={currentStep === 1}>
//             <Input type="text" placeholder="Username" />
//             <Input type="email" placeholder="Email" />
//             <Input type="text" placeholder="Profile Type" />
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 2}>
//             <p>Check your email for a verification link.</p>
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 3}>
//             <Input type="password" placeholder="Enter Password" />
//             <Input type="password" placeholder="Re-enter Password" />
//             <NextButton onClick={nextStep}>Continue</NextButton>
//           </FormStep>

//           <FormStep active={currentStep === 4}>
//             <NextButton>Let’s Get Started</NextButton>
//           </FormStep>

//           {/* Progress Bar at the Bottom */}
//           <ProgressBar>
//             {[1, 2, 3, 4].map((step) => (
//               <Step key={step} isCurrentStep={currentStep === step}></Step>
//             ))}
//           </ProgressBar>
//         </FormContent>
//       </FormSection>

//       {/* Right Indicator Section */}
//       <IndicatorSection>
//         <IndicatorItem active={currentStep >= 1}>
//           <Icon active={currentStep >= 1}></Icon>
//           <span>Your details</span>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 2}>
//           <Icon active={currentStep >= 2}></Icon>
//           <span>Verify your email</span>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 3}>
//           <Icon active={currentStep >= 3}></Icon>
//           <span>Setup Password</span>
//         </IndicatorItem>
//         <IndicatorItem active={currentStep >= 4}>
//           <Icon active={currentStep >= 4}></Icon>
//           <span>Welcome to CentrixHub</span>
//         </IndicatorItem>
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

const SignupContainer = styled.div`
  display: flex;
  min-height: 100vh;
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

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #008080;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
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
  align-items: flex-start;
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

const IndicatorIcon = styled.img`
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
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#008080" : "#ccc")};
  color: #fff;
  border-radius: 50%;
  margin-right: 10px;
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
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const validateStepOne = () => {
    if (!username || !email || !profileType) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const validateStepThree = () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill in both password fields.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStepOne()) return;
    if (currentStep === 3 && !validateStepThree()) return;
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleSignup = () => {
    toast.success("Account created successfully!", {
      autoClose: 3000,
      onClose: () => navigate("/dashboard"),
    });
  };

  return (
    <SignupContainer>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      {/* Left Form Section */}
      <FormSection>
        <FormContent>
          <Logo>CentrixHub</Logo>
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

          {/* Form Steps */}
          <FormStep active={currentStep === 1}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Profile Type"
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
            />
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 2}>
            <p>Check your email for a verification link.</p>
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 3}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ position: "relative" }}
            />
            <IconButton
              onClick={togglePasswordVisibility}
              style={{ position: "absolute", right: "20px", top: "30px" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ position: "relative" }}
            />
            <IconButton
              onClick={toggleConfirmPasswordVisibility}
              style={{ position: "absolute", right: "20px", top: "80px" }}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 4}>
            <NextButton onClick={handleSignup}>Let’s Get Started</NextButton>
          </FormStep>

          {/* Progress Bar at the Bottom */}
          <ProgressBar>
            {[1, 2, 3, 4].map((step) => (
              <Step key={step} isCurrentStep={currentStep === step}></Step>
            ))}
          </ProgressBar>
        </FormContent>
      </FormSection>

      {/* Right Indicator Section */}
      <IndicatorSection>
        <IndicatorHeader>
          <IndicatorIcon
            src="https://example.com/centrixhub-icon.png"
            alt="CentrixHub Logo"
          />
          CentrixHub
        </IndicatorHeader>
        <IndicatorItem active={currentStep >= 1}>
          <IconWrapper active={currentStep >= 1}>
            <span role="img" aria-label="user">
              👤
            </span>
          </IconWrapper>
          <span>Your details</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 2}>
          <IconWrapper active={currentStep >= 2}>
            <span role="img" aria-label="email">
              📧
            </span>
          </IconWrapper>
          <span>Verify your email</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 3}>
          <IconWrapper active={currentStep >= 3}>
            <span role="img" aria-label="lock">
              🔒
            </span>
          </IconWrapper>
          <span>Setup Password</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 4}>
          <IconWrapper active={currentStep >= 4}>
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </IconWrapper>
          <span>Welcome to CentrixHub</span>
        </IndicatorItem>
      </IndicatorSection>
    </SignupContainer>
  );
}

export default Signup;
