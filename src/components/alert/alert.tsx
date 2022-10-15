import { CloseIcon, HStack, IconButton, Stack, VStack, Alert, Text, Center, Box } from 'native-base';
import { IAlertProps } from 'native-base/lib/typescript/components/composites';
import React, { useContext, useEffect, useState } from 'react';

interface IStatusArrayProps {
  status: 'info' | 'warning' | 'success' | 'error' | (string & {})
  title: string;
}

interface IBoxAlertProps extends IAlertProps {
  data: IStatusArrayProps[];
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoxAlert = (props: IBoxAlertProps) => {
  const { data, setActive } = props;
  const [alertData, setAlertData] = useState<IStatusArrayProps[]>(data);

  return (
    <>
      <Stack space={3} w="100%" p={3} style={{ position: 'absolute', bottom: 0 }}>
        {alertData.map((status, key) => {
          return <Alert w="100%" status={status.status} key={key}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" variant={'left-accent'} />
                  <Text fontSize="md" color="coolGray.800">
                    {status.title}
                  </Text>
                </HStack>
                <IconButton variant="unstyled" _focus={{
                  borderWidth: 0
                }} icon={<CloseIcon size="3" />} _icon={{
                  color: "coolGray.600"
                }} onPress={() => { setActive(false) }} />
              </HStack>
            </VStack>
          </Alert>;
        })}
      </Stack>
    </>
  )
}

export { BoxAlert };