import type { FC } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChatIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from "react-icons/ai";

import S from './styles.module.css';

const Comment: FC = () => {
  const [isOpenedModel, setIsOpenedModel] = React.useState<boolean>(false);
  const onClick = React.useCallback(() => {
    setIsOpenedModel(true);
  }, []);
  const handleModalClose = React.useCallback(() => {
    setIsOpenedModel(false);
  }, []);
  return (
    <div className={S.root}>
      <div className={S.card} >
        <div className={S.header} >
          <div className={S.profile}>
            <div className={S.photo}>M</div>
            <div className={S.info}>
              <span className={S.title} >
                Marina
              </span>
              <div className={S.text} >
                <span>
                  Мне нравится этот пост!
                </span>
              </div>
              <span className={S.date} >
                Today
              </span>
            </div>
          </div>
        </div>
      </div>
  </div>
)};

export default Comment;