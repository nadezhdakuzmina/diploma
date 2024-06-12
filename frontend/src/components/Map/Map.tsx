import * as React from 'react';
import cn from 'classnames';

import MboxGL, { Map as MBoxMap } from 'mapbox-gl';

import S from './styles.scss';

import 'mapbox-gl/dist/mapbox-gl.css';

type MapProps = {
  centerPoint: Point;
  className?: string;
  zoom?: number;
  children?: (map: MBoxMap) => React.ReactNode;
};

export const DEFAULT_ZOOM = 9;

export type Point = [number, number];

MboxGL.accessToken = 'pk.eyJ1IjoiamVsbHliMHkiLCJhIjoiY2x2N3lkZWxhMDNpbjJrcDg3eW55MXR6YyJ9.rdtAkdaBFwsK4r5vtOu6Rw';

const Map: React.FC<MapProps> = (props) => {
  const [map, setMap] = React.useState<MBoxMap | null>(null);
  const [containerElement, setContainerRef] = React.useState<HTMLDivElement | null>(null);

  const zoomPlus = React.useCallback(() => {
    if (!map) {
      return;
    }

    const zoom = map.getZoom();
    map.zoomTo(zoom + 1);
  }, [map]);

  const zoomMinus = React.useCallback(() => {
    if (!map) {
      return;
    }

    const zoom = map.getZoom();
    map.zoomTo(zoom - 1);
  }, [map]);

  React.useEffect(() => {
    if (map || !containerElement) {
      return;
    }

    setMap(
      new MBoxMap({
        container: containerElement,
        style: /* 'mapbox://styles/mapbox/light-v11', */ 'mapbox://styles/mapbox/basic-v9',
        center: props.centerPoint,
        zoom: props.zoom || DEFAULT_ZOOM,
        attributionControl: false,
      })
    );
  }, [containerElement, props.centerPoint]);

  return (
    <div
      className={cn(S.root, props.className)}
      ref={setContainerRef}
    >
      <div className={S.zoomControlWrapper}>
        <div className={S.zoomControlContainer}>
          <div className={S.zoomControlCapsul}>
            <div onClick={zoomPlus} className={S.zoomControlButton}>
              {/** TODO: выделить в иконки */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2C7.44773 2 7.00003 2.4477 7.00003 2.99997V6.99992H2.99997C2.4477 6.99992 2 7.44762 2 7.99989C2 8.55216 2.4477 8.99986 2.99997 8.99986H7.00003V12.9999C7.00003 13.5522 7.44773 13.9999 8 13.9999C8.55227 13.9999 8.99997 13.5522 8.99997 12.9999V8.99986H12.9999C13.5522 8.99986 13.9999 8.55216 13.9999 7.99989C13.9999 7.44762 13.5522 6.99992 12.9999 6.99992H8.99997V2.99997C8.99997 2.4477 8.55227 2 8 2Z" fill="inherit"/>
              </svg>
            </div>
            <div onClick={zoomMinus} className={S.zoomControlButton}>
              {/** TODO: выделить в иконки */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path clip-rule="evenodd" d="M12.9999 6.99981C13.5522 6.99981 13.9999 7.44751 13.9999 7.99978C13.9999 8.55205 13.5522 8.99975 12.9999 8.99975L2.99998 8.99975C2.44771 8.99975 2.00001 8.55205 2.00001 7.99978C2.00001 7.44751 2.44771 6.99981 2.99998 6.99981L12.9999 6.99981Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {map && props.children?.(map)}
    </div>
  );

};

export default Map;
