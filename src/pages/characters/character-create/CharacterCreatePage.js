import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Grid,
  Icon,
  Modal,
  Progress,
  Step,
} from 'semantic-ui-react';

import { Page } from '../../../components/Page';

import { useGlobalStateValue } from '../../../state-management';
import { globalNewCharacterActions } from '../../../state-management/new-character';

import CharacterEditGeneral from './components/CharacterEditGeneral';
import CharacterEditEthnoIdentity from './components/CharacterEditEthnoIdentity';
import CharacterEditAttributes from './components/CharacterEditAttributes';

import './CharacterCreatePage.scss';


const {
  updateNewCharacterOneShot,
} = globalNewCharacterActions;


/**
 *
 */
export default function CharacterCreatePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterCreatePage', className);

  const [step, setStep] = useState(1);

  const [{ newCharacter, newCharacter: { oneShot } }, dispatch] = useGlobalStateValue();
  console.log('[CharacterCreatePage] newCharacter: %o', newCharacter)

  const [character, setCharacter] = useState({
    oneShot,
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
    attributes: {},
    subattributes: {},
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


  function validateInfo() {
    return false;
  }


  function handleOneShotChange(oneShotChoice) {
    dispatch(updateNewCharacterOneShot(oneShotChoice));
    setCharacter(char => ({ ...char, oneShot: oneShotChoice }));
  }


  function renderStep() {
    const steps = [
      <CharacterEditGeneral
        onValidated={isValid => {}}
      />,
      <CharacterEditEthnoIdentity
        onValidated={isValid => {}}
      />,
      <CharacterEditAttributes
        onValidated={isValid => {}}
      />,
    ];

    return steps[step - 1];
  }


  return (
    <Page className={classes} name="Create Character">
      {oneShot === null && (
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
        <Step active={step === 1} onClick={()  => setStep(1)}>
          <Icon name="birthday cake" />
          <Step.Content>
            <Step.Title>General</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 2} onClick={()  => setStep(2)}>
          <Icon name="dna" />
          <Step.Content>
            <Step.Title>Ethno&ndash;Identity</Step.Title>
          </Step.Content>
        </Step>

        <Step active={step === 3} onClick={()  => setStep(3)}>
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

      {oneShot !== null && renderStep()}

      {validateInfo() && (<Button type="submit">Save</Button>)}
    </Page>
  );
}


CharacterCreatePage.displayName = 'CharacterCreatePage';

CharacterCreatePage.propTypes = {
  className: PropTypes.string,
};

CharacterCreatePage.defaultProps = {
};
