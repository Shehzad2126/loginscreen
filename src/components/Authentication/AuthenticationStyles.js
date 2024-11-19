import styled from "styled-components";
import { Typography, Button, Link } from "@mui/material";
import TextField from "@mui/material/TextField";

// Styled Components
export const MainContainer = styled.div`
  display: flex;
  height: 94vh;
  font-family: Roboto;
  flex-direction: column;
  justify-content: center;
  flex-direction: row;
  padding: 3vh 1.5%;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 30px;
  }
  @media (min-width: 1282px) {
    padding: 3vh 3%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FormOuterContainer = styled.div`
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

export const FormContainer = styled.div`
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
  @media (max-width: 600px) {
    padding: 15px;
  }
`;
export const FormContent = styled.div`
  // max-width: 400px;
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  background-image: url("https://s3-alpha-sig.figma.com/img/f785/95bc/d327319daadc21099f439d4f6f86f7e0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIC9h-5mJ8O-Uv04QBJd2xRje1Rd~qeAQZ2ZFKu8vWc3l28QkRcUudWrm~2ABkHGpqJ8oSm9DvPJsyqO3Z76t3Okkg3XIAZ4JPAYmPiRH2niXhwnJkU~uCvEF~phDjbHvXKm-aiuFhrVaQybJSg7usCDlmVES4NSw6M4GiUY~YKlrriu4D4nJghiujKHfDRmwRhZGG97TLMVevtDmcBtX-yIZj9j-SxHYwkro-9J3Zde315YNh2Qq~RoGXDHKszyfNu6sSERVDx9j78YwyHHOgfa5ZiUdjhZFKKtJu7~gb8XWLb3gLENI8QDNva2wXGIf8uC~7-kfL2HxZT7o2ACQg__");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 10px 40px;
  display: flex;
  height: 90vh;
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

export const SignUpPageLink = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  font-weight: bold;
  font-size: 0.795rem;
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 960px) {
    position: absolute;
    right: 20px;
  }
  @media (min-width: 1282px) {
    position: absolute;
    right: 20px;
  }
`;

export const Logo = styled.div`
  margin-bottom: 10px;
  img {
    width: 40px;
    @media (max-width: 600px) {
      width: 35px;
    }
  }
`;

export const FormTitle = styled(Typography)`
  font-weight: bold !important;
  font-size: 18px !important;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 960px) {
    font-size: 16px !important;
  }
  @media (max-width: 600px) {
    font-size: 14px !important;
  }
`;

export const NormalText = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  text-align: center;
  color: #555 !important;
  margin-bottom: 30px !important;
`;

export const UsernameFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  display: flex;
  text-align: left;
  color: black;
`;

export const PasswordFieldName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: black;
`;

export const ForgotPasswordLinkText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 12px !important;
  font-weight: 400 !important;
  text-decoration-color: black;
  color: black;
`;

export const LoginwithGoogleText = styled.div`
  font-weight: 600 !important;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  margin: 0px 0px;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 0px !important;
  & .MuiInputBase-root {
    height: 6vh;
    padding: 0 10px;
    @media (max-width: 960px) {
      height: 5vh;
    }
    @media (max-width: 600px) {
      height: 4.5vh;
    }
    @media (min-width: 1282px) {
      height: 5vh;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 0px !important;
  background: rgba(16, 137, 143, 1) !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
  @media (max-width: 960px) {
    height: 5vh;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    height: 4.5vh;
    font-size: 12px;
  }
`;

export const GoogleButton = styled(Button)`
  margin-bottom: 10px !important;
  border: 1px solid #d9d9d9 !important;
  color: #555 !important;
  border-radius: 8px !important;
  height: 6vh;
  font-size: 16px;
  @media (max-width: 960px) {
    height: 5vh;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    height: 4.5vh;
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: #000 !important;
  text-decoration: none;
  font-size: 0.275rem;
  text-decoration-color: "#000" !important;
`;

export const DividerText = styled.div`
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

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const LabelLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

export const OverlayImage = styled.img`
  position: absolute;
  filter: brightness(400%);
  width: 50%;
  height: auto;
  opacity: 0.5;
  top: 46%;
  left: 0%;
  transform: rotate(-30deg);
`;

export const OverlayLogo = styled.img`
  position: absolute;
  width: 10%;
  height: auto;
  top: 3%;
  left: 85%;
`;

export const SignupContainer = styled.div`
  display: flex;
  height: 94vh;
  font-family: Roboto;
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

export const FormSection = styled.div`
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

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  font-size: 14px;
  color: #666;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background-color: #ddd;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  span {
    position: relative;
    z-index: 1;
    padding: 0 10px;
    background-color: white;
  }
`;

export const ProgressBar = styled.div`
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

export const IndicatorSection = styled.div`
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

export const IndicatorHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #008080;
  margin-bottom: 30px;
`;

export const TextSpan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const ParaText = styled.div`
  font-size: 8px;
  font-weight: 400;
`;

export const ParaHeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const RightLogo = styled.div`
  margin-bottom: 10px;
  img {
    width: 60px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
`;
