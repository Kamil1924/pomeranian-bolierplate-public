import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-xx/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseMultimedia } from './Exercise-multimedia/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
// import { blockRouterMetaData as blockRouterMetaDataExerciseImages } from './Exercise-images/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctions } from './Js-Functions/router-data';


export const blockRouterMetaData = [
    blockRouterMetaData121220231,
    CssAnimations,
    // blockRouterMetaDataExerciseImages,
    blockRouterMetaDataExerciseMultimedia,
    blockRouterMetaDataJsFunctions
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
