import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Form,
  Grid,
  Header,
} from 'semantic-ui-react';

import { lokiCollections } from '../../../../db';

// import './CharacterEditAttributes.scss';


/**
 *
 */
export default function CharacterEditAttributes(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharacterEditAttributes', className);

  const [attrs, setAttrs] = useState([]);
  const [attrValues, setAttrValues] = useState({});
  const [subattrValues, setSubattrValues] = useState({});
  console.log('[CharacterEditAttributes] attrs: %o', attrs);
  console.log('[CharacterEditAttributes] attrValues: %o', attrValues);
  console.log('[CharacterEditAttributes] subattrValues: %o', subattrValues);


  function handleAttrChange(attrId, value) {
    setAttrValues({ ...attrValues, [attrId]: value });
    // onChange({ playerName });
  }

  function handleSubattrChange(subattrId, value) {
    setSubattrValues({ ...subattrValues, [subattrId]: value });
    // onChange({ playerName });
  }


  useEffect(() => {
    const attributes = lokiCollections.ATTRIBUTES.find().map(attribute => ({
      ...attribute,
      subattributes: lokiCollections.SUBATTRIBUTES.find({ attributeId: attribute.id }),
    }));
    const attributeValues = {};
    const subattributeValues = {};

    attributes.forEach((attr) => {
      attributeValues[attr.id] = 5;

      attr.subattributes.forEach((subattr) => {
        subattributeValues[subattr.id] = 0;
      });
    });

    setAttrs(attributes);
    setAttrValues(attributeValues);
    setSubattrValues(subattributeValues);
  }, []);

                // <Form.Button icon="minus" onClick={() => changeAttrValue(attr.id, -1)} />
                // <Form.Button icon="plus" onClick={() => changeAttrValue(attr.id, 1)} />

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
                  value={attrValues[attr.id]}
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
                    value={subattrValues[subattr.id]}
                    onChange={(e, { value }) => handleSubattrChange(subattr.id, value)}
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
