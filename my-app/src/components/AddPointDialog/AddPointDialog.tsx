import * as React from 'react';

import Modal from '../Modal';
import Input from '../Input';
import TextArea from '../TextArea';
import TagInput from '../TagInput';
import Map, { type Point } from '../Map';
import FileInput from '../FileInput';
import Button from '../Button';
import DraggablePoint from '../DraggablePoint';

import S from './styles.module.css';

type AAddPointDialogProps = {
  centerPoint: Point;
  className?: string;
  zoom?: number;
  onClose: () => void;
};

const AddPointDialog: React.FC<AAddPointDialogProps> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Input className={S.input} label="Название" placeholder="Место или заведение" />
      <Input className={S.input} label="Страна / Город" value="Турция / Анталия" disabled />
      <TextArea className={S.input} label="Описание" />
      <FileInput className={S.input} label="Фотографии" multiple />
      <TagInput className={S.input} label="Теги" onTagsChange={console.log} />
      <div className={S.mapWrapper}>
        <label className={S.mapLabel}>
          Укажите место
        </label>
        <Map
          centerPoint={props.centerPoint}
          className={S.map}
        >
          {(map) => (
            <DraggablePoint
              map={map}
              defaultPoint={props.centerPoint}
              onMove={console.log}
            />
          )}
        </Map>
      </div>
      <div className={S.buttonWrap}>
        <Button className={S.applyButton}>
          Опубликовать
          <svg className={S.applyButtonIcon} viewBox="0 0 32 32">
            <path d="M29,2.9c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0  c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0  l-25,12C2.3,14.3,2,14.6,2,14.9s0.1,0.7,0.4,0.9l5.2,3.9l6.8-5.5c0.4-0.3,1.1-0.3,1.4,0.2c0.3,0.4,0.3,1.1-0.2,1.4L9,21.1V29  c0,0.4,0.3,0.8,0.7,0.9C9.8,30,9.9,30,10,30c0.3,0,0.6-0.1,0.8-0.4l3.7-4.8l3.9,2.9c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.3,0  c0.3-0.1,0.5-0.3,0.7-0.6l9-24C29,3.2,29,3.1,29,2.9C29,3,29,3,29,2.9z"/>
          </svg>
        </Button>
      </div>
    </Modal>
  );
};

export default AddPointDialog;
