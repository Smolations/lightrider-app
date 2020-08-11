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
      languageCategory1Id,
      languageCategory2Id,
      languageCategory3Id,
      languageCategory4Id,
      language1Id,
      language2Id,
      language3Id,
      language4Id,
    },
  }, dispatch] = useGlobalStateValue();

  const twoBonusLanguages = (bonusId === 3);


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
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                label="First Language"
                control={DbSelect}
                collectionName="language_categories"
                placeholder="Choose Origin"
                onChange={(e, data) => handleLanguageCategoryChange(1, data)}
                value={languageCategory1Id}
              />
              <Form.Field
                control={DbSelect}
                collectionName="languages"
                joinKey="languageCategoryId"
                joinValue={languageCategory1Id}
                placeholder="Choose Language"
                onChange={(e, data) => handleLanguageChange(1, data)}
                value={language1Id}
                disabled={!languageCategory1Id}
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group grouped>
              <Form.Field
                label="Second Language"
                control={DbSelect}
                collectionName="language_categories"
                placeholder="Choose Origin"
                onChange={(e, data) => handleLanguageCategoryChange(2, data)}
                value={languageCategory2Id}
              />
              <Form.Field
                control={DbSelect}
                collectionName="languages"
                joinKey="languageCategoryId"
                joinValue={languageCategory2Id}
                placeholder="Choose Language"
                onChange={(e, data) => handleLanguageChange(2, data)}
                value={language2Id}
                disabled={!languageCategory2Id}
              />
            </Form.Group>
          </Grid.Column>
          {twoBonusLanguages && (
            <Grid.Column>
              <Form.Group grouped>
                <Form.Field
                  label="Third Language"
                  control={DbSelect}
                  collectionName="language_categories"
                  placeholder="Choose Origin"
                  onChange={(e, data) => handleLanguageCategoryChange(3, data)}
                  value={languageCategory3Id}
                />
                <Form.Field
                  control={DbSelect}
                  collectionName="languages"
                  joinKey="languageCategoryId"
                  joinValue={languageCategory3Id}
                  placeholder="Choose Language"
                  onChange={(e, data) => handleLanguageChange(3, data)}
                  value={language3Id}
                  disabled={!languageCategory3Id}
                />
              </Form.Group>
            </Grid.Column>
          )}
          {twoBonusLanguages && (
            <Grid.Column>
              <Form.Group grouped>
                <Form.Field
                  label="Fourth Language"
                  control={DbSelect}
                  collectionName="language_categories"
                  placeholder="Choose Origin"
                  onChange={(e, data) => handleLanguageCategoryChange(4, data)}
                  value={languageCategory4Id}
                />
                <Form.Field
                  control={DbSelect}
                  collectionName="languages"
                  joinKey="languageCategoryId"
                  joinValue={languageCategory4Id}
                  placeholder="Choose Language"
                  onChange={(e, data) => handleLanguageChange(4, data)}
                  value={language4Id}
                  disabled={!languageCategory4Id}
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
