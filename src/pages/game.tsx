import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import OceanSelection from 'components/OceanSelection';
import TravelService from 'services/TravelService';
import OceanInfo from 'types/OceanInfo';

// 16이면 16강, 32면 32강 가능
const MAX_ITEM_COUNT = 16;

const GamePage = () => {
  const [round, setRound] = useState(1);
  const [count, setCount] = useState(1);
  const [currIndex, setCurrIndex] = useState(MAX_ITEM_COUNT - 2);
  const [oceanInfos, setOceanInfos] = useState<OceanInfo[]>([]);
  const [originInfos, setOriginInfos] = useState<OceanInfo[]>([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      // 초기 해수욕장 정보들을 불러와 MAX_ITEM_COUNT만큼 저장하는 부분
      const allInfos = await TravelService.getSomethingTravel();

      const infos = allInfos
        .sort(() => Math.random() - Math.random())
        .slice(0, MAX_ITEM_COUNT);

      setOceanInfos(infos);
      setOriginInfos(infos);
    })();
  }, []);

  const leftOcean = useMemo(() => oceanInfos[currIndex], [
    currIndex,
    oceanInfos,
  ]);
  const rightOcean = useMemo(() => oceanInfos[currIndex + 1], [
    currIndex,
    oceanInfos,
  ]);

  const handleSelect = useCallback(
    (isLeft: boolean) => {
      const startIndex = isLeft ? currIndex + 1 : currIndex;
      const newOceanInfos = [...oceanInfos];
      newOceanInfos.splice(startIndex, 1);

      if (newOceanInfos.length === 1) {
        // 최종 결과가 1개만 남은 경우
        history.push('/result', {
          ocean: newOceanInfos[0],
        });
      } else if (currIndex > 0) {
        // 현재 차수가 남아있는 경우
        setCurrIndex(currIndex - 2);
        setOceanInfos(newOceanInfos);
        setCount(count + 1);
      } else {
        // 차수에 더 이상 진행할 선택이 없는 경우 라운드를 추가하고 다시 돈다(16강 -> 8강)
        setRound(round + 1);
        setCurrIndex(newOceanInfos.length - 2);
        setOceanInfos(newOceanInfos.sort(() => Math.random() - Math.random()));
        setCount(1);
      }
    },
    [oceanInfos, currIndex, round, count, history],
  );

  if (!oceanInfos.length) {
    return <></>;
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <Logo>
          바다 이상형 월드컵 {round}라운드 {count}차
        </Logo>
      </Header>
      <Content style={{ display: 'flex' }}>
        <OceanSelection ocean={leftOcean} onClick={() => handleSelect(true)} />
        <OceanSelection
          ocean={rightOcean}
          onClick={() => handleSelect(false)}
        />
      </Content>
    </Layout>
  );
};

export default GamePage;

const Logo = styled.div`
  color: white;
`;
