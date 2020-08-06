import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Form,
  Header,
  Icon,
  Select,
  Step,
} from 'semantic-ui-react';

import { Page } from '../../../components/Page';

import CharacterCreateStep1 from './components/CharacterCreateStep1';
import CharacterCreateStep2 from './components/CharacterCreateStep2';

import './CharacterCreatePage.scss';


/**
 *
 */
export default function CharacterCreatePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterCreatePage', className);

  const [step, setStep] = useState(1);

  const raceOptions = [];
  const factionOptions = [];

  // state = {
  //     step: 1,
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     age: '',
  //     city: '',
  //     country: ''
  // }

  // handleChange = input => event => {
  //     this.setState({ [input] : event.target.value })
  // }


  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function validateInfo() {
    return false;
  }


  function handleChange() {}


  function renderStep() {
    let stepComponent = null;

    switch(step) {
      case 1:
        stepComponent = (
          <CharacterCreateStep1
            nextStep={nextStep}
            handleChange={handleChange}
          />
        );
        break;

      case 2:
        stepComponent = (
          <CharacterCreateStep2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
          />
        );
        break;

      case 3:
        break;

      case 4:
        break;

      case 5:
        break;
    }

    return stepComponent;
  }


  return (
    <Page className={classes} name="Create Character">
      <Step.Group>
        <Step active={step == 1}>
          <Icon name="address card" />
          <Step.Content>
            <Step.Title>General</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step == 2}>
          <Icon name="sliders horizontal" />
          <Step.Content>
            <Step.Title>Attributes</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 3}>
          <Icon name="magic" />
          <Step.Content>
            <Step.Title>Skills</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 4}>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Knowledge</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 5}>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Connections</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <Form>
        {renderStep()}

        {step > 1 && (<Button>Previous</Button>)}
        {step < 4 && (<Button>Next</Button>)}
        {validateInfo() && (<Button type="submit">Save</Button>)}
      </Form>
    </Page>
  );
}


CharacterCreatePage.displayName = 'CharacterCreatePage';

CharacterCreatePage.propTypes = {
  // children: PropTypes.node,
};

CharacterCreatePage.defaultProps = {
};
