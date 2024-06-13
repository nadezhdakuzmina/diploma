import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Images } from '@api';
import cn from 'classnames';

import Modal from '@components/Modal';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import TagInput from '@components/TagInput';
import FileInput from '@components/FileInput';
import Button from '@components/Button';

import { postServiceThunk } from '@data/thunk/services';
import { selectCurrentCity } from '@data/selectors/cities';
import { selectCurrentCountry } from '@data/selectors/countries';

import S from './styles.scss';

import { type Image } from '@types';

type AddServiceDialogProps = {
  onClose: () => void;
};

const AddServiceDialog: React.FC<AddServiceDialogProps> = (props) => {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const currentCity = useSelector(selectCurrentCity);

  const [tags, setTags] = React.useState<string[]>([]);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [filename, setFilename] = React.useState<string>(null)
  const [image, setImage] = React.useState<Image>(null);

  const [nameError, setNameError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [uploadImageError, setImageError] = React.useState(false);
  const [isFileLoading, setFileLoading] = React.useState(false);

  const handleTagsChange = React.useCallback((tags: string[]) => {
    setTags(tags);
  }, []);

  const handleNameChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    const { value } = event.target;
    setName(value);
    setNameError(false);
  }, []);

  const handleDescriptionChange = React.useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>((event) => {
    const { value } = event.target;
    setDescription(value);
    setDescriptionError(false);
  }, []);

  const handleFileSelect = React.useCallback((file: File) => {
    setFilename(file.name);
    setImageError(false);
    setFileLoading(true);

    Images
      .uploadImage(file)
      .then((image) => setImage(image))
      .catch(() => setImageError(true))
      .finally(() => {
        setFileLoading(false);
      });
  }, []);

  const isValid = React.useCallback((): boolean => {
    let isValid = true;

    if (!name) {
      setNameError(true);
      isValid = false;
    }

    if (!description) {
      setDescriptionError(true);
      isValid = false;
    }

    if (!image) {
      setImageError(true);
      isValid = false;
    }

    return isValid;
  }, [name, description, image]);

  const handleApply = React.useCallback(() => {
    if (!isValid()) {
      return;
    }

    dispatch(postServiceThunk(
      name,
      description,
      tags,
      image,
    ));
    props.onClose?.();
  }, [tags, name, description, image, isValid, props.onClose]);

  const locationName = React.useMemo(() => {
    if (!currentCountry && !currentCity) {
      return 'Весь мир';
    }

    return [
      currentCountry?.name,
      currentCity?.name,
    ]
      .filter(Boolean)
      .join(' / ');
  }, [currentCountry, currentCity]);

  return (
    <Modal onClose={props.onClose}>
      <Input
        value={name}
        onChange={handleNameChange}
        className={S.input}
        inputClassName={cn({ [S.errorInput]: nameError })}
        label="Название"
        placeholder="Место или заведение"
      />
      <Input
        className={S.input}
        label="Страна / Город"
        value={locationName}
        disabled
      />
      <TextArea
        textAreaValue={description}
        onChange={handleDescriptionChange}
        className={S.input}
        inputClassName={cn({ [S.errorInput]: descriptionError })}
        label="Описание"
      />
      <FileInput
        className={cn(S.input)}
        inputClassName={cn({
          [S.loadingFileInput]: isFileLoading,
          [S.errorInput]: uploadImageError
        })}
        label="Фотография"
        onFileSelect={handleFileSelect}
        filename={filename}
      />
      <TagInput
        className={S.input}
        label="Теги"
        onTagsChange={handleTagsChange}
        tags={tags}
      />
      <div className={S.buttonWrap}>
        <Button onClick={handleApply} className={S.applyButton}>
          Опубликовать
          <svg className={S.applyButtonIcon} viewBox="0 0 32 32">
            <path d="M29,2.9c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0  c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0  l-25,12C2.3,14.3,2,14.6,2,14.9s0.1,0.7,0.4,0.9l5.2,3.9l6.8-5.5c0.4-0.3,1.1-0.3,1.4,0.2c0.3,0.4,0.3,1.1-0.2,1.4L9,21.1V29  c0,0.4,0.3,0.8,0.7,0.9C9.8,30,9.9,30,10,30c0.3,0,0.6-0.1,0.8-0.4l3.7-4.8l3.9,2.9c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.3,0  c0.3-0.1,0.5-0.3,0.7-0.6l9-24C29,3.2,29,3.1,29,2.9C29,3,29,3,29,2.9z"/>
          </svg>
        </Button>
      </div>
    </Modal>
  );
};

export default AddServiceDialog;
