import { useNavigation } from '@react-navigation/native';
import React from 'react';
import tw from 'twrnc';
import { View, Text, TextInput } from 'react-native';

interface BoxInputProps {
  label: string;
  textInputProps?: any
  twStyle?: string;
  inputStyle?: string;
}

const BoxInput = ({ label, textInputProps, twStyle, inputStyle }: BoxInputProps) => {
  return (
    <View style={tw`w-full md:w-1/2 px-3 md:mb-0 ${twStyle!}`}>
      <Text style={tw`text-gray-700 text-xs font-bold mb-2 text-lg`}>
        {label}
      </Text>
      <TextInput
        style={tw`w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white ${inputStyle!}`}
        placeholder="Jane"
        {...textInputProps} />
    </View>
  )
}

export { BoxInput };