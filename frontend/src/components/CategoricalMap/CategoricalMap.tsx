import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlacesMap from '@components/PlacesMap';
import CategoryCard from '@components/CategoryCard';
import PointModal from '@components/PointModal';

import { selectCurrentPointCategory, selectPoints } from '@data/selectors/points';
import { loadCurrentPointThunk, loadPointsThunk } from '@data/thunk/points';
import { unsetCurrentPointAction } from '@data/actions/points';
import { selectCurrentCity } from '@data/selectors/cities';

import { CATEGORIES, DEFAULT_ZOOM } from './constants';

import S from './styles.scss';

import type { PointCategory } from '@types';

const CategoricalMap: React.FC = () => {
  const currentCity = useSelector(selectCurrentCity);
  const activeCategory = useSelector(selectCurrentPointCategory);
  const points = useSelector(selectPoints);

  const dispatch = useDispatch();

  const [activePoint, setActivePoint] = React.useState<number>(null);

  const handleOnSelect = React.useCallback((id: number) => {
    setActivePoint(id);
    dispatch(loadCurrentPointThunk(id));
  }, []);

  const handleChangeCategory = React.useCallback((category: PointCategory) => {
    dispatch(loadPointsThunk(category));
    setActivePoint(null);
  }, []);

  const handleModalClose = React.useCallback(() => {
    setActivePoint(null);
    dispatch(unsetCurrentPointAction());
  }, []);

  return (
    <div className={S.root}>
      <div className={S.categories}>
        {CATEGORIES.map((item) => (
          <CategoryCard
            key={item.id}
            active={activeCategory === item.id}
            className={S.categoriesItem}
            onClick={() => handleChangeCategory(item.id)}
            {...item}
          />
        ))}
      </div>
      {currentCity && (
        <PlacesMap
          className={S.map}
          zoom={DEFAULT_ZOOM}
          centerPoint={[
            currentCity?.lng || 0,
            currentCity?.lat || 0,
          ]}
          points={points}
          onSelect={handleOnSelect}
          selectedPoint={activePoint}
        />
      )}
      {activePoint && (
        <PointModal
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default CategoricalMap;
