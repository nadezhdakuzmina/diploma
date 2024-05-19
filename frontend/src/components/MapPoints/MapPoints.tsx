import * as React from 'react';
import { createPortal } from 'react-dom';
import { type Map as MBoxMap, Marker } from 'mapbox-gl';

import MapPoint from '@components/MapPoint';

export type PointData = {
  id: string;
  point: [number, number];
  image: string;
  name: string;
}

type MapPointsProps = {
  selectedPoint?: string;
  onSelect?: (id: string) => void;
  points: PointData[];
  map: MBoxMap;
};

type PointObject = {
  element: HTMLDivElement;
  pointProps: PointData;
  marker: Marker;
}

const MapPoints: React.FC<MapPointsProps> = (props) => {
  const [points, setPoints] = React.useState<PointObject[]>([]);

  React.useEffect(() => {
    const pointsList = props.points.map((pointProps) => {
      const element = document.createElement('div');
      const marker = new Marker(element);

      marker
        .setLngLat(pointProps.point)
        .addTo(props.map);
      
      return {
        element,
        pointProps,
        marker,
      };
    });

    setPoints(pointsList);

    return () => {
      pointsList.forEach(({ marker }) => {
        marker.remove();
      });
    };
  }, [props.points]);

  return (
    <>
      {points.map(({ element, pointProps }) => createPortal((
        <MapPoint
          image={pointProps.image}
          name={pointProps.name}
          onClick={() => props.onSelect?.(pointProps.id)}
          selected={pointProps.id === props.selectedPoint}
        />
      ), element))}
    </>
  );
};

export default MapPoints;
