import { Flex, VStack } from 'native-base';
import { BoxText } from '../text/text';
import Icon from '@expo/vector-icons/MaterialIcons';

type IColumnsType = {
  size: string;
  name: string;
}

interface IBoxTableProps {
  columns: IColumnsType[];
  body: any[];
  setClickEdit: any;
  setClickDelete: any;
}

const BoxTable = (props: IBoxTableProps) => {
  const { columns, body, setClickEdit, setClickDelete } = props;

  return (
    <>
      <Flex w='100%' h='4' paddingX={2}>
        <Flex w='98%' h='4' paddingX={2} rounded='sm' direction="row" shadow={.5}>
          {columns.map((item, key) => <BoxText key={key} twStyle='text-stone-900 text-xs' width={item.size}>{item.name}</BoxText>)}
        </Flex>

        <VStack width={'100%'} marginTop={'2'} space={1} alignItems='center'>
          {body.map((body, keyBody) => {
            return <>
              <Flex w='100%' h='6' paddingX={2} alignItems={'center'} rounded='sm' bg={keyBody % 2 ? 'white' : 'orange.300'} direction="row" shadow={.5}>
                {columns.map(((column, keyColumn) => <BoxText key={keyColumn} twStyle='text-stone-900 text-xs' width={column.size}>{body[column.name]}</BoxText>))}
                <Icon name={'edit'} size={16} color={'#3D8D33'} onPress={() => setClickEdit(body)}/>
                <BoxText width={'1%'}></BoxText>
                <Icon name={'delete'} size={16} color={'#AD1212'}  onPress={() => setClickDelete(body)}/>
              </Flex>
            </>
          })}

        </VStack>
      </Flex>
    </>
  )
}

export { BoxTable };
export type { IBoxTableProps };
