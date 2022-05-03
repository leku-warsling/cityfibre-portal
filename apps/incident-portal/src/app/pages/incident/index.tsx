import { Page, Table } from '@ui';
import { useEffect, useState } from 'react';
import { INCIDENT_DATA, INCIDENT_COLUMNS } from './data';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const IncidentPage = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const actions = [
    <Button
      as={Link}
      leftIcon={<AddIcon fontSize="12px" />}
      alignItems="center"
      to="/incidents/create"
    >
      <span>Raise an incident</span>
    </Button>,
  ];

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={[6, 6, 8]} actions={actions}>
        Incidents
      </Page.Header>
      <Table
        data={INCIDENT_DATA}
        columns={INCIDENT_COLUMNS}
        isLoading={isLoading}
        bgColor="white"
        rounded={5}
        boxShadow="base"
        maxH="80vh"
        overflowY="auto"
        pt={3}
        size="md"
      />
    </Page>
  );
};

export default IncidentPage;
