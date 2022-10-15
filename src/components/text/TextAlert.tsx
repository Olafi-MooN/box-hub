import { Box, Flex, ITextProps, Text, } from 'native-base';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';
import React from 'react';
import { TextProps } from 'react-native';
import tw from 'twrnc';

interface IBoxTextAlertProps extends ITextProps {
  children?: any;
  twStyle?: string;
  textProps?: TextProps;
  type: 'success' | 'error' | 'warning';
  alignItems?: 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' | 'self-start' | 'start';
}

const BoxTextAlert = (props: IBoxTextAlertProps) => (
  <Flex alignItems={props.alignItems ?? 'center'}>
    <Text
      color={
        props.type === 'success' ? 'green.400' : props.type === 'warning' ? 'yellow.400' : 'red.400'
      }
      {...props.textProps}
    >
      {props.children}
    </Text>
  </Flex>
);

export { BoxTextAlert };