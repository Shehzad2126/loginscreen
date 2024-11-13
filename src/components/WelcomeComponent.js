import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaEnvelope, FaLock, FaRocket } from "react-icons/fa";

// Styled Components
const SignupContainer = styled.div`
  display: flex;
  height: 94vh;
  flex-direction: row;
  padding: 3vh 1.5%;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 30px;
  }
  @media (min-width: 1282px) {
    padding: 3vh 3%;
    height: 94vh;
  }
`;

const FormOuterContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  align-items: center;
  justify-content: center;
  height: 95vh;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 960px) {
    flex-direction: column;
    border-radius: 0;
  }
`;

const FormSection = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  position: absolute;
  bottom: 5vh;
  left: 12%;
  padding: 0 20px;
  @media (min-width: 1281px) {
    left: 16%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Step = styled.span`
  width: 20%;
  height: 4px;
  background: ${(props) => (props.isCurrentStep ? "#008080" : "#ddd")};
  border-radius: 2px;
  transition: background 0.3s;
`;

const IndicatorSection = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  height: 90vh;
  flex-direction: column;
  background-color: #f7f7f7;
  align-items: flex-end;
  position: relative;
  border-radius: 10px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const IndicatorHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #008080;
  margin-bottom: 30px;
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
  position: relative;
  /* Add the line only for items that are not the last one */
  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    left: 97%;
    bottom: -20px;
    width: 2px;
    height: 3.5vh;
    background-color: ${(props) => (props.active ? "#008080" : "#ccc")};
    transform: translateX(-50%);
  }

  @media (min-width: 1282px) {
    &:not(:last-of-type)::after {
      height: 1.7vh;
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 15px;
    &:not(:last-of-type)::after {
      bottom: -15px;
      height: 20px;
    }
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

const IconWrapper = styled.div`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${(props) => (props.active ? "#008080" : "#ccc")};
  color: ${(props) => (props.active ? "#008080" : "#ccc")};
  border-radius: 10%;
`;

const TextSpan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const ParaText = styled.div`
  font-size: 8px;
  font-weight: 400;
`;

const ParaHeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
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
const WelcomeComponent = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to next step
    navigate("/signup/welcome");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <SignupContainer>
      <ContentContainer>
        <FormOuterContainer>
          <SignUpPageLink onClick={handleLogin}>
            <p>Login Here</p>
          </SignUpPageLink>
          <FormSection>
            <FormContent>
              <Logo>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCzhE1gSht9L37pLDA37TcUxV8VgmUszX6b-HKZf8jNXH4aM5AMhKDCgw1ThxalGx609Jg6CkPJvb1Wpm0wuL77UTP4QM5Yrqzc80MTktnorHxLlhniFdIK66DOWAzTge9uzIPrtaM6Dg6eGkMLElx79TnoKjAHzHOIrjlGa8laU8mWOf5sg4F~7A1ZbQhNi5nuD-S3a77HPbzly8gjYpgAHSo9~uPZKgh95qAIS4BOM1m3ojMjMYZUBOhWEmzItyw0ovoC5l2ChLO~PlI9fatUeJrOA4dCGNvPoDvHrHkcaD9YQyf1kwSW1DRyrhdjdAx9IxkUvYYlV3xQ3jEawcA__"
                  alt="CentrixHub Logo"
                />
              </Logo>
              <Title>Welcome to CentrixHub</Title>
              <Subtitle>Your Account is successfully created</Subtitle>
              <NextButton onClick={handleNext}>Let’s Get Started</NextButton>
            </FormContent>
          </FormSection>
        </FormOuterContainer>

        <ProgressBar>
          {[1, 2, 3, 4].map((step) => (
            <Step key={step} isCurrentStep={step === 4} />
          ))}
        </ProgressBar>

        <IndicatorSection>
          <IndicatorHeader>
            <RightLogo>
              <img
                src="https://s3-alpha-sig.figma.com/img/bbc1/a500/655b2d5f49ef6c046799a2bde495e6b1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOstzF~p2GtOU8W8JcUkH6CEsEqj2KaGGsGi1PANdA3NdtZ1Q~YY4d6dpJWkxnMJUIjJ688NdvTRy2bUuibgt5t1U3RZmdmfvnZtjjN7EEuJiTiUE9NTJ6RCSYVe5LXHrKYl2APft46jGh0C4neEux0fz4JxZKLGdYzmJ7HDUEEFlsfj3KMLms98SfcCufKWioVZVC6ZM8uViUiiOgPRhat~~8aZlcL6KHvVgrS8j-tfT4CoA~eVd1L-6qZhQ~UdhrKLC5BI~GbKN~X9W2~3VZU-~XNpg-G8Cb3dLDDyiX8tYe5Il3HCHwzYsMMWUze5Dh~M6zuLFHJ3QTax3jpzGA__"
                alt="CentrixHub Logo"
              />
            </RightLogo>
          </IndicatorHeader>

          <IndicatorItem active>
            <TextSpan>
              <ParaHeadText>Your details</ParaHeadText>
              <ParaText>Provide Your Account details</ParaText>
            </TextSpan>
            <IconWrapper active>
              <FaUserAlt />
            </IconWrapper>
          </IndicatorItem>

          <IndicatorItem active>
            <TextSpan>
              <ParaHeadText>Verify Your Email</ParaHeadText>
              <ParaText>Verify Account via link</ParaText>
            </TextSpan>
            <IconWrapper active>
              <FaEnvelope />
            </IconWrapper>
          </IndicatorItem>

          <IndicatorItem active>
            <TextSpan>
              <ParaHeadText>Setup Password</ParaHeadText>
              <ParaText>Create a secure password</ParaText>
            </TextSpan>
            <IconWrapper active>
              <FaLock />
            </IconWrapper>
          </IndicatorItem>

          <IndicatorItem active>
            <TextSpan>
              <ParaHeadText>Welcome to CentrixHub</ParaHeadText>
              <ParaText>Explore our site today</ParaText>
            </TextSpan>
            <IconWrapper active>
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
};

export default WelcomeComponent;
