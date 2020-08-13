import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Form,
  Grid,
  Header,
} from 'semantic-ui-react';

import { lokiCollections } from '../../../../db';

import { useGlobalStateValue } from '../../../../state-management';
import { globalNewCharacterActions } from '../../../../state-management/new-character';


const {
  updateNewCharacterAttributes,
  updateNewCharacterSubattributes,
} = globalNewCharacterActions;

// import './CharacterEditAttributes.scss';


/**
 *
 */
export default function CharacterEditAttributes(props) {
  const {
    className,
  } = props;

  const attributeNeutralValue = 5;

  const classes = classNames('CharacterEditAttributes', className);

  const [{
    newCharacter,
    newCharacter: {
      attributes,
      subattributes,
    },
  }, dispatch] = useGlobalStateValue();
  console.log('[CharacterEditAttributes] newCharacter: %o', newCharacter);

  const [attrs, setAttrs] = useState([]);
  console.log('[CharacterEditAttributes] attrs: %o', attrs);


  function handleAttrChange(attrId, value) {
    const attrValue = Number(value);
    const neutralOffset = attrValue - attributeNeutralValue;
    const wentDownToNeutral = neutralOffset === 0 && attributes[attrId] > attributeNeutralValue;

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
      attributeValues[attr.id] = attributeNeutralValue;

      attr.subattributes.forEach((subattr) => {
        subattributeValues[subattr.id] = 0;
      });
    });

    setAttrs(attrsAndSubattrs);

    isEmpty(attributes) && dispatch(updateNewCharacterAttributes(attributeValues));
    isEmpty(subattributes) && dispatch(updateNewCharacterSubattributes(subattributeValues));
  }, [attributes, subattributes, dispatch]);


  return (
    <Form className={classes} size="huge">
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
                  min={3}
                  max={8}
                  value={attributes[attr.id]}
                  onChange={(e, { value }) => handleAttrChange(attr.id, value)}
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
                    min={0}
                    max={3}
                    value={subattributes[subattr.id]}
                    onChange={(e, { value }) => handleSubattrChange(subattr.id, value)}
                    readOnly={subattributes[subattr.id] < 0}
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
