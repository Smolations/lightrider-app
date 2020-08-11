import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Container,
  Form,
  Grid,
  Select,
} from 'semantic-ui-react';

import { DbSelect } from '../../../../components/DbSelect';

import { lokiCollections } from '../../../../db';

import { useGlobalStateValue } from '../../../../state-management';
import { globalNewCharacterActions } from '../../../../state-management/new-character';

// import './CharacterEditEthnoIdentity.scss';


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
export default function CharacterEditEthnoIdentity(props) {
  const {
    character,
    children,
    className,
    onChange,
  } = props;

  const classes = classNames('CharacterEditEthnoIdentity', className);

  const [charReligionId, setCharReligionId] = useState(character.religionId);

  const [charLanguageCategory1Id, setCharLanguageCategory1Id] = useState(character.languageCategory1Id);
  const [charLanguageCategory2Id, setCharLanguageCategory2Id] = useState(character.languageCategory2Id);
  const [charLanguageCategory3Id, setCharLanguageCategory3Id] = useState(character.languageCategory3Id);
  const [charLanguageCategory4Id, setCharLanguageCategory4Id] = useState(character.languageCategory4Id);
  const [charLanguage1Id, setCharLanguage1Id] = useState(character.language1Id);
  const [charLanguage2Id, setCharLanguage2Id] = useState(character.language2Id);
  const [charLanguage3Id, setCharLanguage3Id] = useState(character.language3Id);
  const [charLanguage4Id, setCharLanguage4Id] = useState(character.language4Id);

  const [religionOptions, setReligionOptions] = useState([]);
  const [languageCategoryOptions, setLanguageCategoryOptions] = useState([]);
  const [language1Options, setLanguage1Options] = useState([]);
  const [language2Options, setLanguage2Options] = useState([]);
  const [language3Options, setLanguage3Options] = useState([]);
  const [language4Options, setLanguage4Options] = useState([]);


  function getLanguageOptions(languageCategoryId) {
    const searchFilter = languageCategoryId ? { languageCategoryId } : undefined;

    return lokiCollections.LANGUAGES.find(searchFilter).map(language => ({
      key: `.${language.id}`,
      text: language.name,
      value: language.id,
    }));
  }


  function handleReligionChange(e, { value: religionId }) {
    onChange({ religionId });
  }

  function handleLanguage1CategoryChange(e, { value: languageCategory1Id }) {
    onChange({ languageCategory1Id });
  }

  function handleLanguage2CategoryChange(e, { value: languageCategory2Id }) {
    onChange({ languageCategory2Id });
  }

  function handleLanguage3CategoryChange(e, { value: languageCategory3Id }) {
    onChange({ languageCategory3Id });
  }

  function handleLanguage4CategoryChange(e, { value: languageCategory4Id }) {
    onChange({ languageCategory4Id });
  }

  function handleLanguage1Change(e, { value: language1Id }) {
    onChange({ language1Id });
  }

  function handleLanguage2Change(e, { value: language2Id }) {
    onChange({ language2Id });
  }

  function handleLanguage3Change(e, { value: language3Id }) {
    onChange({ language3Id });
  }

  function handleLanguage4Change(e, { value: language4Id }) {
    onChange({ language4Id });
  }


  useEffect(() => {
    const religions = lokiCollections.RELIGIONS.find().map(religion => ({
      key: `.${religion.id}`,
      text: religion.name,
      value: religion.id,
    }));

    const languageCategories = lokiCollections.LANGUAGE_CATEGORIES.find().map(languageCategory => ({
      key: `.${languageCategory.id}`,
      text: languageCategory.name,
      value: languageCategory.id,
    }));

    setReligionOptions(religions);
    setLanguageCategoryOptions(languageCategories);
    setLanguage1Options(getLanguageOptions(charLanguageCategory1Id));
    setLanguage2Options(getLanguageOptions(charLanguageCategory2Id));
    setLanguage3Options(getLanguageOptions(charLanguageCategory3Id));
    setLanguage4Options(getLanguageOptions(charLanguageCategory4Id));
  }, []);

  useEffect(() => {
    const {
      religionId,
      languageCategory1Id,
      languageCategory2Id,
      languageCategory3Id,
      languageCategory4Id,
      language1Id,
      language2Id,
      language3Id,
      language4Id,
    } = character;

    setCharReligionId(religionId);

    setCharLanguageCategory1Id(languageCategory1Id);
    setCharLanguageCategory2Id(languageCategory2Id);
    setCharLanguageCategory3Id(languageCategory3Id);
    setCharLanguageCategory4Id(languageCategory4Id);
    setCharLanguage1Id(language1Id);
    setCharLanguage2Id(language2Id);
    setCharLanguage3Id(language3Id);
    setCharLanguage4Id(language4Id);

    if (languageCategory1Id !== charLanguageCategory1Id) {
      setLanguage1Options(getLanguageOptions(languageCategory1Id));
    }

    if (languageCategory2Id !== charLanguageCategory2Id) {
      setLanguage2Options(getLanguageOptions(languageCategory2Id));
    }

    if (languageCategory3Id !== charLanguageCategory3Id) {
      setLanguage3Options(getLanguageOptions(languageCategory3Id));
    }

    if (languageCategory4Id !== charLanguageCategory4Id) {
      setLanguage4Options(getLanguageOptions(languageCategory4Id));
    }
  }, [character]);


  return (
    <Form className={classes}>
      <Form.Group>
        <Form.Field
          width={5}
          control={Select}
          label="Religion"
          placeholder="Religion"
          options={religionOptions}
          onChange={handleReligionChange}
          value={charReligionId}
        />
      </Form.Group>

      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                label="First Language"
                control={Select}
                placeholder="Choose Origin"
                options={languageCategoryOptions}
                onChange={handleLanguage1CategoryChange}
                value={charLanguageCategory1Id}
              />
              <Form.Field
                control={Select}
                placeholder="Choose Language"
                options={language1Options}
                onChange={handleLanguage1Change}
                value={charLanguage1Id}
                disabled={!charLanguageCategory1Id}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                label="Second Language"
                control={Select}
                placeholder="Choose Origin"
                options={languageCategoryOptions}
                onChange={handleLanguage2CategoryChange}
                value={charLanguageCategory2Id}
              />
              <Form.Field
                control={Select}
                placeholder="Choose Language"
                options={language2Options}
                onChange={handleLanguage2Change}
                value={charLanguage2Id}
                disabled={!charLanguageCategory2Id}
              />
            </Form.Group>
          </Grid.Column>
          {character.bonusId === 3 && (
            <Grid.Column>
              <Form.Group grouped>
                <Form.Field
                  label="Third Language"
                  control={Select}
                  placeholder="Choose Origin"
                  options={languageCategoryOptions}
                  onChange={handleLanguage3CategoryChange}
                  value={charLanguageCategory3Id}
                />
                <Form.Field
                  control={Select}
                  placeholder="Choose Language"
                  options={language3Options}
                  onChange={handleLanguage3Change}
                  value={charLanguage3Id}
                  disabled={!charLanguageCategory3Id}
                />
              </Form.Group>
            </Grid.Column>
          )}
          {character.bonusId === 3 && (
            <Grid.Column>
              <Form.Group grouped>
                <Form.Field
                  label="Fourth Language"
                  control={Select}
                  placeholder="Choose Origin"
                  options={languageCategoryOptions}
                  onChange={handleLanguage4CategoryChange}
                  value={charLanguageCategory4Id}
                />
                <Form.Field
                  control={Select}
                  placeholder="Choose Language"
                  options={language4Options}
                  onChange={handleLanguage4Change}
                  value={charLanguage4Id}
                  disabled={!charLanguageCategory4Id}
                />
              </Form.Group>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>

    </Form>
  );
}


CharacterEditEthnoIdentity.displayName = 'CharacterEditEthnoIdentity';

CharacterEditEthnoIdentity.propTypes = {
  children: PropTypes.node,
};

CharacterEditEthnoIdentity.defaultProps = {
};
