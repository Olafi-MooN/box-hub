import React, { useState } from 'react';
import { Pressable, Text, TextProps, View, Image } from 'react-native';
import tw from 'twrnc';
import { BoxText } from '../text/text';

interface IDropdownListProps {
  text: string;
  value: string;
}

interface IBoxDropdownProps {
  children?: any;
  twStyle?: string;
  textProps?: TextProps;
  list: IDropdownListProps[];
  selectStyle?: string;
  placeholder?: string;
  label?: string;
}

const BoxDropdown = (props: IBoxDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<IDropdownListProps | null>(null);

  return (
    <View style={tw`flex-wrap w-full relative`}>
      <View style={tw`w-full px-3 mb-0 relative ${props?.twStyle as string}`}>
        <Text style={tw`tracking-wide text-gray-700 text-xs font-bold mb-2 text-lg`}>
          {props.label}
        </Text>
        <Pressable
          onPress={() => setOpen(prev => !prev)}
          style={tw`w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-4 px-4 mb-3 focus:outline-none focus:bg-white flex flex-row items-center justify-between relative ${props?.selectStyle!}`}
        >
          <BoxText twStyle='text-stone-900 w-3/4'>{value?.text ?? props.placeholder}</BoxText>
          <Image style={tw`w-3 h-3`} source={require('../../../assets/arrow.png')} />
        </Pressable>
        {open && <View style={tw`w-full h-auto bg-stone-300 flex flex-col absolute bottom-0 ml-3 rounded-4`}>
          {props.list.map((item, index) => (
            <Pressable style={tw`p-2`} key={index} onPress={() => {
              setOpen(false);
              setValue(item);
            }}>
              <BoxText twStyle={`text-stone-900`}>{item.text}</BoxText>
            </Pressable>
          ))}
        </View>}
      </View>
    </View>
  );
};

export { BoxDropdown };