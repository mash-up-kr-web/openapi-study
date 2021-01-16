import React, {Component} from 'react';
import styled from 'styled-components';

import DetailType from '../constants/DetailType';

interface ResultProps {
    couse: DetailType;
}

class Result extends Component<ResultProps> {
    render() {
        const {subdetailalt, subdetailimg, subdetailoverview, subname} = this.props.couse;
        
        return (
            <ResultWrapper>
                <Title>{subdetailalt}</Title>
                <ContentWrapper>
                    <Img src={subdetailimg} alt="" />
                    <SubWrapper>
                        <SubName>{subname}</SubName>
                        <ContText>{subdetailoverview}</ContText>    
                    </SubWrapper>
                </ContentWrapper>
                
            </ResultWrapper>
        )
    }
}
/*
    this.props.data -> property
    contentid: 2557515
    contenttypeid: 25
    subcontentid: 988449
    subdetailalt: "월영교"
    subdetailimg: "http://tong.visitkorea.or.kr/cms/resource/05/2557505_image2_1.jpg"
    subdetailoverview: "저녁 6시 반이 넘어 도착하였습니다. 어스름이 깔린 안동에 닿자 가고 싶은 장소가 생겼습니다. 그렇게 본래 여행 계획과 달리 첫 번째로 여행하게 된 곳은 바로 월영교입니다.↵월영교는 길이 387m에 너비 3.6m로 국내에서 가장 긴 목책 인도교이며 다리 한가운데에 있는 정자는 월영정입니다. 먼저 간 남편을 위해 아내가 머리카락으로 만든 한 켤레 미투리 모양을 다리 모습에 담았다고 합니다. 월영교는 여행하며 보았던 여러 다리 중에서 가장 관리가 잘 된 다리가 아닌가 하는 생각이 듭니다. 월영교를 포함한 대부분의 다리는 야경을 보러 가는 경우가 많은데, 초반에는 관리가 잘 되어 멋있는 야경을 보여주지만, 시간이 지나면 지날수록 점차 관리가 소홀해져 듬성듬성 이빨 빠진듯한 야경을 보여주는 다리가 많기 때문이죠. 그런데 일년 전이나 지금이나 월영교는 관리가 잘 되어 있었고 매력적인 야경 또한 잘 유지되고 있었답니다."
    subname: "어느 곳이나 포토존, 월영교"
    subnum: 0
*/
export default Result;

const ResultWrapper = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
animation: fadein 2s;

&:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    transform: translateY(20px);
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
`;
const ContentWrapper = styled.div`
display: flex;
`
const Title = styled.h1``;

const SubName = styled.span`
font-size: 1.5em;
margin-bottom: 5px;
font-weight: 500;
`;
const SubWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`;

const Img = styled.img`
    max-width: 500px;
`;

const ContText = styled.span`

`;