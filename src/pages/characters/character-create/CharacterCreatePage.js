import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Confirm,
  Grid,
  Icon,
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

// import { lokiCollections } from '../../../db';

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

  const [step, setStep] = useState(0);
  const [showOneShotConfirmation, setShowOneShotConfirmation] = useState(false);

  const [{ newCharacter, newCharacter: { oneShot } }, dispatch] = useGlobalStateValue();
  console.log('[CharacterCreatePage] newCharacter: %o', newCharacter)

  const stepConfigs = [
    {
      icon: 'birthday cake',
      title: 'General',
      content: (<CharacterEditGeneral onValidated={isValid => {}} />),
    },
    {
      icon: 'dna',
      title: (<React.Fragment>Ethno&ndash;Identity</React.Fragment>),
      content: (<CharacterEditEthnoIdentity onValidated={isValid => {}} />),
    },
    {
      icon: 'heartbeat',
      title: 'Attributes',
      content: (<CharacterEditAttributes onValidated={isValid => {}} />),
    },
    {
      icon: 'magic',
      title: 'Skills',
      content: (null),
    },
    {
      icon: 'book',
      title: 'Knowledge',
      content: (null),
    },
  ];

  if (!oneShot) {
    stepConfigs.push({
      icon: 'handshake',
      title: 'Connections',
      content: (null),
    });
  }


  function validateInfo() {
    return false;
  }


  function handleOneShotChange(evt, { checked: makeOneShot }) {
    console.log('[CharacterCreatePage handleOneShotChange] makeOneShot %o', makeOneShot);
    if (makeOneShot) {
      // show confirmation
      setShowOneShotConfirmation(true);
    } else {
      dispatch(updateNewCharacterOneShot(makeOneShot));
    }
  }

  function handleOneShotConfirmation(makeOneShot) {
    if (makeOneShot) {
      dispatch(updateNewCharacterOneShot(makeOneShot));
    }

    setShowOneShotConfirmation(false);
  }


  function renderOneShotToggle() {
    return (
      <Checkbox
        label="One-Shot?"
        checked={oneShot}
        onChange={handleOneShotChange}
        toggle
      />
    );
  }


  return (
    <Page className={classes} name="Create Character" rightAside={renderOneShotToggle()}>
      <Confirm
        header="Are You Sure It's a One-Shot?"
        content="Making this character for a one-shot may remove information you have already provided."
        open={showOneShotConfirmation}
        onConfirm={() => handleOneShotConfirmation(true)}
        onCancel={() => handleOneShotConfirmation(false)}
      />

      <Step.Group size="mini" fluid>
        {stepConfigs.map((stepConfig, configNdx) => (
          <Step key={stepConfig.title} active={step === configNdx} onClick={()  => setStep(configNdx)}>
            <Icon name={stepConfig.icon} />
            <Step.Content>
              <Step.Title>{stepConfig.title}</Step.Title>
            </Step.Content>
          </Step>
        ))}
      </Step.Group>

      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={13}>
            <Progress color="teal" percent={24} progress />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button>Save Character</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {stepConfigs[step].content}

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
