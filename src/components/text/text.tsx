import { ITextProps, Text } from 'native-base';
import React from 'react';
import { StyleProp, TextProps } from 'react-native';
import tw from 'twrnc';

interface IBoxTextProps extends ITextProps {
  children?: any;
  twStyle?: string;
  textProps?: TextProps;
}

const BoxText = (props: IBoxTextProps) => (
  <Text style={tw`text-slate-50 ${props.twStyle as string}`} {...props.textProps}>
    {props.children}
  </Text>
);

export { BoxText };