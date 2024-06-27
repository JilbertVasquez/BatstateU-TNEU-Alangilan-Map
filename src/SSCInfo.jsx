import ssc_101accounting from './assets/SSCVideos/Floor1/ssc_101accounting.mp4';
import ssc_102budget from './assets/SSCVideos/Floor1/ssc_102budget.mp4';
import ssc_103cashier from './assets/SSCVideos/Floor1/ssc_103cashier.mp4';
import ssc_104commissiononauditoffice from './assets/SSCVideos/Floor1/ssc_104commissiononauditoffice.mp4';

import ssc_201recordoffice from './assets/SSCVideos/Floor2/ssc_201recordoffice.mp4';
import ssc_202testingadmissionoffice from './assets/SSCVideos/Floor2/ssc_202testingadmissionoffice.mp4';
import ssc_203registrarstoreroom from './assets/SSCVideos/Floor2/ssc_203registrarstoreroom.mp4';
import ssc_204officeoftheregistrar from './assets/SSCVideos/Floor2/ssc_204officeoftheregistrar.mp4';

import ssc_301admin from './assets/SSCVideos/Floor3/ssc_301admin.mp4';
import ssc_301deployment from './assets/SSCVideos/Floor3/ssc_301deployment.mp4';
import ssc_301humanresources from './assets/SSCVideos/Floor3/ssc_301humanresources.mp4';
import ssc_302internalauditservices from './assets/SSCVideos/Floor3/ssc_302internalauditservices.mp4';
import ssc_303axis from './assets/SSCVideos/Floor3/ssc_303axis.mp4';
import ssc_304isoqaoffice from './assets/SSCVideos/Floor3/ssc_304isoqaoffice.mp4';
import ssc_304recordmanagementoffice from './assets/SSCVideos/Floor3/ssc_304recordmanagementoffice.mp4';
import ssc_305officeofthechancellor from './assets/SSCVideos/Floor3/ssc_305officeofthechancellor.mp4';

export const floor1Rooms = [
    { name: 'Accounting',                       videoSrc: ssc_101accounting },
    { name: 'Budget Office',                    videoSrc: ssc_102budget },
    { name: 'Cashier',                          videoSrc: ssc_103cashier },
    { name: 'Commission on Audit Office',       videoSrc: ssc_104commissiononauditoffice }
];

export const floor2Rooms = [
    { name: 'Record Office',                    videoSrc: ssc_201recordoffice },
    { name: 'TAO',                              videoSrc: ssc_202testingadmissionoffice },
    { name: 'Registrar Office Storeroom',       videoSrc: ssc_203registrarstoreroom },
    { name: 'Office of the Registrar',          videoSrc: ssc_204officeoftheregistrar }
];

export const floor3Rooms = [
    { name: 'Office of the Chancellor for Administration and Finance',              videoSrc: ssc_301admin },
    { name: 'Office of the Vice Chancellor for Development and External Affairs',   videoSrc: ssc_301deployment },
    { name: 'Human Resource Management Office',                                     videoSrc: ssc_301humanresources },
    { name: 'Office of the Vice Chancellor',                                        videoSrc: ssc_302internalauditservices },
    { name: 'AXIS',                                                                 videoSrc: ssc_303axis },
    { name: 'ISO Office',                                                           videoSrc: ssc_304isoqaoffice },
    { name: 'Quality Assurance Management Office',                                  videoSrc: ssc_304recordmanagementoffice },
    { name: 'Record Management Office',                                             videoSrc: ssc_305officeofthechancellor }
];
