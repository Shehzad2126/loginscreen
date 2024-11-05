import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "./GoogleIcon"; // Assume this is your Google icon component

// Styled components
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

const FormOuterContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 40%;
  background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
`;
const FormContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  margin-bottom: 20px;

  img {
    width: 60px;
  }
`;

const FormTitle = styled(Typography)`
  font-weight: bold !important;
  font-size: 24px !important;
  text-align: center;
  margin-bottom: 10px;
`;

const NormalText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-weight: 400 !important;
  text-align: center;
  color: #555 !important;
  margin-bottom: 30px !important;
`;

const StyledButton = styled(Button)`
  margin-top: 20px !important;
  background: rgba(16, 137, 143, 1) !important;
  border-radius: 8px !important;
  height: 7vh;
  font-size: 16px;
`;

const GoogleButton = styled(Button)`
  margin-top: 20px !important;
  border: 1px solid #d9d9d9 !important;
  color: #555 !important;
  border-radius: 8px !important;
  height: 7vh;
  font-size: 16px;
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
const UsernameFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-weight: 400 !important;
  margin-bottom: -7px;
  text-align: left;

  color: black;
`;
const ResendLink = styled.span`
  font-weight: bold;
  cursor: pointer;
  color: #000;
  text-decoration: underline;
  text-decoration-color: teal;
`;

// Main component
const ResetPassword = () => {
  const [screen, setScreen] = useState("verifyEmail");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const loginEmail = location.state?.email || ""; // Email passed from the login page
  const [combinedError, setCombinedError] = useState("");
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleContinueEmail = () => {
    if (!email) {
      setErrors({ email: "Email is required" });
    } else if (email !== loginEmail) {
      setErrors({ email: "The email does not match the one entered on login" });
    } else {
      setErrors({});
      setScreen("verifyOtp");
    }
  };
  const handleContinueOtp = () => {
    if (!otp) {
      setErrors({ otp: "OTP is required" });
    } else if (otp !== "1234") {
      setErrors({ otp: "The OTP does not match " });
    } else {
      setErrors({});
      setScreen("newPassword");
    }
  };
  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart =
      localPart.slice(0, -2).replace(/./g, "*") + localPart.slice(-2);
    return `${maskedLocalPart}@${domain}`;
  };
  const handleSetNewPassword = () => {
    const newErrors = {};

    if (!newPassword && !confirmPassword) {
      setCombinedError("Password and Confirm Password fields are required");
      setErrors({});
      return;
    } else {
      setCombinedError("");
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop further execution if there are individual field errors
    }

    if (newPassword !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      window.alert("Error: Passwords do not match");
    } else {
      setErrors({});
      window.alert("Success! Your password has been reset.");
      // Handle further actions, like redirecting to login page or showing success message
    }
  };
  return (
    <MainContainer>
      <ContentContainer>
        <FormOuterContainer>
          <FormContainer>
            <Logo>
              <img
                src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
                alt="Logo"
              />
            </Logo>
            {screen === "verifyEmail" && (
              <>
                <FormTitle variant="h4">Verify Your Email</FormTitle>
                <NormalText>
                  Enter your email {maskEmail(loginEmail)}
                </NormalText>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "-7px",
                    color: "black",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  // label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />

                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={handleContinueEmail}
                >
                  Continue
                </StyledButton>
              </>
            )}

            {screen === "verifyOtp" && (
              <>
                <FormTitle variant="h4">Verify OTP</FormTitle>
                <NormalText>Enter the OTP sent to your email</NormalText>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "-7px",
                    color: "black",
                    textAlign: "left", // Ensures left alignment
                    width: "100%", // Ensures it takes full width
                  }}
                >
                  OTP
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  error={!!errors.otp}
                  helperText={errors.otp}
                />
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    color: "#888",
                    marginTop: "-5px",
                    marginBottom: "20px",
                  }}
                >
                  didn’t get the code?{" "}
                  <ResendLink
                    onClick={() => console.log("Resend code triggered")}
                  >
                    Click to resend
                  </ResendLink>
                </Typography>
                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={handleContinueOtp}
                >
                  Continue
                </StyledButton>
              </>
            )}

            {screen === "newPassword" && (
              <>
                <FormTitle variant="h4">Create New Password</FormTitle>
                <NormalText>Set Your New Password.</NormalText>
                {combinedError && (
                  <Typography
                    variant="body2"
                    style={{
                      color: "red",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {combinedError}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "-7px",
                    color: "black",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  Password
                </Typography>
                <TextField
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword}
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
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "-7px",
                    color: "black",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  Confirm Password
                </Typography>
                <TextField
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowConfirmPassword}
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
                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={handleSetNewPassword}
                >
                  Continue
                </StyledButton>
              </>
            )}

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
          {/* Assuming you have an ImageContainer styled component for background image */}
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
