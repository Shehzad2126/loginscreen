import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Typography, TextField as MuiTextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "../../Assets/GoogleIcon.svg";
import Centrix_Logo from "../../Assets/Centrix_Logo.svg";
import OverlayImag from "../../Assets/OverlayImage.svg";
import Background from "../../Assets/Background.svg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const MainContainer = styled.div`
  display: flex;
  height: 94vh;
  flex-direction: row;
  font-family: Roboto;
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
  margin-bottom: 20px;
  img {
    width: 60px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
`;

const OTPContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const OTPInput = styled(MuiTextField)`
  width: 15%;
  text-align: center;
  & .MuiInputBase-input {
    text-align: center;
    font-size: 14px;
    padding: 7px;
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
  width: 65%;
  height: auto;
  opacity: 0.5;
  top: 40%;
  left: 0%;
  transform: rotate(-30deg);
  filter: brightness(400%);
`;

const OverlayLogo = styled.img`
  position: absolute;
  width: 25%;
  height: auto;
  top: 3%;
  left: 70%;
`;
const ResendLinkContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  // text-color: ;
`;

const ResendLink = styled.a`
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const loginEmail = location.state?.email || "shahzadaliarain2126@gmail.com";
  const initialToken = location.state?.token || ""; // Token received for OTP verification

  const handleOTPChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleContinueOtp = async () => {
    const enteredOtp = otp.join("");
    if (!enteredOtp) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/verifyOtp",
        {
          email: loginEmail,
          otp: enteredOtp,
        }
      );

      if (response.data.status === "success") {
        toast.success("OTP verified successfully!");
        navigate("/reset-password", {
          state: { token: response.data.result.token },
        });
      } else {
        toast.error("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setErrors({
        otp: error.response?.data?.message || "OTP verification failed",
      });
    }
  };
  const handleResendOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/resendOtp",
        { email: loginEmail }
      );

      if (response.data.status === "success") {
        toast.success("OTP sent again. Please check your email.");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Error resending OTP. Try again later.");
    }
  };

  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart =
      localPart.slice(0, -2).replace(/./g, "*") + localPart.slice(-2);
    return `${maskedLocalPart}@${domain}`;
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
            <Logo>
              <img
                src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
                alt="Logo"
              />
            </Logo>
            <Typography variant="h5">Verify OTP</Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              Enter the OTP sent to {maskEmail(loginEmail)}
            </Typography>
            <OTPContainer>
              {otp.map((digit, index) => (
                <OTPInput
                  key={index}
                  id={`otp-input-${index}`}
                  variant="outlined"
                  value={digit}
                  onChange={(e) => handleOTPChange(e.target, index)}
                  inputProps={{ maxLength: 1 }}
                  error={!!errors.otp}
                />
              ))}
            </OTPContainer>
            {errors.otp && (
              <Typography color="error" variant="body2">
                {errors.otp}
              </Typography>
            )}
            <ResendLinkContainer>
              <Typography color="rgba(130, 130, 130, 1)" variant="body2">
                Didn’t get the code?{" "}
                <ResendLink onClick={handleResendOtp}>
                  Click to resend
                </ResendLink>
              </Typography>
            </ResendLinkContainer>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleContinueOtp}
            >
              Continue
            </StyledButton>
            <DividerText>OR</DividerText>
            <GoogleButton
              variant="outlined"
              startIcon={<img src={GoogleIcon} alt="Google Icon" />}
              fullWidth
            >
              Login with Gmail
            </GoogleButton>
          </FormContainer>
        </FormOuterContainer>
        <ImageContainer>
          <OverlayImage src={OverlayImag} alt="Overlay Image" />
          <OverlayLogo src={Centrix_Logo} alt="Floating Logo" />
        </ImageContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default VerifyOtp;
