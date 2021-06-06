export interface XXX {
  xxx: string;
}

export const GLOBAL_LOGGER = 'GLOBAL';

// Contentful Defaults.
export const CONTENTFUL_DEFAULT_LOCALE = 'en-US';
export const CONTENTFUL_DEFAULT_SKIP = 100;
export const MAX_CMS_REQUEST_ATTEMPTS = 10;
export const CONTENTFUL_DEFAULT_ALIAS = 'master';
export const CONTENTFUL_ACCESS_TOKEN_NAME = 'Access Token';

// export const CONTENTFUL_DEFAULT_VERSION = '0.1.0';

// Contentful Access Token Name.

// List of paths. They are required for CmsBoilerplater, CmsExporter, CmsCloner, CmsImporter, CmsMigrator and RestTester
export const CMS_MIGRATOR_FILES_PATH = 'apps/migrations';
export const CMS_BOILERPLATER_FILES_PATH = './apps/data/cms-boilerplater';
export const CMS_BRANDS_FILES_PATH = './apps/data/brands';
export const CMS_SPACE_DATA_FILES_PATH = './apps/data/space-data';

// Urls Protocols
export const HTTP = 'http://';
export const HTTPS = 'https://';

// HTTP status
export const HTTP_OK = 200;

// Contentful Hosts
export const CMS_DELIVERY_HOST = 'cdn.contentful.com';
export const CMS_PREVIEW_HOST = 'preview.contentful.com';
export const CMS_MANAGEMENT_HOST = 'api.contentful.com';
export const CMS_IMAGES_HOST = 'images.ctfassets.net';

// Contentful Urls
export const CMS_DELIVERY_URL = `${HTTPS}${CMS_DELIVERY_HOST}`;
export const CMS_PREVIEW_URL = `${HTTPS}${CMS_PREVIEW_HOST}`;
export const CMS_MANAGEMENT_URL = `${HTTPS}${CMS_MANAGEMENT_HOST}`;
export const CMS_IMAGES_URL = `${HTTPS}${CMS_IMAGES_HOST}`;

// Jasmine default timeout
export const JASMINE_TIMEOUT_INTERVAL = 120000;

// Player Status Timeout
export const GET_PLAYER_STATUS_TIMEOUT = 30000;
export const GET_PLAYER_STATUS_TIMEOUT_WITH_OPENED_GAME = 5000;

// Check app updates Timeout
// export const CHECK_APP_UPDATES_TIMEOUT = 30000;
export const CHECK_APP_MAINTENANCE_STATUS = 60 * 1000;

// REST-Tester Contentful Space Name
export const REST_TESTER_SPACE_NAME = 'REST-Tester Space';

// Deposit
// export const SHOW_DEPOSIT_OFFERS_COUNT = 3;

// Withdrawal
export const SERVER_UTC_OFFSET = '00:00';

// Angular pipes
// export const PIPE_DEFAULT_LOCALE = 'en-US';
export const DATE_PIPE_DEFAULT_FORMAT = 'dd/MM/y HH:mm';

// SP values
export const NO_LIMIT_VALUE = 'no_limit';
export const OUT_REWARDS_PROGRAM_VALUE = 998;

// Static resounces filename revving (for cache busting)
// # nginx configuration should have the rule
// location / {
//   if (!-e $request_filename){
//     rewrite (.+)\.([a-z|\d|\-|_]+)\.(bmp|gif|ico|jpe?g|png)$ $1.$3 break;
//   }
// }

// Query Params
export const BTAG_QUERY_PARAM = 'btag';
export const MTAG_QUERY_PARAM = 'mtag';
export const BONUS_CODE_QUERY_PARAM = 'bonuscode';
export const IS_PREVIEW_QUERY_PARAM = 'isPreview';
