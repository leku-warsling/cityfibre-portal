// @ts-nocheck
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Spinner,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Form, FormItem, Page, Step, Steps } from '@ui';
import { propOr, startsWith, __ } from 'ramda';
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import BeatLoader from 'react-spinners/BeatLoader';

const steps = [
  {
    label: 'Service Details',
  },
  {
    label: 'Incident Details',
  },
  {
    label: 'Submit Incident',
  },
];

const SERVICE_REFS = {
  S12345: 'active',
  S75659: 'down',
  S143015: 'power',
};

const RaiseIncidentPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={[6, 6, 8]}>Raise An Incident</Page.Header>
      <Steps
        activeStep={0}
        orientation="horizontal"
        labelOrientation="vertical"
        maxWidth="960px"
        my={10}
        mx="auto"
      >
        {steps.map(({ label }, index) => (
          <Step key={label} label={label} />
        ))}
      </Steps>
      <Form
        onSubmit={() => alert('hello')}
        bg="white"
        shadow="lg"
        rounded={5}
        py={12}
        px={14}
      >
        <VStack w="100%" spacing={6} mb="6" alignItems="flex-start">
          <Heading fontSize="28px">Service Details</Heading>
          <Flex gap={36} w="100%">
            <VStack spacing={6} alignItems="flex-start">
              <Alert status="info" rounded={5} p={6} maxW="600px">
                <AlertIcon />
                <Box ml={1}>
                  <AlertTitle>Service status check</AlertTitle>
                  <AlertDescription>
                    We have a last known status check available for supported
                    products, please enter a valid CityFibre service reference
                    (S ref) to activate this
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf="flex-start"
                  position="absolute"
                  right={2}
                  top={2}
                />
              </Alert>
              <FormItem label="Service reference number" isRequired>
                <InputGroup
                  name="service_reference"
                  onKeyUp={(event, formContext: any) => {
                    const ref = event.target.value;

                    if (/^[sS]\d{5,6}$/.test(ref)) {
                      setLoading(true);
                      setTimeout(() => {
                        const state = propOr(
                          'unknown',
                          ref.toUpperCase(),
                          SERVICE_REFS
                        );
                        setStatus(state);
                        setLoading(false);
                        formContext.setValue('address', '72');
                        formContext.setValue('postcode', 'TF10 8PH');
                        formContext.setValue('county', 'Shropshire');
                        formContext.setValue('street', 'Meadow View Rd');
                        formContext.setValue('city', 'Telford');
                      }, 3000);
                      return;
                    } else {
                      setLoading(false);
                    }

                    const isValidRef = ['S', 'EN', 'ADSL'].some(
                      startsWith(__, ref.toUpperCase())
                    );

                    if (isValidRef && ref.length >= 6) {
                      setStatus('unsupported');
                    } else if (status !== null) {
                      setStatus(null);
                    }
                  }}
                >
                  <Input
                    placeholder="eg ADSL123456, EN33309876, S12345. You should be able to find this on your latest invoice"
                    maxW="600px"
                  />
                  <InputRightElement hidden={!isLoading}>
                    <BeatLoader size={4} color="gray" />
                  </InputRightElement>
                </InputGroup>
              </FormItem>
              {isLoading && (
                <Alert
                  rounded={5}
                  p={6}
                  justifyContent="space-between"
                  maxW="600px"
                >
                  <Box ml={1}>
                    <AlertTitle>Checking service status</AlertTitle>
                    <AlertDescription>
                      Please wait as this may take a minute
                    </AlertDescription>
                  </Box>
                  <Spinner />
                </Alert>
              )}
              {/* {status === 'active' && !isLoading && (
                <Alert status="success" rounded={5} p={6} maxW="600px">
                  <AlertIcon />
                  <Box ml={1}>
                    <AlertTitle>Status good</AlertTitle>
                    <AlertDescription>
                      Our last status check was that the line is up, please
                      check the service again before logging an incident
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'down' && !isLoading && (
                <Alert status="error" rounded={5} p={6} maxW="600px">
                  <AlertIcon />
                  <Box ml={1}>
                    <AlertTitle>Status down</AlertTitle>
                    <AlertDescription>
                      Our last status check was that the line is down
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'power' && !isLoading && (
                <Alert status="error" rounded={5} p={6} maxW="600px">
                  <AlertIcon />
                  <Box ml={1}>
                    <AlertTitle>Status power down</AlertTitle>
                    <AlertDescription>
                      Our last status check was that the line is powered down
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'unknown' && !isLoading && (
                <Alert status="warning" rounded={5} p={6} maxW="600px">
                  <AlertIcon />
                  <Box ml={1}>
                    <AlertTitle>Status unkown</AlertTitle>
                    <AlertDescription>
                      Service reference not found or reference type status check
                      not supported
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'unsupported' && !isLoading && (
                <Alert status="info" rounded={5} p={6} maxW="600px">
                  <AlertIcon />
                  <Box ml={1}>
                    <AlertTitle>Status check unsupported</AlertTitle>
                    <AlertDescription>
                      Service status check for this reference type is currently
                      unsupported at this time
                    </AlertDescription>
                  </Box>
                </Alert>
              )} */}
              <FormItem label="What type of service has been impacted?">
                <Select name="service_type" maxW="600px">
                  <option value="">Select service type</option>
                  <option>Broadband</option>
                  <option>Colocation</option>
                  <option>Dark fibre</option>
                  <option>Leased line on net</option>
                  <option>Leased line off net</option>
                  <option>EFM/GEA/EoFTTC</option>
                  <option>Telephony</option>
                  <option>FTTH residential</option>
                  <option>Firewall</option>
                  <option>FTTH business</option>
                  <option>LDN dark fibre</option>
                  <option>Duct/Sub duct</option>
                  <option>Other</option>
                </Select>
              </FormItem>
              <FormItem label="Severity">
                <Select name="service_type" maxW="600px">
                  <option value="">Select severity</option>
                  <option>Total loss of service</option>
                  <option>Degraded service</option>
                </Select>
              </FormItem>
            </VStack>
            <Box>
              {status === 'active' && !isLoading && (
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  minHeight="200px"
                  rounded={5}
                  p={10}
                  maxW="320px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Box ml={1}>
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Status: Line up
                    </AlertTitle>
                    <AlertDescription>
                      Our last status check was that the line is up, please
                      check service again before logging an incident
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'unsupported' && !isLoading && (
                <Alert
                  status="info"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  minHeight="200px"
                  rounded={5}
                  p={10}
                  maxW="320px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Box ml={1}>
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Status: Unsupported
                    </AlertTitle>
                    <AlertDescription>
                      Service status check for this reference type is currently
                      unsupported at this time
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'unknown' && !isLoading && (
                <Alert
                  status="warning"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  minHeight="200px"
                  rounded={5}
                  p={10}
                  maxW="320px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Box ml={1}>
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Status: Unknown
                    </AlertTitle>
                    <AlertDescription>
                      Service reference not found or reference type status check
                      not supported
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'down' && !isLoading && (
                <Alert
                  status="error"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  minHeight="200px"
                  rounded={5}
                  p={10}
                  maxW="320px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Box ml={1}>
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Status: Line down
                    </AlertTitle>
                    <AlertDescription>
                      we can see the line is down so please continue to raise an
                      incident and provide as much of the requested information
                      as possible
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {status === 'power' && !isLoading && (
                <Alert
                  status="error"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  minHeight="200px"
                  rounded={5}
                  p={10}
                  maxW="320px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Box ml={1}>
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Status: Powered Down
                    </AlertTitle>
                    <AlertDescription>
                      Please check the power to your device before logging an
                      incident
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
            </Box>
          </Flex>
          <Heading size="md" mb={4}>
            Contact Information
          </Heading>
          <SimpleGrid columns={2} spacing={6} w="100%">
            <FormItem label="Address Name / Number">
              <Input name="address" placeholder="Enter Address" maxW="600px" />
            </FormItem>
            <FormItem label="County">
              <Input name="county" placeholder="Enter County" maxW="600px" />
            </FormItem>
            <FormItem label="Street">
              <Input name="street" placeholder="Enter Street" maxW="600px" />
            </FormItem>
            <FormItem label="Postcode">
              <Input
                name="postcode"
                placeholder="Enter Postcode"
                maxW="600px"
              />
            </FormItem>
            <FormItem label="City">
              <Input name="city" placeholder="Enter City" maxW="600px" />
            </FormItem>
          </SimpleGrid>
          <FormItem label="Please tell us about your issue in a few key words">
            <Textarea name="incident_desc" />
          </FormItem>
          <FormItem>
            <Checkbox name="confirm" size="lg">
              <Text fontSize="16px" pl="2">
                I confirm I have completed the required triage as per the MSA
                and that I may be liable for any engineering costs that occur
                due to my non-compliance
              </Text>
            </Checkbox>
          </FormItem>
        </VStack>
        <Divider mb={4} />
        <ButtonGroup justifyContent="flex-end" width="100%">
          <Button rightIcon={<BiRightArrowAlt />} px={8}>
            Next
          </Button>
        </ButtonGroup>
      </Form>
    </Page>
  );
};

export default RaiseIncidentPage;
