import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Container,
  Form,
  Select,
} from 'semantic-ui-react';

import dbs from '../../../../db';

// import './CharacterCreateStep1.scss';


/**
 *
 */
export default function CharacterCreateStep1(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('CharacterCreateStep1', className);

  const [charRace, setCharRace] = useState(null);
  const [charFaction, setCharFaction] = useState(null);
  const [charClass, setCharClass] = useState(null);
  const [charSubclass, setCharSubclass] = useState(null);

  const [raceOptions, setRaceOptions] = useState([]);
  const [factionOptions, setFactionOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [subclassOptions, setSubclassOptions] = useState([]);

  // Race
  // Faction

  // Class
  // Subclass

  //             Kind  Language
  // Language 1  Other Visserian
  // Language 2  Circle  British
  // Language 3
  // Language 4

  // Religion

  // Bonus Choice  2 Languages


  function handleRaceChange(e, { value: race }) {
    const factions = dbs.FACTIONS({ raceId: race.id }).map(faction => ({
      key: `.${faction.id}`,
      text: faction.name,
      value: faction,
    }));

    setCharRace(race);
    setCharFaction(null);
    setFactionOptions(factions);
  }

  function handleFactionChange(e, { value: faction }) {
    setCharFaction(faction);
  }

  function handleClassChange(e, { value: klass }) {
    const subclasses = dbs.SUBCLASSES({ classId: klass.id }).map(subclass => ({
      key: `.${subclass.id}`,
      text: subclass.name,
      value: subclass,
    }));

    setCharClass(klass);
    setCharSubclass(null);
    setSubclassOptions(subclasses);
  }

  function handleSubclassChange(e, { value: subclass }) {
    setCharSubclass(subclass);
  }


  useEffect(() => {
    const races = dbs.RACES().map(race => ({
      key: `.${race.id}`,
      text: race.name,
      value: race,
    }));

    const classes = dbs.CLASSES().map(klass => ({
      key: `.${klass.id}`,
      text: klass.name,
      value: klass,
    }));

    setClassOptions(classes);
    setRaceOptions(races);
  }, []);


  return (
    <Container className={classes}>
      <Form.Field
        control={Checkbox}
        label={<label>One Shot?</label>}
        width={2}
      />

      <Form.Group>
        <Form.Input label="Player Name" placeholder="Player Name" width={5} />
        <Form.Input label="Character Name" placeholder="Character Name" width={5} />
      </Form.Group>

      <Form.Group>
        <Form.Field
          width={5}
          control={Select}
          label="Race"
          placeholder="Race"
          options={raceOptions}
          onChange={handleRaceChange}
        />
        <Form.Field
          width={5}
          control={Select}
          label="Faction"
          placeholder="Faction"
          options={factionOptions}
          onChange={handleFactionChange}
          disabled={!charRace}
        />
      </Form.Group>

      <Form.Group>
        <Form.Field
          width={5}
          control={Select}
          label="Class"
          placeholder="Class"
          options={classOptions}
          onChange={handleClassChange}
        />
        <Form.Field
          width={5}
          control={Select}
          label="Subclass"
          placeholder="Subclass"
          options={subclassOptions}
          onChange={handleSubclassChange}
          disabled={!charClass}
        />
      </Form.Group>
    </Container>
  );
}


CharacterCreateStep1.displayName = 'CharacterCreateStep1';

CharacterCreateStep1.propTypes = {
  className: PropTypes.string,
};

CharacterCreateStep1.defaultProps = {
};
