import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Modal,
  Progress,
  Select,
  Step,
} from 'semantic-ui-react';

import { Page } from '../../../components/Page';

import CharacterEditGeneral from './components/CharacterEditGeneral';
import CharacterEditEthnoIdentity from './components/CharacterEditEthnoIdentity';
import CharacterEditAttributes from './components/CharacterEditAttributes';

import './CharacterCreatePage.scss';


/**
 *
 */
export default function CharacterCreatePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterCreatePage', className);

  const raceOptions = [];
  const factionOptions = [];

  const [isOneShot, setIsOneShot] = useState(null);
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    oneShot: isOneShot,
    bonusId: null,
    playerName: '',
    name: '',
    raceId: null,
    factionId: null,
    classId: null,
    subclassId: null,
    religionId: null,
    languageCategory1Id: null,
    language1Id: null,
    languageCategory2Id: null,
    language2Id: null,
    languageCategory3Id: null,
    language3Id: null,
    languageCategory4Id: null,
    language4Id: null,
    sex: null,
    sexuality: null,
    height: null,
    heightUnits: null,
    weight: null,
    weightUnits: null,
    hairColour: '',
    hairStyle: '',
    eyeColor: '',
    ethnicity: '',
    skinAbnormalities: '',
    features: '',
    facialHair: '',
    glasses: '',
    age: '',
    dayJob: '',
  });

  console.log('[CharacterCreatePage] character: %o', character);



  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function validateInfo() {
    return false;
  }


  function handleCharacterChange(changes) {
    setCharacter(char => ({ ...char, ...changes }));
  }

  function handleOneShotChange(oneShotChoice) {
    setIsOneShot(oneShotChoice);
    setCharacter(char => ({ ...char, oneShot: oneShotChoice }));
  }


  function renderStep() {
    const steps = [
      <CharacterEditGeneral
        character={character}
        onChange={handleCharacterChange}
        onValidated={isValid => {}}
      />,
      <CharacterEditEthnoIdentity
        character={character}
        onChange={handleCharacterChange}
        onValidated={isValid => {}}
      />,
      <CharacterEditAttributes
        character={character}
        onChange={handleCharacterChange}
        onValidated={isValid => {}}
      />,
    ];

    return steps[step - 1];
  }


  return (
    <Page className={classes} name="Create Character">
      {isOneShot === null && (
        <Modal
          defaultOpen={true}
          size="mini"
          header="One Shot"
          content="Are you creating this character for a one shot?"
          actions={[
            { key: 'isOneShot', content: 'Yes', positive: true, onClick: () => handleOneShotChange(true) },
            { key: 'isNotOneShot', content: 'No', positive: true, onClick: () => handleOneShotChange(false) },
          ]}
        />
      )}

      <Step.Group size="mini" fluid>
        <Step active={step == 1} onClick={()  => setStep(1)}>
          <Icon name="birthday cake" />
          <Step.Content>
            <Step.Title>General</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step == 2} onClick={()  => setStep(2)}>
          <Icon name="dna" />
          <Step.Content>
            <Step.Title>Ethno&ndash;Identity</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step == 3} onClick={()  => setStep(3)}>
          <Icon name="heartbeat" />
          <Step.Content>
            <Step.Title>Attributes</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 4} onClick={()  => setStep(4)}>
          <Icon name="magic" />
          <Step.Content>
            <Step.Title>Skills</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 5} onClick={()  => setStep(5)}>
          <Icon name='book' />
          <Step.Content>
            <Step.Title>Knowledge</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 6} onClick={()  => setStep(6)}>
          <Icon name='handshake' />
          <Step.Content>
            <Step.Title>Connections</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={13}>
            <Progress color="teal" percent={44} progress />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button>Save Character</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {isOneShot !== null && renderStep()}

      {validateInfo() && (<Button type="submit">Save</Button>)}
    </Page>
  );
}


CharacterCreatePage.displayName = 'CharacterCreatePage';

CharacterCreatePage.propTypes = {
  // children: PropTypes.node,
};

CharacterCreatePage.defaultProps = {
};
