import { useState, useMemo } from 'react';
import { capitalize, lowerCase } from 'lodash-es';
import {
  IDLE,
  defaultApiStatuses,
  apiStatuses,
} from '@/api/constants/apiStatus';

const prepareStatuses = (currentStatus) => {
  const statuses = {};
  for (const status of defaultApiStatuses) {
    const normalisedStatus = capitalize(lowerCase(status));
    const normalisedStatusKey = `is${normalisedStatus}`;
    statuses[normalisedStatusKey] = status === currentStatus;
  }

  return statuses;
};

export const useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
