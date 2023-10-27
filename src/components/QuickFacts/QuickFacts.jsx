import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FactsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px;
`;

const Fact = styled.div`
  width: calc(50% - 10px); /* 2 items per line on phones */
  @media (min-width: 768px) {
      width: calc(25% - 10px); /* 4 items per line on tablets and larger screens */
`;

const Amount = styled.h2`
  font-size: 36px;
  font-family: "Source Sans Pro";
  font-weight: 600;
  line-height: 44px;
  margin: 0;
`;

const Description = styled.h1`
  font-size: 16px;
  font-family: "Source Sans Pro";
  font-weight: 300;
  line-height: 22px;
  margin: 0;
`;

const QuickFacts = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/api/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching:", error)); // Add the catch block here
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  if (items) {
    return (
      <FactsContainer>
        {items.items.map((item) => (
          <Fact key={item.description}>
            <Amount>{item.amount}</Amount>
            <Description>{item.description}</Description>
          </Fact>
        ))}
      </FactsContainer>
    );
  } else {
    return <div>Loading...</div>; // Provide a loading message while data is being fetched
  }
};

export default QuickFacts;
