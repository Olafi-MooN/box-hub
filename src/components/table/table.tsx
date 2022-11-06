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
      {!body[0] ?
        <BoxText twStyle='text-stone-900 text-xs' marginTop={'5'}> Nenhum dado foi encontrado</BoxText>
        :
        <Flex w='100%' h='4' paddingX={2}>
          <Flex w='98%' h='4' paddingX={2} rounded='sm' direction="row" shadow={.5}>
            {columns.map((item, key) => <BoxText key={key} twStyle='text-stone-900 text-xs capitalize' width={item.size}>{item.name}</BoxText>)}
          </Flex>
          <VStack width={'100%'} marginTop={'2'} space={1} alignItems='center'>
            {body.map((body, keyBody) => {
              return <Flex direction='row' key={keyBody}>
                <Flex w='100%' h='16' paddingX={2} alignItems={'center'} rounded='sm' bg={keyBody % 2 ? 'white' : 'orange.300'} direction="row" shadow={.5}>
                  {columns.map(((column, keyColumn) => <BoxText key={keyColumn} twStyle='text-stone-900' fontSize={'lg'} width={column.size}>{body[column.name]}</BoxText>))}
                  <Icon name={'edit'} size={25} color={'#3D8D33'} onPress={() => setClickEdit(body)} />
                  <BoxText width={'1%'}></BoxText>
                  <Icon name={'delete'} size={25} color={'#AD1212'} onPress={() => setClickDelete(body)} />
                </Flex>
              </Flex>
            })}
          </VStack>
        </Flex>
      }
    </>
  )
}

export { BoxTable };
export type { IBoxTableProps };
