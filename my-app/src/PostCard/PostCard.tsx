import type { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical, BsReply } from "react-icons/bs";

import S from './styles.module.css';
import ContentWrapper from '../components/ContentWrapper';

const PostCard: FC = () => (
  <div className={S.root}>
    <div className={S.card} >
      <div className={S.header} >
        <div className={S.profile}>
          <div className={S.photo}>N</div>
          <div className={S.info}>
            <Text className={S.title} >
              Надежда
            </Text>
            <Text className={S.date} >
              Today
            </Text>
          </div>
        </div>
        <Link to="/" >
          <svg href='/' className={S.closeButton} viewBox="0 -0.5 25 25" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(90)" fill="#3333334d">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12C8.5 13.1046 7.60457 14 6.5 14C5.39543 14 4.5 13.1046 4.5 12C4.5 10.8954 5.39543 10 6.5 10C7.03043 10 7.53914 10.2107 7.91421 10.5858C8.28929 10.9609 8.5 11.4696 8.5 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 12C14.5 13.1046 13.6046 14 12.5 14C11.3954 14 10.5 13.1046 10.5 12C10.5 10.8954 11.3954 10 12.5 10C13.6046 10 14.5 10.8954 14.5 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 13.1046 19.6046 14 18.5 14C17.3954 14 16.5 13.1046 16.5 12C16.5 10.8954 17.3954 10 18.5 10C19.6046 10 20.5 10.8954 20.5 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
          </svg>
        </Link>
      </div>
      <div className={S.content} >
        <div className={S.text} >
          <Text>
            Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира
          </Text>
        </div>
        <div className={S.inputGroup}>
          <div className={S.button}>
          <svg className={S.commentButton} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4997 18.9911L9.5767 15.9911L6.6767 12.9911C5.10777 11.3331 5.10777 8.73809 6.6767 7.08009C7.44494 6.34175 8.48548 5.95591 9.54937 6.01489C10.6133 6.07387 11.6048 6.57236 12.2867 7.39109L12.4997 7.60009L12.7107 7.38209C13.3926 6.56336 14.3841 6.06487 15.448 6.00589C16.5119 5.94691 17.5525 6.33275 18.3207 7.07109C19.8896 8.72909 19.8896 11.3241 18.3207 12.9821L15.4207 15.9821L12.4997 18.9911Z" stroke="#3333334d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            188
          </div>
          <div className={S.button}>
            <svg className={S.commentButton} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z" stroke="#3333334d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Comment
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;