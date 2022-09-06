import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { APIGateway } from 'api'; // FIXME: remove this line
import TelegramS3BasedAPIGateway from 'tg-s3-api-gateway-sdk'; // FIXME: remove this line
import App from './App';

// FIXME: It's just for your testing. Remove these lines:
window.APIGateway = APIGateway;
console.log('Your clientId allows you to use the https://baconipsum.com/api/* endpoints through the API Gateway.\nTry this out:\n%cawait APIGateway.get(\'?type=all-meat&sentences=1\')', 'background: lightpink; border-radius: 3px; padding: 3px 6px;');
console.log('You can also use your client ID:\n%cconst client = new TelegramS3BasedAPIGateway({\n  clientId: \'your-client-id\',\n  logger: console,\n});\n\nawait client.get(\'some-endpoint\')', 'background: lightpink; border-radius: 3px; padding: 3px 6px;');
window.TelegramS3BasedAPIGateway = TelegramS3BasedAPIGateway;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
