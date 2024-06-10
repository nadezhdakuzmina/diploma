import * as React from 'react';
import { useSelector } from 'react-redux';

import MapPoints, { type PointData } from '@components/MapPoints';
import Button from '@components/Button';
import AddPointDialog from '@components/AddPointDialog';
import Map, { type Point } from '@components/Map';

import LogoIcon from '@components/Logo/logo_white.svg';

import { selectUserData } from '@data/selectors/user';

import S from './styles.scss';

type PlacesMapProps = {
  centerPoint: Point;
  className?: string;
  zoom?: number;
  onSelect?: (id: string) => void;
  selectedPoint?: string; 
  points?: PointData[];
};

export const DEFAULT_ZOOM = 9;

const PlacesMap: React.FC<PlacesMapProps> = (props) => {
  const [isAddPointDialogShown, setAddPointDialogShown] = React.useState(false);

  const userData = useSelector(selectUserData);

  const handleAddPointButtonClick = React.useCallback(() => {
    setAddPointDialogShown(true);
  }, []);

  const handleAddPointDialogClose = React.useCallback(() => {
    setAddPointDialogShown(false);
  }, []);

  return (
    <Map
      centerPoint={props.centerPoint}
      className={props.className}
      zoom={props.zoom}
    >
      {(map) => (
        <>
          <MapPoints
            selectedPoint={props.selectedPoint}
            onSelect={props.onSelect}
            points={props.points || []}
            map={map}
          />
          {userData && (
            <Button onClick={handleAddPointButtonClick} className={S.addButton}>
              <LogoIcon className={S.addButtonIcon} />
              Добавить место
            </Button>
          )}
          {isAddPointDialogShown && (
            <AddPointDialog
              centerPoint={props.centerPoint}
              onClose={handleAddPointDialogClose}
            />
          )}
        </>
      )}
    </Map>
  );
};

export default PlacesMap;
