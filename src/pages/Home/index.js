import React, { useEffect, useState } from 'react';
import { SentensesAPI } from 'api';
import { Sentenses } from 'components';

const HomePage = () => {
  const [sentenses, setSentenses] = useState([]);

  useEffect(() => {
    SentensesAPI.get().then(setSentenses)
  }, []);

  return (
    <>
      <Sentenses items={sentenses} />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>You can experiment with the API Gateway client through the Dev tools.</p>
        <p>There is a pre-initialized <code style={{ background: 'lightpink', borderRadius: '3px', padding: '3px 6px' }}>APIGateway</code> available at the console.</p>
      </div>
    </>
  )
}

export default HomePage;
