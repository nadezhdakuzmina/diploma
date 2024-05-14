import * as React from 'react';

import MapPoints, { type PointData } from '../MapPoints';
import Button from '../Button';
import AddPointDialog from '../AddPointDialog';
import Map, { type Point } from '../Map';

import S from './styles.module.css';

import 'mapbox-gl/dist/mapbox-gl.css';

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
          <Button onClick={handleAddPointButtonClick} className={S.addButton}>
            <svg className={S.addButtonIcon} viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            Добавить место
          </Button>
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
