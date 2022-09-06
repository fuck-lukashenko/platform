import TelegramS3BasedAPIGateway from 'tg-s3-api-gateway-sdk';

const instance = new TelegramS3BasedAPIGateway({
  clientId: process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_CLIENT_ID,
  botTestMode: !!JSON.parse(process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_CLIENT_BOT_TEST_MODE),
  botToken: process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_CLIENT_BOT_TOKEN,
  channelId: process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_CLIENT_BOT_CHANNEL_ID,
  logger: console,
  serverPublicKeyJWK: JSON.parse(process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_SERVER_PUBLIC_KEY_JWK),
  serverVerificationKeyJWK: JSON.parse(process.env.REACT_APP_TELEGRAM_BASED_API_GATEWAY_SERVER_VERIFICATION_KEY_JWK),
});

export default instance;
