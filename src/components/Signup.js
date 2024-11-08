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

const SignupContainer = styled.div`
  display: flex;
  min-height: 92vh;
  flex-direction: row;
  padding: 10px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 30px;
  }
`;

const FormOuterContainer = styled.div`
  width: 65%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 960px) {
    flex-direction: column;
    border-radius: 0;
  }
`;

const FormSection = styled.div`
  width: 60%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const FormContent = styled.div`
  max-width: 400px;
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const IndicatorSection = styled.div`
  width: 35%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  align-items: flex-end;
  position: relative;
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 600px) {
    padding: 15px;
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
    @media (max-width: 600px) {
      height: 4.5vh;
    }
  }
`;

const NextButton = styled(Button)`
  width: 100%;
  padding: 12px;
  background-color: #008080 !important;
  color: #ffffff !important;
  border-radius: 5px !important;
  font-size: 16px !important;
  text-transform: none !important;
  font-weight: bold !important;
  &:hover {
    background-color: #006666 !important;
  }
  @media (max-width: 960px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 40px;
    @media (max-width: 600px) {
      width: 35px;
    }
  }
`;

const RightLogo = styled.div`
  margin-bottom: 20px;
  img {
    width: 60px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const UsernameFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  margin-bottom: 2px;
  color: black;
  @media (max-width: 600px) {
    font-size: 12px;
  }
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

const IndicatorHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #008080;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const IndicatorLogo = styled.img`
  width: 40px;
  margin-right: 10px;
  @media (max-width: 600px) {
    width: 30px;
  }
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
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${(props) => (props.active ? "#008080" : "#ccc")};
  color: ${(props) => (props.active ? "#008080" : "#ccc")};
  border-radius: 10%;
  margin-left: 10px;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const TextSpan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const ParaText = styled.div`
  font-size: 8px;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 6px;
  }
`;

const ParaHeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  filter: brightness(200%);
  width: 50%;
  height: auto;
  opacity: 0.5;
  top: 46%;
  left: 0%;
  transform: rotate(-30deg);
  @media (max-width: 600px) {
    width: 70%;
    top: 40%;
    left: 15%;
  }
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
    top: 25px;
    right: 10px;
  }
