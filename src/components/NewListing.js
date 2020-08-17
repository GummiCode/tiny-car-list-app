import React, { useState } from 'react';
import styled from 'styled-components';

const NewListingContainer = styled.div`
  height: calc(100vh - 120px - 20px);
  width: 100vw;
  margin: 120px 0 0 0;
  padding: 20px 0 0 0;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const Intro = styled.p`
  width: calc(100% - 40px);
  margin: 0 20px 15px 20px;
`;

const Header = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  height: 60px;
  width: 100vw;
  background: black;
  border-bottom: 1px solid #454545;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  height: 60px;
  margin: 0 0 0 20px;
  border-bottom: 1px solid #454545;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const FormStyles = styled.form`
width: 320px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: flex-start;
`;

const FormElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin: 10px 0 0 0;
`;

const Label = styled.label`
  margin: 0 10px 0 0;
  width: 120px;
`;

const NumberInput = styled.input.attrs({
  type: 'number',
})`
  -moz-appearance: textfield;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;


const SubmitButton = styled.button`
  height: 40px;
  width: 40vw;
  margin: 30px 0 0 0;
  font-size: 1.2em;
  color: black;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-weight: bold;
  background: whitesmoke;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const NewListing = () => {
  const initialState = {
    fields: {
      make: '',
      model: '',
      year: 1990,
      price: 10000,
      location: '',
      email: '',
      password: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <NewListingContainer>
      <Header>
        <HeaderText>Create A New Listing</HeaderText>
      </Header>

      <Intro>
        Every year thousands of people get a great deal on their (tiny) cars
        using our service. Simply fill in the form below and wait for the emails
        to come in.
      </Intro>

      <FormStyles>
        <FormElement>
          <Label htmlFor="make">Make</Label>
          <input
            type="text"
            id="make"
            name="make"
            placeholder=""
            value={fields.make}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="model">Model</Label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder=""
            value={fields.model}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="year">Year</Label>
          <NumberInput
            id="year"
            name="year"
            placeholder=""
            value={fields.year}
            type="number"
            min="1886"
            step="1"
            onWheel={(event) => event.preventDefault()}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="price">Price (£)</Label>
          <NumberInput
            id="price"
            name="price"
            placeholder=""
            value={fields.price}
            type="number"
            min="0"
            step="1"
            onWheel={(event) => event.preventDefault()}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="location">Location</Label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder=""
            value={fields.location}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="email">Email:</Label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={fields.email}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="password">Password:</Label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={fields.password}
            onChange={handleFieldChange}
            required
          />
        </FormElement>


          <ButtonContainer>
          <SubmitButton type="submit">
            <p>Submit Listing!</p>
          </SubmitButton>
          </ButtonContainer>

      </FormStyles>
    </NewListingContainer>
  );
};

export default NewListing;
