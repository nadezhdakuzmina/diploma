import type { FC } from 'react';
import {
  Box, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Select,
} from '@chakra-ui/react';
import S from './styles.module.css';
import City from '../City/City';
import PostCard from '../PostCard/PostCard';
import Servises from '../Servises/Servises';

const Content: FC = () => (
    <Tabs align='center' variant='enclosed' marginTop="-122px" color="white">
      <Box bg='white' width="420px" height="60px" borderRadius="8px" marginBottom="20px">
        <Select placeholder='Страна' width="400px" paddingTop="10px"
          bg='#F0F2F3'
          borderColor='white'
          color="black"
        >
          <option value='option1'>Турция</option>
          <option value='option2'>Россия</option>
          <option value='option3'>Нидерланды</option>
        </Select>
      </Box>
      <TabList borderRadius="8px">
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} >City</Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} >Lifehacks</Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} >Servises</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <City />
        </TabPanel>
        <TabPanel color="black">
          <PostCard />
          <PostCard />
          <PostCard />
        </TabPanel>
        <TabPanel color="black">
          <Servises />
        </TabPanel>
      </TabPanels>
  </Tabs>
);

export default Content;