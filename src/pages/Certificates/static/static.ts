import { Certificate } from '@models/models.ts';

import TechnologiesOfComputerAidedDesignCertificate from '@assets/certificates/TechnologiesOfComputerAidedDesignCertificate.pdf';
import DesigningHighLoadStorageSystemsCertificate from '@assets/certificates/DesigningHighLoadStorageSystemsCertificate.pdf';

export const certificates: Certificate[] = [
  {
    name: 'Technologies Of Computer Aided Design Certificate',
    certificatePdfLink: TechnologiesOfComputerAidedDesignCertificate,
  },
  {
    name: 'Designing High Load Storage Systems Certificate',
    certificatePdfLink: DesigningHighLoadStorageSystemsCertificate,
  },
];
