import classNames from 'classnames';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Container,
  Form,
  Grid,
  Select,
} from 'semantic-ui-react';

import dbs, { lokiCollections } from '../../../../db';

// import './CharacterEditGeneral.scss';


/**
 *
 */
export default function CharacterEditGeneral(props) {
  const {
    character,
    children,
    className,
    onChange,
  } = props;

  const classes = classNames('CharacterEditGeneral', className);

  const [charPlayerName, setCharPlayerName] = useState(character.playerName);
  const [charName, setCharName] = useState(character.name);

  const [charRaceId, setCharRaceId] = useState(character.raceId);
  const [charFactionId, setCharFactionId] = useState(character.factionId);

  const [charClassId, setCharClassId] = useState(character.classId);
  const [charSubclassId, setCharSubclassId] = useState(character.subclassId);

  const [charBonusId, setCharBonusId] = useState(character.bonusId);

  const [raceOptions, setRaceOptions] = useState([]);
  const [factionOptions, setFactionOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [subclassOptions, setSubclassOptions] = useState([]);
  const [bonusOptions, setBonusOptions] = useState([]);


  function getFactionOptions(raceId) {
    const searchFilter = raceId ? { raceId } : undefined;

    return lokiCollections.FACTIONS.find(searchFilter).map(faction => ({
      key: `.${faction.id}`,
      text: faction.name,
      value: faction.id,
    }));
  }

  function getSubclassOptions(classId) {
    const searchFilter = classId ? { classId } : undefined;

    return lokiCollections.SUBCLASSES.find(searchFilter).map(subclass => ({
      key: `.${subclass.id}`,
      text: subclass.name,
      value: subclass.id,
    }));
  }

  function handlePlayerNameChange(e, { value: playerName }) {
    onChange({ playerName });
  }

  function handleCharacterNameChange(e, { value: name }) {
    onChange({ name });
  }

  function handleRaceChange(e, { value: raceId }) {
    onChange({ raceId, factionId: null });
  }

  function handleFactionChange(e, { value: factionId }) {
    onChange({ factionId });
  }

  function handleClassChange(e, { value: classId }) {
    onChange({ classId, subclassId: null });
  }

  function handleSubclassChange(e, { value: subclassId }) {
    onChange({ subclassId });
  }

  function handleBonusChange(e, { value: bonusId }) {
    onChange({ bonusId });
  }


  useEffect(() => {
    const races = lokiCollections.RACES.find().map(race => ({
      key: `.${race.id}`,
      text: race.name,
      value: race.id,
    }));

    const classes = lokiCollections.CLASSES.find().map(klass => ({
      key: `.${klass.id}`,
      text: klass.name,
      value: klass.id,
    }));

    const bonuses = lokiCollections.BONUSES.find({ oneShot: character.oneShot }).map(bonus => ({
      key: `.${bonus.id}`,
      text: bonus.name,
      value: bonus.id,
    }));

    setRaceOptions(races);
    setFactionOptions(getFactionOptions(charRaceId));

    setClassOptions(classes);
    setSubclassOptions(getSubclassOptions(charClassId));

    setBonusOptions(bonuses);
  }, []);

  useEffect(() => {
    const {
      playerName,
      name,
      raceId,
      factionId,
      classId,
      subclassId,
      bonusId,
    } = character;

    setCharPlayerName(playerName);
    setCharName(name);

    setCharRaceId(raceId);
    setCharClassId(classId);
    setCharBonusId(bonusId);

    if (raceId !== charRaceId) {
      setFactionOptions(getFactionOptions(raceId));
    }

    if (classId !== charClassId) {
      setSubclassOptions(getSubclassOptions(classId));
    }

    setCharSubclassId(subclassId);
    setCharFactionId(factionId);
  }, [character]);


  return (
    <Form className={classes}>
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Input
                label="Player Name"
                placeholder="Player Name"
                value={charPlayerName}
                onChange={debounce(handlePlayerNameChange)}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Input
                label="Character Name"
                placeholder="Character Name"
                value={charName}
                onChange={debounce(handleCharacterNameChange)}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                control={Select}
                label="Race/Faction"
                placeholder="Choose Race"
                options={raceOptions}
                onChange={handleRaceChange}
                value={charRaceId}
              />
              <Form.Field
                control={Select}
                placeholder="Choose Faction"
                options={factionOptions}
                onChange={handleFactionChange}
                value={charFactionId}
                disabled={!charRaceId}
              />
            </Form.Group>
          </Grid.Column>

          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                control={Select}
                label="Class/Subclass"
                placeholder="Choose Class"
                options={classOptions}
                onChange={handleClassChange}
                value={charClassId}
              />
              <Form.Field
                control={Select}
                placeholder="Choose Subclass"
                options={subclassOptions}
                onChange={handleSubclassChange}
                value={charSubclassId}
                disabled={!charClassId}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Form.Group>
        <Form.Field
          width={6}
          control={Select}
          label="Bonus Choice"
          placeholder="Choose Bonus"
          options={bonusOptions}
          onChange={handleBonusChange}
          value={charBonusId}
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
