export interface TourSpot {
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly tags?: string[];
  readonly thumbSrc?: string;
}

export const TourSpots: readonly TourSpot[] = [
  {
    title: '제천 의림지와 제림',
    location: '오랜 역사를 간직한 아름다운 저수지',
    description: '충북 제천시',
    tags: ["충북", "어린이", "가족여행", "당일치기"],
    thumbSrc: "/img/sample/card_3_4x4.png"
  },
  {
    title: '경주 불국사',
    location: '신라 문화의 정수를 담은 유네스코 세계문화유산',
    description: '경북 경주시',
    tags: ["경북", "역사", "문화유산", "단체여행"],
    thumbSrc: "/img/sample/card_1_4x4.png"
  },
  {
    title: '제주 성산일출봉',
    location: '장엄한 일출을 감상할 수 있는 세계자연유산',
    description: '제주 서귀포시',
    tags: ["제주", "자연", "트레킹", "포토스팟"],
    thumbSrc: "/img/sample/card_2_4x4.png"
  },
  {
    title: '부산 해운대 해수욕장',
    location: '도시와 바다가 어우러진 국제적 해변',
    description: '부산 해운대구',
    tags: ["부산", "해변", "축제", "야경"],
    thumbSrc: "/img/sample/card_1_4x4.png"
  },
  {
    title: '전주 한옥마을',
    location: '전통과 현대가 공존하는 문화의 거리',
    description: '전북 전주시',
    tags: ["전북", "한옥", "전통문화", "맛집"],
    thumbSrc: "/img/sample/card_3_4x4.png"
  },
  {
    title: '설악산 국립공원',
    location: '웅장한 암봉과 계곡이 어우러진 명산',
    description: '강원도 속초시, 인제군, 양양군, 고성군',
    tags: ["강원", "등산", "자연", "캠핑"],
    thumbSrc: "/img/sample/card_4_4x4.png"
  },
  {
    title: '여수 엑스포 해양공원',
    location: '미래와 해양이 만나는 복합 문화공간',
    description: '전남 여수시',
    tags: ["전남", "과학", "체험", "야경"],
    thumbSrc: "/img/sample/card_1_4x4.png"
  },
  {
    title: '인천 차이나타운',
    location: '한국 속 작은 중국을 만나다',
    description: '인천 중구',
    tags: ["인천", "다문화", "맛집", "역사"],
    thumbSrc: "/img/sample/card_2_4x4.png"
  },
  {
    title: '대전 엑스포 과학공원',
    location: '과학의 원리를 재미있게 배우는 체험의 장',
    description: '대전 유성구',
    tags: ["대전", "과학", "체험", "가족여행"],
    thumbSrc: "/img/sample/card_1_4x4.png"
  },
  {
    title: '안동 하회마을',
    location: '조선시대 양반 문화를 간직한 전통 마을',
    description: '경북 안동시',
    tags: ["경북", "전통문화", "역사", "한옥"],
    thumbSrc: "/img/sample/card_3_4x4.png"
  },
  {
    title: '속초 아바이마을',
    location: '북한 실향민들의 삶과 문화를 엿볼 수 있는 곳',
    description: '강원도 속초시',
    tags: ["강원", "역사", "맛집", "포토스팟"],
    thumbSrc: "/img/sample/card_2_4x4.png"
  },
  {
    title: '담양 죽녹원',
    location: '울창한 대나무 숲길이 인상적인 생태공원',
    description: '전남 담양군',
    tags: ["전남", "자연", "힐링", "산책"],
    thumbSrc: "/img/sample/card_3_4x4.png"
  },
  {
    title: '통영 동피랑 벽화마을',
    location: '알록달록한 벽화로 유명한 마을',
    description: '경남 통영시',
    tags: ["경남", "예술", "포토스팟", "문화"],
    thumbSrc: "/img/sample/card_4_4x4.png"
  },
  {
    title: '강릉 정동진',
    location: '해돋이 명소로 유명한 해변',
    description: '강원도 강릉시',
    tags: ["강원", "일출", "바다", "로맨틱"],
    thumbSrc: "/img/sample/card_2_4x4.png"
  },
  {
    title: '대구 근대골목',
    location: '근대 문화유산이 잘 보존된 역사적 거리',
    description: '대구광역시 중구',
    tags: ["대구", "역사", "문화", "도보여행"],
    thumbSrc: "/img/sample/card_2_4x4.png"
  },
];

