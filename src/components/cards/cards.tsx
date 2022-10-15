import React from 'react';
import { Box, HStack, Badge, Spacer, Flex, Pressable, Text, IPressableProps } from 'native-base';

interface BoxCardProps extends IPressableProps {
  title: string;
  description: string;
  readMore?: string;
  badge?: React.ReactNode;
  feedback?: string;
}

const BoxCard = (props: BoxCardProps) => {
  return (
    <Box alignItems="center" my={2}>
      <Pressable rounded="8" overflow="hidden" borderWidth="1" borderColor="orange.300" maxW="96" shadow="1" bg="gray.100" p="5" {...props}>
        <Box>
          <HStack alignItems="center">
            {props.badge && <Badge bg="orange.400" p={2} _text={{
              color: "white"
            }} variant="solid" rounded="4">
              {props.badge}
            </Badge>
            }
            <Spacer />
            {props.feedback &&
              <Text fontSize={10} color="coolGray.800">
                Ultimo item adicionado em: 12/09/2000
              </Text>
            }
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            {props.title}
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {props.description}
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              {props.readMore}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
  );
}

export { BoxCard };