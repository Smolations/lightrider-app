import classNames from 'classnames';
import reduce from 'lodash/reduce';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Form,
  Grid,
} from 'semantic-ui-react';

import { DbSelect } from '../../../../components/DbSelect';

// import { useGlobalStateValue } from '../../../../state-management';
import { newCharacterActions, useNewCharacterStateValue } from '../../../../state-management/new-character';


const {
  updateNewCharacterReligionId,
  updateNewCharacterLanguageCategoryId,
  updateNewCharacterLanguageId,
} = newCharacterActions;


/**
 *
 */
export default function CharacterEditEthnoIdentity(props) {
  const { className } = props;

  const classes = classNames('CharacterEditEthnoIdentity', className);

  const [{
    bonusId,
    religionId,
    languages,
  }, dispatch] = useNewCharacterStateValue();

  const languageLabels = ['First Language', 'Second Language'];

  const usedLanguagesMap = reduce(languages, (result, languageSpec, languageIndex) => {
    const newResult = { ...result };

    newResult[languageSpec.languageCategoryId] = newResult[languageSpec.languageCategoryId] || [];

    if (languageSpec.languageId) {
      newResult[languageSpec.languageCategoryId].push(languageSpec.languageId);
    }

    return newResult;
  }, {});


  if (bonusId === 3) {
    languageLabels.push('Third Language', 'Fourth Language');
  }


  function handleReligionChange(e, { value: newReligionId }) {
    dispatch(updateNewCharacterReligionId(newReligionId));
  }

  function handleLanguageCategoryChange(languageIndex, { value: newLanguageCategoryId }) {
    dispatch(updateNewCharacterLanguageCategoryId(languageIndex, newLanguageCategoryId));
  }

  function handleLanguageChange(languageIndex, { value: newLanguageId }) {
    dispatch(updateNewCharacterLanguageId(languageIndex, newLanguageId));
  }


  return (
    <Form className={classes}>
      <Form.Group>
        <Form.Field
          width={5}
          control={DbSelect}
          collectionName="religions"
          label="Religion"
          placeholder="Religion"
          onChange={handleReligionChange}
          value={religionId}
        />
      </Form.Group>

      <Grid columns={4}>
        <Grid.Row>
          {languageLabels.map((label, ndx) => {
            const languageIndex = ndx + 1; // 0-based to 1-based
            const currentLanguageCategoryId = languages[languageIndex]?.languageCategoryId;
            const currentLanguageId = languages[languageIndex]?.languageId;

            return (
              <Grid.Column key={label}>
                <Form.Group grouped>
                  <Form.Field
                    label={label}
                    control={DbSelect}
                    collectionName="language_categories"
                    placeholder="Choose Origin"
                    onChange={(e, data) => handleLanguageCategoryChange(languageIndex, data)}
                    value={currentLanguageCategoryId}
                  />
                  <Form.Field
                    control={DbSelect}
                    collectionName="languages"
                    joinKey="languageCategoryId"
                    joinValue={currentLanguageCategoryId}
                    placeholder="Choose Language"
                    onChange={(e, data) => handleLanguageChange(languageIndex, data)}
                    value={currentLanguageId}
                    disabled={!currentLanguageCategoryId}
                    disabledFilter={language => !currentLanguageId && usedLanguagesMap[currentLanguageCategoryId]?.includes(language.id)}
                  />
                </Form.Group>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </Form>
  );
}


CharacterEditEthnoIdentity.displayName = 'CharacterEditEthnoIdentity';

CharacterEditEthnoIdentity.propTypes = {
  children: PropTypes.node,
};
