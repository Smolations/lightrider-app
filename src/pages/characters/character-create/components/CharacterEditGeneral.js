import classNames from 'classnames';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Container,
  Form,
  Grid,
} from 'semantic-ui-react';

import { DbSelect } from '../../../../components/DbSelect';

import { lokiCollections } from '../../../../db';

import { useGlobalStateValue } from '../../../../state-management';
import { globalNewCharacterActions } from '../../../../state-management/new-character';

// import './CharacterEditGeneral.scss';


const {
  updateNewCharacterBonusId,
  updateNewCharacterPlayerName,
  updateNewCharacterName,
  updateNewCharacterRaceId,
  updateNewCharacterFactionId,
  updateNewCharacterClassId,
  updateNewCharacterSubclassId,
} = globalNewCharacterActions;


/**
 *
 */
export default function CharacterEditGeneral(props) {
  const { className } = props;

  const classes = classNames('CharacterEditGeneral', className);

  const [{
    newCharacter: {
      oneShot,
      bonusId,
      playerName,
      name,
      raceId,
      factionId,
      classId,
      subclassId,
    },
  }, dispatch] = useGlobalStateValue();


  function handlePlayerNameChange(e, { value: newPlayerName }) {
    dispatch(updateNewCharacterPlayerName(newPlayerName));
  }

  function handleCharacterNameChange(e, { value: newName }) {
    dispatch(updateNewCharacterName(newName));
  }

  function handleRaceChange(e, { value: newRaceId }) {
    dispatch(updateNewCharacterRaceId(newRaceId));
  }

  function handleFactionChange(e, { value: newFactionId }) {
    dispatch(updateNewCharacterFactionId(newFactionId));
  }

  function handleClassChange(e, { value: newClassId }) {
    dispatch(updateNewCharacterClassId(newClassId));
  }

  function handleSubclassChange(e, { value: newSubclassId }) {
    dispatch(updateNewCharacterSubclassId(newSubclassId));
  }

  function handleBonusChange(e, { value: newBonusId }) {
    dispatch(updateNewCharacterBonusId(newBonusId));
  }


  return (
    <Form className={classes}>
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Input
                label="Player Name"
                placeholder="Player Name"
                value={playerName}
                onChange={handlePlayerNameChange}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Input
                label="Character Name"
                placeholder="Character Name"
                value={name}
                onChange={handleCharacterNameChange}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                control={DbSelect}
                collectionName="races"
                label="Race/Faction"
                placeholder="Choose Race"
                onChange={handleRaceChange}
                value={raceId}
              />
              <Form.Field
                control={DbSelect}
                collectionName="factions"
                joinKey="raceId"
                joinValue={raceId}
                placeholder="Choose Faction"
                onChange={handleFactionChange}
                value={factionId}
                disabled={!raceId}
              />
            </Form.Group>
          </Grid.Column>

          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                control={DbSelect}
                collectionName="classes"
                label="Class/Subclass"
                placeholder="Choose Class"
                onChange={handleClassChange}
                value={classId}
              />
              <Form.Field
                control={DbSelect}
                collectionName="subclasses"
                joinKey="classId"
                joinValue={classId}
                placeholder="Choose Subclass"
                onChange={handleSubclassChange}
                value={subclassId}
                disabled={!classId}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Form.Group>
        <Form.Field
          width={6}
          control={DbSelect}
          collectionName="bonuses"
          joinKey="oneShot"
          joinValue={oneShot}
          label="Bonus Choice"
          placeholder="Choose Bonus"
          onChange={handleBonusChange}
          value={bonusId}
        />
      </Form.Group>
    </Form>
  );
}


CharacterEditGeneral.displayName = 'CharacterEditGeneral';

CharacterEditGeneral.propTypes = {
  className: PropTypes.string,
};

CharacterEditGeneral.defaultProps = {
};
