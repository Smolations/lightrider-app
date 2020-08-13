import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Form,
  Grid,
} from 'semantic-ui-react';

import { DbSelect } from '../../../../components/DbSelect';

import { useGlobalStateValue } from '../../../../state-management';
import { globalNewCharacterActions } from '../../../../state-management/new-character';


const {
  updateNewCharacterReligionId,
  updateNewCharacterLanguageCategoryId,
  updateNewCharacterLanguageId,
} = globalNewCharacterActions;


/**
 *
 */
export default function CharacterEditEthnoIdentity(props) {
  const { className } = props;

  const classes = classNames('CharacterEditEthnoIdentity', className);

  const [{
    newCharacter: {
      bonusId,
      religionId,
      languages,
    },
  }, dispatch] = useGlobalStateValue();

  const languageLabels = ['First Language', 'Second Language'];


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

            return (
              <Grid.Column key={label}>
                <Form.Group grouped>
                  <Form.Field
                    label={label}
                    control={DbSelect}
                    collectionName="language_categories"
                    placeholder="Choose Origin"
                    onChange={(e, data) => handleLanguageCategoryChange(languageIndex, data)}
                    value={languages[languageIndex]?.languageCategoryId}
                  />
                  <Form.Field
                    control={DbSelect}
                    collectionName="languages"
                    joinKey="languageCategoryId"
                    joinValue={languages[languageIndex]?.languageCategoryId}
                    placeholder="Choose Language"
                    onChange={(e, data) => handleLanguageChange(languageIndex, data)}
                    value={languages[languageIndex]?.languageId}
                    disabled={!languages[languageIndex]?.languageCategoryId}
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

CharacterEditEthnoIdentity.defaultProps = {
};
