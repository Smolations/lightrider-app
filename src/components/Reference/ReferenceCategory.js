import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, Table } from 'semantic-ui-react';

import './ReferenceCategory.scss';


/**
 *
 */
export default function ReferenceCategory(props) {
  const {
    className,
    categoryDb,
    subcategoryDb,
    joinKey,
  } = props;

  const classes = classNames('ReferenceCategory', {
  }, className);


  return (
    <section className={classes}>
      {categoryDb && categoryDb.find().map(category => (
        <article className="ReferenceCategory--category" key={`.${category.id}`}>
          <Header as="h2" className="ReferenceCategory--header">{category.name}</Header>
          {subcategoryDb && (
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {subcategoryDb.find({ [joinKey]: category.id }).map(subcategory => (
                  <Table.Row key={`.${subcategory.id}`}>
                    <Table.Cell>{subcategory.name}</Table.Cell>
                    <Table.Cell>{subcategory.description}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </article>
      ))}
    </section>
  );
}


ReferenceCategory.displayName = 'ReferenceCategory';

ReferenceCategory.propTypes = {
  className: PropTypes.string,
};

ReferenceCategory.defaultProps = {
};
