import React from 'react';
import { Centered, Sentense } from 'components';
import './sentenses.css';

const Sentenses = ({ items }) => (
  <div className="sentenses">
    {items.map(sentense => (
      <Sentense key={sentense.id} text={sentense} />
    ))}
    {!items.length && (
      <Centered>
        There's no any sentense yet
      </Centered>
    )}
  </div>
);

export default Sentenses;
