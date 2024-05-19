import * as React from 'react';
import { type Map as MBoxMap, Marker } from 'mapbox-gl';

import type { Point } from '@components/Map';

type DraggablePointProps = {
  defaultPoint: Point;
  map: MBoxMap;
  onMove?: (point: Point) => void;
};

const DraggablePoint: React.FC<DraggablePointProps> = (props) => {
  React.useEffect(() => {
    const marker = new Marker({
      draggable: true,
    });

    marker
      .setLngLat(props.defaultPoint)
      .addTo(props.map);

    const onDragEnd = () => {
      const { lng, lat } = marker.getLngLat();
      props.onMove?.([lng, lat]);
    };

    marker.on('dragend', onDragEnd);

    return () => {
      marker.off('dragend', onDragEnd);
      marker.remove();
    };
  }, [props.defaultPoint, props.map, props.onMove]);

  return null;
};

export default DraggablePoint;
