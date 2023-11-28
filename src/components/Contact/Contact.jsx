import React, { useState } from "react";
import { H1, H2, H3 } from "../Base/Headings";
import Card from "../Card/Card";
import { Divider } from "../Base/Divider";
import { handleChange } from "../../utils/Utils";
import { S2 } from "../Base/Subheadings";
import SocialMenu from "./SocialMenu";
import { Button } from "../Base/Button";
import { Input, Select, Option, Email, PhoneNumber } from "./styled";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const MAX_RETRY_COUNT = 3; // Define the maximum number of retry attempts
  const RETRY_DELAY_MS = 1000; // Define the delay (in milliseconds) between retry attempts
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create an object with the form data
    const formData = {
      name,
      email,
      interest,
      message,
    };
  
    let retryCount = 0;
    let isSubmissionSuccessful = false;
  
    while (!isSubmissionSuccessful && retryCount < MAX_RETRY_COUNT) {
      try {
        const response = await fetch(
          "https://portfolio-functions-dayne.azurewebsites.net/api/postContact?",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
  
        if (response.ok) {
          // Handle a successful submission (e.g., show a success message)
          console.log("Form submitted successfully!");
          setName("");
          setEmail("");
          setInterest("");
          setMessage("");
          setIsSubmitted(true);
          isSubmissionSuccessful = true;
        } else {
          // Handle submission errors (e.g., show an error message)
          console.error("Form submission failed.");
        }
      } catch (error) {
        console.error("Error while submitting the form:", error);
      }
  
      if (!isSubmissionSuccessful && retryCount < MAX_RETRY_COUNT - 1) {
        // If the submission failed and there are more retry attempts allowed, wait before retrying
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        retryCount++;
      }
    }
  
    if (!isSubmissionSuccessful) {
      // Handle the case where all retry attempts failed (e.g., display a final error message)
      console.error("Form submission failed after multiple retries.");
    }
  };
  

  const handleNameChange = handleChange(setName);
  const handleEmailChange = handleChange(setEmail);
  const handleMessageChange = handleChange(setMessage);
  const handleInterestChange = handleChange(setInterest);
  return (
    <div>
      <Card>
        <H1> // Let's Connect</H1>
        {!isSubmitted ? (
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              placeholder="YOUR NAME *"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <Input
              placeholder="YOUR EMAIL *"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <Select
              value={interest}
              onChange={(e) => handleInterestChange(e)}
            >
              <Option value=""> WHAT ARE YOU LOOKING FOR? </Option>
              <Option value="contact">Contact</Option>
              <Option value="recruit">Recruit</Option>
            </Select>
            <Input
              value={message}
              placeholder="WRITE A MESSAGE..."
              onChange={(e) => handleMessageChange(e)}
            />
            <Divider secondary />
            <Button type="submit"> SEND MESSAGE</Button>
            <Divider secondary />
          </form>
        ) : (
          <H2>Form Submtted Successfully</H2>
        )}
        <H3>Dayne Guy</H3>
        <Email href="mailto:dayneguy@gmail.com">dayneguy@gmail.com</Email>
        <PhoneNumber>727-554-4474</PhoneNumber>

        <div>
          <SocialMenu />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
