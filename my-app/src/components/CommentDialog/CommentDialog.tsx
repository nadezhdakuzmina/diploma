import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';
import Button from '../Button';
import TextArea from '../TextArea';

type CommentDialogProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  buttonText?: string;
};

const CommentDialog: React.FC<CommentDialogProps> = ({
  className,
  buttonText = 'Опубликовать',
  ...otherProps
}) => {
  return (
    <div className={cn(S.root, className)}>
      <TextArea {...otherProps} />
      <Button className={S.button}>
        {buttonText}
        <svg className={S.icon} viewBox="0 0 32 32">
          <path d="M29,2.9c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0  c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0  l-25,12C2.3,14.3,2,14.6,2,14.9s0.1,0.7,0.4,0.9l5.2,3.9l6.8-5.5c0.4-0.3,1.1-0.3,1.4,0.2c0.3,0.4,0.3,1.1-0.2,1.4L9,21.1V29  c0,0.4,0.3,0.8,0.7,0.9C9.8,30,9.9,30,10,30c0.3,0,0.6-0.1,0.8-0.4l3.7-4.8l3.9,2.9c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.3,0  c0.3-0.1,0.5-0.3,0.7-0.6l9-24C29,3.2,29,3.1,29,2.9C29,3,29,3,29,2.9z"/>
        </svg>
      </Button>
    </div>
  );
};

export default CommentDialog;
