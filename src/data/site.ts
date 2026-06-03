export interface Branch {
  name: string;
  address: string;
  phone?: string;
  mapUrl?: string; // 지도 앱에서 열기 링크
  mapEmbedUrl?: string; // 네이버 지도 iframe src URL
  transit: string[];
  parking?: string;
}

export const site = {
  name: "진우건설",
  nameEn: "JW CONSTRUCTION",
  slogan: "경험이 빚은 공간, 진심이 담긴 마무리",
  subSlogan: "기초부터 마감까지, 모든 공사를 내 집처럼 책임과 정성을 다합니다",
  phone: "02-934-0489", // 대표번호
  mobile: "010-9928-8479", // 직통
  email: "jwconst.official@gmail.com",
  businessHours: "연중무휴 08:00 - 20:00",
  businessNumber: "205-06-93896",
  siteUrl: "https://jwconstruction.co.kr",
  branches: [
    {
      name: "본점",
      address: "서울특별시 노원구 덕릉로 791, 101호",
      phone: "02-934-0489",
      mapUrl: "https://naver.me/F1aLnTDx",
      mapEmbedUrl: "https://map.naver.com/p/entry/place/504917846?lang=ko",
      transit: [
        "4호선 불암산역 2번 출구 도보 300m",
        "상계역 5번출구 1138,1224,1139 버스 탑승 후 '동아불암아파트' 정류장 하차, 도보 150m",
      ],
      parking: "",
    },
  ] as Branch[],
  social: {
    instagram: "",
    youtube: "",
    blog: "https://blog.naver.com/jw_cons",
  },
  tallyFormId: "zxLo4E",
};
