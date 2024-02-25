import type { FC } from 'react';
import {
  Avatar,
  Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical, BsReply } from "react-icons/bs";
import S from './styles.module.css';

const PostCard: FC = () => (
  <Card maxW='md' className={S.root}>
  <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text >Creator, Chakra UI</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<AiOutlineHeart />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<ChatIcon />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BsReply />}>
      Share
    </Button>
  </CardFooter>
</Card>
);

export default PostCard;