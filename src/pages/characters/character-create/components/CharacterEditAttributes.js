import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Form,
  Grid,
  Header,
  Statistic,
} from 'semantic-ui-react';

import { lokiCollections } from '../../../../db';

import { useGlobalStateValue } from '../../../../state-management';
import { newCharacterActions, useNewCharacterStateValue } from '../../../../state-management/new-character';


const {
  updateNewCharacterAttributes,
  updateNewCharacterSubattributes,
} = newCharacterActions;

// import './CharacterEditAttributes.scss';


/**
 *
 */
export default function CharacterEditAttributes(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterEditAttributes', className);

  const [{ appSettings }] = useGlobalStateValue();

  const [{
    attributes,
    subattributes,
  }, dispatch] = useNewCharacterStateValue();

  const [attrs, setAttrs] = useState([]);
  console.log('[CharacterEditAttributes] attrs: %o', attrs);
  console.log('[CharacterEditAttributes] attributes: %o', attributes);

  const {
    totalAttributePoints,
    perAttributeStartingPoints,
    maxAttributePoints,
    minAttributePoints,
    maxSubattributePoints,
    minSubattributePoints,
  } = appSettings.characterCreation;


  function getRemainingAttributePoints() {
    const attributesTotal = Object.values(attributes).reduce((sum, attrPoints) => sum + attrPoints, 0);
    return totalAttributePoints - attributesTotal;
  }

  function getRemainingSubattributePoints(attributeId) {
    const attributesTotal = Object.values(attributes).reduce((sum, attrPoints) => sum + attrPoints, 0);
    return totalAttributePoints - attributesTotal;
  }


  function handleAttrChange(attrId, value) {
    const attrValue = Number(value);
    const neutralOffset = attrValue - perAttributeStartingPoints;
    const wentDownToNeutral = neutralOffset === 0 && attributes[attrId] > perAttributeStartingPoints;

    if (neutralOffset <= 0 && !wentDownToNeutral) {
      const attribute = attrs.find((attr) => attr.id === attrId);
      const subattrValues = attribute.subattributes.reduce((result, subattr) => {
        return { ...result, [subattr.id]: neutralOffset };
      }, {});

      dispatch(updateNewCharacterSubattributes(subattrValues));
    }

    dispatch(updateNewCharacterAttributes({ [attrId]: attrValue }));
  }

  function handleSubattrChange(subattrId, value) {
    const subattrValue = Number(value);
    dispatch(updateNewCharacterSubattributes({ [subattrId]: subattrValue }));
  }


  useEffect(() => {
    const attrsAndSubattrs = lokiCollections.ATTRIBUTES.find().map(attribute => ({
      ...attribute,
      subattributes: lokiCollections.SUBATTRIBUTES.find({ attributeId: attribute.id }),
    }));
    const attributeValues = {};
    const subattributeValues = {};

    attrsAndSubattrs.forEach((attr) => {
      attributeValues[attr.id] = perAttributeStartingPoints;

      attr.subattributes.forEach((subattr) => {
        subattributeValues[subattr.id] = 0;
      });
    });

    setAttrs(attrsAndSubattrs);

    isEmpty(attributes) && dispatch(updateNewCharacterAttributes(attributeValues));
    isEmpty(subattributes) && dispatch(updateNewCharacterSubattributes(subattributeValues));
  }, [
    attributes,
    subattributes,
    perAttributeStartingPoints,
    dispatch,
  ]);


  return (
    <Form className={classes} size="huge">
      <Statistic>
        <Statistic.Label>Pts Remaining</Statistic.Label>
        <Statistic.Value>{getRemainingAttributePoints()}</Statistic.Value>
      </Statistic>

      <Grid>
        {attrs.map(attr => (
          <Grid.Row key={`.${attr.id}`} verticalAlign="middle">
            <Grid.Column width={3}>
              <Header as="h1">{attr.name}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Form.Group inline>
                <Form.Input
                  type="number"
                  min={minAttributePoints}
                  max={maxAttributePoints}
                  value={attributes[attr.id]}
                  onChange={(e, { value }) => handleAttrChange(attr.id, value)}
                  readOnly={getRemainingAttributePoints() === 0}
                />
              </Form.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <Form.Group widths="equal">
                {attr.subattributes.map(subattr => (
                  <Form.Input
                    key={`.${subattr.id}`}
                    label={subattr.name}
                    type="number"
                    min={minSubattributePoints}
                    max={maxSubattributePoints}
                    value={subattributes[subattr.id]}
                    onChange={(e, { value }) => handleSubattrChange(subattr.id, value)}
                    readOnly={subattributes[subattr.id] < minSubattributePoints}
                  />
                ))}
              </Form.Group>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Form>
  );
}


CharacterEditAttributes.displayName = 'CharacterEditAttributes';

CharacterEditAttributes.propTypes = {
  className: PropTypes.string,
};

CharacterEditAttributes.defaultProps = {
};
