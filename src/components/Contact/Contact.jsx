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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      interest,
      message,
    };

    // Send the form data to your server or make an API call to handle the submission
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
      } else {
        // Handle submission errors (e.g., show an error message)
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
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
