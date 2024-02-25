import type { FC } from 'react';
import {
  Box, Card, CardBody, CardFooter, Heading, Image, SimpleGrid,
} from '@chakra-ui/react';
import S from './styles.module.css';

const City: FC = () => (
  <Box className={S.root} >
    <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
      <Card>
        <CardBody>
          <Image
      src='https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg'
      borderRadius='lg' />
        </CardBody>
        <CardFooter>
          <Heading size='md'> Стамбул</Heading>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <Image
      src='https://sportishka.com/uploads/posts/2022-03/1647863636_15-sportishka-com-p-antaliya-port-kaleichi-turizm-krasivo-foto-19.jpg'
      borderRadius='lg' />
        </CardBody>
        <CardFooter>
          <Heading size='md'> Анталья</Heading>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <Image
      src='https://www.thesun.co.uk/wp-content/uploads/2022/07/NINTCHDBPICT000444079338.jpg'
      borderRadius='lg' />
        </CardBody>
        <CardFooter>
          <Heading size='md'> Бодрум</Heading>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <Image
      src='https://sportishka.com/uploads/posts/2022-03/1646306090_59-sportishka-com-p-shari-v-kappadokii-turizm-krasivo-foto-74.jpg'
      borderRadius='lg' />
        </CardBody>
        <CardFooter>
          <Heading size='md'> Кападокия</Heading>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <Image
      src='https://kartinki.pics/uploads/posts/2021-03/1616075515_44-p-ankara-krasivie-foto-48.jpg'
      borderRadius='lg' />
        </CardBody>
        <CardFooter>
          <Heading size='md'> Анкара</Heading>
        </CardFooter>
      </Card>
    </SimpleGrid>
  </Box>
);

export default City;