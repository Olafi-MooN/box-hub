import { Button } from 'native-base';
import { IButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
interface IBoxButtonProps extends IButtonProps{
  twStyle?: string;
  touchableOpacityProps?: TouchableOpacity;
  children?: React.ReactNode;
}

const BoxButton = (props: IBoxButtonProps) => {
  return (
    <Button variant={'solid'} bg={`orange.400`} {...props}> 
      {props.children}
    </Button>
  );
}

export { BoxButton };