`;

const FormStep = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export {
  SignupContainer,
  FormOuterContainer,
  ContentContainer,
  FormSection,
  FormContent,
  IndicatorSection,
  StyledTextField,
  NextButton,
  Logo,
  RightLogo,
  Title,
  Subtitle,
  ErrorText,
  FieldContainer,
  UsernameFieldName,
  ProgressBar,
  Step,
  IndicatorHeader,
  IndicatorLogo,
  IndicatorItem,
  IconWrapper,
  TextSpan,
  ParaText,
  OverlayImage,
  SignUpPageLink,
  FormStep,
};

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
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

  const handleFieldChange = (field, value) => {
    if (field === "username") setUsername(value);
    if (field === "email") setEmail(value);
    if (field === "profileType") setProfileType(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);

    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

    if (field === "password") {
      if (value.length > 0 && value.length < 4) {
        setPasswordStrength("Weak password");
      } else if (value.length >= 4 && value.length < 8) {
        setPasswordStrength("Medium strength");
      } else if (value.length >= 8) {
        setPasswordStrength("Strong password");
      } else {
        setPasswordStrength("");
      }
    }
  };

  const validateStepOne = () => {
    const newErrors = {};
    let allFieldsEmpty = !username && !email && !profileType;

    if (allFieldsEmpty) {
      newErrors.general = "All fields are required";
    } else {
      if (!username) {
        newErrors.username = "Username is required";
      } else {
        if (username.length < 8) {
          newErrors.username = "Username must be at least 8 characters long";
        } else if (!/[A-Za-z]/.test(username)) {
          newErrors.username = "Username should contain at least 1 letter";
        } else if (!/\d/.test(username)) {
          newErrors.username = "Username should contain at least 1 digit";
        } else if (/[^A-Za-z\d]/.test(username)) {
          newErrors.username =
            "Username should only contain letters and digits";
        }
      }

      if (!email) {
        newErrors.email = "Email is required";
      } else if (!email.includes("@")) {
        newErrors.email = "Email should contain '@'";
      } else if (!email.endsWith("@idevo.com")) {
        newErrors.email =
          "Email domain should be 'idevo.com' (e.g., username@idevo.com)";
      }

      if (!profileType) {
        newErrors.profileType = "Profile type is required";
      }
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
      if (!password) {
        newErrors.password = "Password field is required";
      }
      if (!confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      }
      if (password && confirmPassword && password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
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

    if (currentStep === 3) {
      if (!validateStepThree()) return;

      if (password !== confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Passwords do not match",
        }));
        return;
      }
    }

    if (currentStep < 4) {
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

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <SignupContainer>
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
          <FormSection>
            <SignUpPageLink onClick={handleLogin}>
              <p>Login Here</p>
            </SignUpPageLink>
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
                <FieldContainer>
                  <Typography variant="body2">
                    <UsernameFieldName>Username </UsernameFieldName>
                  </Typography>
                  <StyledTextField
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) =>
                      handleFieldChange("username", e.target.value)
                    }
                    error={!!errors.username}
                    helperText={errors.username}
                  />
                </FieldContainer>

                <FieldContainer>
                  <Typography variant="body2">
                    <UsernameFieldName>Email </UsernameFieldName>
                  </Typography>
                  <StyledTextField
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </FieldContainer>

                <FieldContainer>
                  <Typography variant="body2">
                    <UsernameFieldName>Profile Type </UsernameFieldName>
                  </Typography>
                  <StyledTextField
                    variant="outlined"
                    fullWidth
                    value={profileType}
                    onChange={(e) =>
                      handleFieldChange("profileType", e.target.value)
                    }
                    error={!!errors.profileType}
                    helperText={errors.profileType}
                  />
                </FieldContainer>
                <NextButton onClick={nextStep}>Continue</NextButton>
              </FormStep>

              <FormStep active={currentStep === 2}>
                <p>Check your email for a verification link.</p>
                <NextButton onClick={nextStep}>Continue</NextButton>
              </FormStep>

              <FormStep active={currentStep === 3}>
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
                  onChange={(e) =>
                    handleFieldChange("password", e.target.value)
                  }
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {password && !errors.password && (
                  <Typography
                    variant="body2"
                    style={{
                      color:
                        passwordStrength === "Weak password"
                          ? "red"
                          : passwordStrength === "Medium strength"
                          ? "orange"
                          : "rgba(199, 44, 136, 1)",
                      textAlign: "left",
                      marginTop: "-10px",
                      marginBottom: "10px",
                    }}
                  >
                    {passwordStrength}
                  </Typography>
                )}

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
                  onChange={(e) =>
                    handleFieldChange("confirmPassword", e.target.value)
                  }
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <NextButton onClick={nextStep}>Continue</NextButton>
              </FormStep>

              <FormStep active={currentStep === 4}>
                <NextButton onClick={handleSignup}>
                  Let’s Get Started
                </NextButton>
              </FormStep>

              <ProgressBar>
                {[1, 2, 3, 4].map((step) => (
                  <Step key={step} isCurrentStep={currentStep === step}></Step>
                ))}
              </ProgressBar>
            </FormContent>
          </FormSection>
        </FormOuterContainer>

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
              <ParaHeadText>Your details</ParaHeadText>
              <ParaText>Provide Your Account details</ParaText>
            </TextSpan>
            <IconWrapper active={currentStep >= 1}>
              <FaUserAlt />
            </IconWrapper>
          </IndicatorItem>
          <IndicatorItem active={currentStep >= 2}>
            <TextSpan>
              <ParaHeadText>Verify Your Email</ParaHeadText>
              <ParaText>Verify Account via link</ParaText>
            </TextSpan>
            <IconWrapper active={currentStep >= 2}>
              <FaEnvelope />
            </IconWrapper>
          </IndicatorItem>
          <IndicatorItem active={currentStep >= 3}>
            <TextSpan>
              <ParaHeadText>Setup Password</ParaHeadText>
              <ParaText>Create a secure password</ParaText>
            </TextSpan>
            <IconWrapper active={currentStep >= 3}>
              <FaLock />
            </IconWrapper>
          </IndicatorItem>
          <IndicatorItem active={currentStep >= 4}>
            <TextSpan>
              <ParaHeadText>Welcome to CentrixHub</ParaHeadText>
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
      </ContentContainer>
    </SignupContainer>
  );
}

export default Signup;
