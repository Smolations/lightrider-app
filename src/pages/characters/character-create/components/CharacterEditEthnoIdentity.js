import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Form,
  Grid,
} from 'semantic-ui-react';

import { DbSelect } from '../../../../components/DbSelect';

import { lokiCollections } from '../../../../db';

import { useGlobalStateValue } from '../../../../state-management';
import { globalNewCharacterActions } from '../../../../state-management/new-character';

// import './CharacterEditEthnoIdentity.scss';


const {
  updateNewCharacterReligionId,
  updateNewCharacterLanguageCategoryId,
  updateNewCharacterLanguageId,
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

  function handleLanguage1CategoryChange(e, { value: newLanguageCategory1Id }) {
    dispatch(updateNewCharacterLanguageCategoryId(1, newLanguageCategory1Id));
  }

  function handleLanguage2CategoryChange(e, { value: newLanguageCategory2Id }) {
    dispatch(updateNewCharacterLanguageCategoryId(2, newLanguageCategory2Id));
  }

  function handleLanguage3CategoryChange(e, { value: newLanguageCategory3Id }) {
    dispatch(updateNewCharacterLanguageCategoryId(3, newLanguageCategory3Id));
  }

  function handleLanguage4CategoryChange(e, { value: newLanguageCategory4Id }) {
    dispatch(updateNewCharacterLanguageCategoryId(4, newLanguageCategory4Id));
  }

  function handleLanguage1Change(e, { value: newLanguage1Id }) {
    dispatch(updateNewCharacterLanguageId(1, newLanguage1Id));
  }

  function handleLanguage2Change(e, { value: newLanguage2Id }) {
    dispatch(updateNewCharacterLanguageId(2, newLanguage2Id));
  }

  function handleLanguage3Change(e, { value: newLanguage3Id }) {
    dispatch(updateNewCharacterLanguageId(3, newLanguage3Id));
  }

  function handleLanguage4Change(e, { value: newLanguage4Id }) {
    dispatch(updateNewCharacterLanguageId(4, newLanguage4Id));
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
                onChange={handleLanguage1CategoryChange}
                value={languageCategory1Id}
              />
              <Form.Field
                control={DbSelect}
                collectionName="languages"
                joinKey="languageCategoryId"
                joinValue={languageCategory1Id}
                placeholder="Choose Language"
                onChange={handleLanguage1Change}
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
                onChange={handleLanguage2CategoryChange}
                value={languageCategory2Id}
              />
              <Form.Field
                control={DbSelect}
                collectionName="languages"
                joinKey="languageCategoryId"
                joinValue={languageCategory2Id}
                placeholder="Choose Language"
                onChange={handleLanguage2Change}
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
                  onChange={handleLanguage3CategoryChange}
                  value={languageCategory3Id}
                />
                <Form.Field
                  control={DbSelect}
                  collectionName="languages"
                  joinKey="languageCategoryId"
                  joinValue={languageCategory3Id}
                  placeholder="Choose Language"
                  onChange={handleLanguage3Change}
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
                  onChange={handleLanguage4CategoryChange}
                  value={languageCategory4Id}
                />
                <Form.Field
                  control={DbSelect}
                  collectionName="languages"
                  joinKey="languageCategoryId"
                  joinValue={languageCategory4Id}
                  placeholder="Choose Language"
                  onChange={handleLanguage4Change}
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
