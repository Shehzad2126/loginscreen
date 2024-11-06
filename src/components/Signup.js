import React, { useState } from "react";
import styled from "styled-components";

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
`;

const FormContent = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
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

const FormStep = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
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
`;

const IndicatorSection = styled.div`
  width: 40%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
`;

const IndicatorItem = styled.div`
  color: ${(props) => (props.active ? "#008080" : "#ccc")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.active ? "#008080" : "#ccc")};
  border-radius: 50%;
`;

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <SignupContainer>
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
              ? "We sent a verification link to your email."
              : currentStep === 3
              ? "Create a secure password for your account."
              : "Your account is successfully created!"}
          </Subtitle>

          {/* Form Steps */}
          <FormStep active={currentStep === 1}>
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Profile Type" />
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 2}>
            <p>Check your email for a verification link.</p>
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 3}>
            <Input type="password" placeholder="Enter Password" />
            <Input type="password" placeholder="Re-enter Password" />
            <NextButton onClick={nextStep}>Continue</NextButton>
          </FormStep>

          <FormStep active={currentStep === 4}>
            <NextButton>Let’s Get Started</NextButton>
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
        <IndicatorItem active={currentStep >= 1}>
          <Icon active={currentStep >= 1}></Icon>
          <span>Your details</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 2}>
          <Icon active={currentStep >= 2}></Icon>
          <span>Verify your email</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 3}>
          <Icon active={currentStep >= 3}></Icon>
          <span>Setup Password</span>
        </IndicatorItem>
        <IndicatorItem active={currentStep >= 4}>
          <Icon active={currentStep >= 4}></Icon>
          <span>Welcome to CentrixHub</span>
        </IndicatorItem>
      </IndicatorSection>
    </SignupContainer>
  );
}

export default Signup;
