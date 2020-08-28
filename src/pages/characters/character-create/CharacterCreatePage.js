import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Confirm,
  Grid,
  Icon,
  Progress,
  Step,
} from 'semantic-ui-react';
import {
  useQueryParam,
  NumberParam,
} from 'use-query-params';


import { Page } from '../../../components/Page';

import { useGlobalStateValue } from '../../../state-management';
import { newCharacterActions, useNewCharacterStateValue } from '../../../state-management/new-character';

import CharacterEditGeneral from './components/CharacterEditGeneral';
import CharacterEditEthnoIdentity from './components/CharacterEditEthnoIdentity';
import CharacterEditAttributes from './components/CharacterEditAttributes';

import './CharacterCreatePage.scss';

// import { lokiCollections } from '../../../db';

const {
  updateNewCharacterOneShot,
} = newCharacterActions;


/**
 *
 */
export default function CharacterCreatePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterCreatePage', className);

  const [step, setStep] = useQueryParam('step', NumberParam);
  const [showOneShotConfirmation, setShowOneShotConfirmation] = useState(false);

  const [{ appSettings }] = useGlobalStateValue();
  const [newCharacter, dispatch] = useNewCharacterStateValue();

  const { oneShot } = newCharacter;
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
        disabled={appSettings.characterCreation.lockOneShot}
        toggle
      />
    );
  }

  useLayoutEffect(() => {
    // get one-shot settings and update new character state
    dispatch(updateNewCharacterOneShot(appSettings.characterCreation.defaultOneShot));
  }, [dispatch, appSettings.characterCreation.defaultOneShot]);

  useLayoutEffect(() => {
    // default step is first step
    !Number.isFinite(step) && setStep(0);
  }, [step, setStep]);


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

      {stepConfigs[step]?.content}

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
