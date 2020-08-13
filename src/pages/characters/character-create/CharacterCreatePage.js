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


  function handleOneShotChange(oneShotChoice) {
    dispatch(updateNewCharacterOneShot(oneShotChoice));
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
        {stepConfigs.map((stepConfig, configNdx) => (
          <Step active={step === configNdx} onClick={()  => setStep(configNdx)}>
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

      {oneShot !== null && stepConfigs[step].content}

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
