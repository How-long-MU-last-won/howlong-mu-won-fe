import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
} from '@chakra-ui/react';
import { Field, Form, Formik, FieldProps } from 'formik';
import { Search2Icon } from '@chakra-ui/icons';
import { setSearchString, setDisplayPlayerSection } from '@/redux/slices/players/players.slice';

import { useAppDispatch } from '@hooks';
import { useGetPlayersQuery } from '@/redux/slices/api/api.slice';
/* eslint-disable-next-line */
export interface PlayerSeachProps {}

export function PlayerSeach(props: PlayerSeachProps) {
  const dispatch = useAppDispatch();
  const { isLoading } = useGetPlayersQuery({});
  return (
    <Box
      pos={'fixed'}
      zIndex={500}
      top={'3.75rem'}
      w={'100vw'}
      right={0}
      h={'3.75rem'}
      background={'white'}
    >
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) => {
          dispatch(setSearchString(values.name));
          dispatch(setDisplayPlayerSection({
            'GK': true,
            'DF': true,
            'MF': true,
            'FW': true,
          }))
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field }: FieldProps) => (
                <FormControl
                  pos={'fixed'}
                  left={'50%'}
                  transform={'translateX(-50%)'}
                  w={'80vw'}
                  h={'3.75rem'}
                >
                  <InputGroup
                    maxW={{
                      base: '60vw',
                      lg: '40vw',
                      xl: '20vw',
                    }}
                    pos={'fixed'}
                    zIndex={999}
                    top={'0.85rem'}
                  >
                    <InputLeftElement>
                      <Search2Icon />
                    </InputLeftElement>
                    <Input
                      {...field}
                      type="string"
                      variant="flushed"
                      placeholder="Search"
                      focusBorderColor={'bg.red'}
                      disabled={isLoading}
                    />
                  </InputGroup>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default PlayerSeach;
