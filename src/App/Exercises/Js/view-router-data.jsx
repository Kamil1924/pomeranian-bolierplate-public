import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataUserList } from './Exercise-user-list/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './Exercise-HitTheMole/router-data';
import { blockRouterMetaData as blockRouterMetaDataAsyncAwait } from './Exercise-AsyncAwaitMeAndYou/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataUserList,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataHitTheMole,
  blockRouterMetaDataAsyncAwait,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
